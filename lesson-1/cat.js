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

fs.readFile(fileToPrint, writeFile);
