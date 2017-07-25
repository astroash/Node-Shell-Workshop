const fs = require('fs');
const data = "Is it lunch time yet?";

const writeStream = fs.createWriteStream("output6.txt");
writeStream.write(data, 'UTF8');
writeStream.end();
// writeStream.on('finish', () => {
//   console.log("write completed")
// });
