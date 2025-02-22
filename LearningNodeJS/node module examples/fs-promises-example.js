const fsp = require('node:fs/promises')
const fs = require('node:fs')
const zlib = require('node:zlib')

fsp.readFile('file.txt', 'utf-8')
.then(data => {
    //console.log(data)
})
.catch((err) => {
    console.log(err)
})

const readableStream = fs.createReadStream('file.txt', {
    encoding: 'utf-8',
    highWaterMark: 2
});
const writeableStream = fs.createWriteStream('file2.txt')

// event emitter
// readableStream.on('data', (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

// a better way - pipe:
readableStream.pipe(writeableStream)

const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(fs.WriteStream('file2.txt.gz'))