# Image Processing and Renaming Tool

This project is a Node.js application that processes and renames PNG images from an input directory. It uses the `sharp` library for image processing and the Node.js `fs/promises` module for file system operations.

## Features

- **Image Processing**: Extracts a portion of each PNG image, removing 1 pixel from the left side.
- **Renaming**: Renames each processed image to a zero-padded 5-digit number.
- **Error Handling**: Logs errors if image metadata cannot be retrieved or if any other error occurs during processing.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Place the PNG images you want to process in the `input` directory.

2. Run the application:
   ```bash
   node main.ts
   ```

3. Processed images will be saved in the `output` directory with new names.

## Code Overview

- **Image Processing and Renaming**: The main functionality is implemented in `main.ts`, which reads PNG files from the `input` directory, processes them using `sharp`, and saves them to the `output` directory with new names.

  ```typescript:main.ts
  startLine: 5
  endLine: 52
  ```

- **Renaming Utility**: An additional utility function for renaming PNG files is provided in `filename.ts`.

  ```typescript:filename.ts
  startLine: 4
  endLine: 37
  ```

## Error Handling

The application includes basic error handling to log issues encountered during file reading, image processing, or renaming.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact

For questions or support, please contact [ximao@qwq.com].
