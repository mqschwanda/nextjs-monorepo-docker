import fs from 'fs';
import path from 'path';

export default function jestDirectoryFiles(directory: string) {
  const directoryPath = path.join('.jest', directory);

  return fs
    .readdirSync(directoryPath)
    .map((file) => path.join('<rootDir>', directoryPath, file));
}
