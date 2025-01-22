import sharp from 'sharp';
import { readdir, rename, mkdir } from 'fs/promises';
import { join } from 'path';

async function processAndRenameImages() {
  try {
    // 创建 output 文件夹（如果不存在）
    await mkdir('output', { recursive: true });

    // 从 input 文件夹读取文件
    const files = await readdir('input');
    const pngFiles = files
      .filter(file => file.toLowerCase().endsWith('.png'))
      .sort((a, b) => {
        const numA = parseInt(a.replace('.png', '')) || 0;
        const numB = parseInt(b.replace('.png', '')) || 0;
        return numA - numB;
      });

    for (let i = 0; i < pngFiles.length; i++) {
      const file = pngFiles[i];
      const newFileName = `${String(i + 1).padStart(5, '0')}.png`;
      
      // 获取图片元数据
      const metadata = await sharp(join('input', file)).metadata();
      
      if (!metadata.width) {
        console.error(`无法获取图片宽度: ${file}`);
        continue;
      }

      // 处理图片并保存到 output 目录
      await sharp(join('input', file))
        .extract({
          left: 1,
          top: 0,
          width: metadata.width - 1,
          height: metadata.height
        })
        .toFile(join('output', newFileName));
      
      console.log(`处理完成: ${file} -> ${newFileName}`);
    }

    console.log('所有文件处理完成！');
  } catch (error) {
    console.error('处理图片时出错:', error);
  }
}

// 运行函数
processAndRenameImages();
