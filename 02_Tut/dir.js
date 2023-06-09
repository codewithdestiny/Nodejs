const fs = require('fs');
const path = require("path");

if(!fs.existsSync(path.join(__dirname, 'new'))){
    fs.mkdir(path.join(__dirname, 'new'), (err) => {
        if (err) throw err;
        console.log('directory created');
    });
}else{
    fs.rmdir(path.join(__dirname, 'new'), (err) => {
        if (err) throw err;
        console.log('directory removed');
    })
}