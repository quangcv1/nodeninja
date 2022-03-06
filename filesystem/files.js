const fs = require('fs');
//reading files

console.log(__filename);
console.log(__dirname);

fs.readFile('./docs/blog1.txt'
    , {encoding: "utf-8"}
    , (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.toString());
        }
    })

//writing files
fs.writeFile('./docs/blog2.txt'
    , 'hello chu'
    , (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Done');
        }
    })
//append file
fs.appendFile('./docs/blogappend.txt'
    , 'append'
    , (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Append Done");
        }
    })

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets'
        , err => {
            if (err) {
                console.log(err);
            } else {
                console.log('folder created');
            }
        })
} else {
    fs.rmdir('./assets',
        err => {
            if (err) {
                console.log(err);
            } else {
                console.log('folder deleted');
            }
        })
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', err => {
        if (err) {
            console.log(err);
        } else {
            console.log('file deleted');
        }
    })
}
