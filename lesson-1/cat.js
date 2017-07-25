#!/usr/bin/env node

const fs = require('fs');
const fileToPrint = process.argv[2];

const writeFile = (error,file) => {
  if (error){
    process.stdout.write(error);
  } else {
    process.stdout.write(file);
  }
}

const readStream = fs.createReadStream(fileToPrint);
let fileContent = '';

readStream.on('data', (chunk)=> {
  fileContent += chunk;
})

readStream.on('error', (error) => {
  writeFile(error);
})

readStream.on('end', () => {
  writeFile(null, fileContent)
})
