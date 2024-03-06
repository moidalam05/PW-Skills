/**
Q2 Write a Node.js program that reads content from a file named "input.txt" and writes the content to a new file named "output.txt" 
**/
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'input.txt');
const outputFile = path.join(__dirname, 'output.txt');

fs.readFile(inputFile, 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading file:', err.message);
		return;
	}

	fs.writeFile(outputFile, data, 'utf8', (err) => {
		if (err) {
			console.error('Error writing file:', err.message);
			return;
		}
		console.log('Content has been copied from input.txt to output.txt');
	});
});
