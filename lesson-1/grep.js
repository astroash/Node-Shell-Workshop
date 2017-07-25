#!/usr/bin/env node

const fs = require('fs');
//const - read the file

//split file into an array by linebreak
const splitter = (string) => {
  return string.split('\n')
}
//filter for elements containing the string & print to terminal
const filterLines = (arrayOfStrings) => {
  return arrayOfStrings.filter(string => {
    return string.includes(process.argv[2])
  })
}

const printToTerminal = (error,file) => {
  if (error){
    process.stdout.write(error)
  } else {
    process.stdout.write(filterLines(splitter(file)).join('\n'))
  }
}
fs.readFile(process.argv[3], 'utf8',printToTerminal)
