/**
Q5 Write a Node.js program that uses the OS module to retrieve information about the current operating system. 
**/

const os = require('os');

const osInfo = {
    arch: os.arch(),
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
};

console.log('Operating System Information:');
console.log(`Architecture: ${osInfo.arch}`);
console.log(`Platform: ${osInfo.platform}`);
console.log(`Type: ${osInfo.type}`);
console.log(`Release: ${osInfo.release}`);
console.log(`Total Memory: ${osInfo.totalMemory}`);
console.log(`Free Memory: ${osInfo.freeMemory}`);
