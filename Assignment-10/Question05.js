/** Q5 Write a Node.js program that uses the Path module to manipulate file paths.**/
const path = require('path');

const filePath = 'D:/Coding/Web Development Practice Code/PW Skills/Assignments/Assignment-10/example.txt';

const fileName = path.basename(filePath);
console.log('File Name:', fileName);

const directoryName = path.dirname(filePath);
console.log('Directory Name:', directoryName);

const newPath = path.join(directoryName, 'newFolder', 'newFile.txt');
console.log('New Path:', newPath);

const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('Absolute Path:', absolutePath);
