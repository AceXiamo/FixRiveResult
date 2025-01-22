import { readdir, rename } from 'node:fs/promises';
import { join } from 'node:path';

async function renamePngFiles(directoryPath: string) {
    try {
        // 读取目录下所有文件
        const files = await readdir(directoryPath);
        
        // 过滤出所有 PNG 文件
        const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'))
            // 添加数字排序
            .sort((a, b) => {
                const numA = parseInt(a.replace('.png', '')) || 0;
                const numB = parseInt(b.replace('.png', '')) || 0;
                return numA - numB;
            });
        
        // 对每个文件进行重命名
        for (let i = 0; i < pngFiles.length; i++) {
            const oldPath = join(directoryPath, pngFiles[i]);
            // 生成新文件名（5位数字格式）
            const newFileName = `${String(i + 1).padStart(5, '0')}.png`;
            const newPath = join(directoryPath, newFileName);
            
            await rename(oldPath, newPath);
            console.log(`重命名: ${pngFiles[i]} -> ${newFileName}`);
        }
        
        console.log('所有文件重命名完成！');
    } catch (error) {
        console.error('发生错误:', error);
    }
}

// 指定要处理的目录路径（当前目录用 '.'）
const directoryPath = '.';
renamePngFiles(directoryPath);
