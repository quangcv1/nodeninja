const fs = require('fs');

//Read stream
const readStream = fs.createReadStream('./docs/blog3.txt', {highWaterMark: 2048, encoding: "utf-8"});
//Write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', chunk => {
//     console.log('-----NEW CHUNK----------');
//     console.log(chunk);
//     console.log(chunk.toString());
//     writeStream.write('\n---NEW WRITE CHUNK----\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);


