const fsPromises = require('fs').promises;
const path = require('path');



const fileOps = async () => {
    try {
        await fsPromises.unlink(path.join(__dirname,'starter.txt'));
        const data = await fsPromises.readFile(path.join(__dirname,'newReply.txt'), 'utf8');
        await fsPromises.writeFile(path.join(__dirname, 'promisesData.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'promisesData.txt'), path.join(__dirname, 'newReply.txt'));
        await fsPromises.rename(path.join(__dirname, 'promisesData.txt'), path.join(__dirname, '.RenamedProdata'));
        console.log("Operation completed...");
    } catch (err) {
        console.log(err);
    }
}

fileOps();
/*
To delete a file use unlink()
fs.readFile(path.join(__dirname, 'starter.txt'),'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'reply.txt'),  'Welcome to nodejs Ishmael! You can do it', (err) => {
    if (err) throw err;
    console.log("Write operation completed");
    fs.appendFile(path.join(__dirname, 'reply.txt'), '\nI know you can still do it', (err) => {
        if (err) throw err;
        console.log('append operation appended');
        fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename operation completed')
        })
    })
})


fs.appendFile(path.join(__dirname, 'reply.txt'), 'I know you can still do it', (err) => {
    if (err) throw err;
    console.log('file operation appended');
})
*/
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error ${err}`);
    process.exit(1);
})