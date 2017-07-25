const fs = require('fs');
const directory = process.cwd();
const filterExtensions = (filesArray) => {
  return filesArray.filter((file) => {
    return file.includes(process.argv[3])
  })
}

const writeToTerminal = (filesArray) => {
  process.stdout.write(filesArray.join(', ')+'\n')
}

const listFiles = (error,files) => {
  if (error){
    process.stdout.write(error)
  } else {
      if (process.argv[2]=== '-ex') {
        writeToTerminal(filterExtensions(files))
      } else {
        writeToTerminal(files);
      }
  }
}

fs.readdir(directory,listFiles);
