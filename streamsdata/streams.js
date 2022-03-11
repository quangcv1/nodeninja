const fs = require('fs');

//Read stream
const readStream = fs.createReadStream('./docs/blog3.txt', {highWaterMark: 2048, encoding: "utf-8"});
//Write stream
if(fs.existsSync('./docs/blog4.txt')) {
    fs.unlink('./docs/blog4.txt', (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Done delete file blog4");
        }
    })
}
const writeStream = fs.createWriteStream('./docs/blog4.txt');
console.log("Done created blog4 file");

// readStream.on('data', chunk => {
//     console.log('-----NEW CHUNK----------');
//     console.log(chunk);
//     console.log(chunk.toString());
//     writeStream.write('\n---NEW WRITE CHUNK----\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);


