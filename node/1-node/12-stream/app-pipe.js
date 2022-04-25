const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip'); //압축된 데이터
const piping = readStream.pipe(zlibStream).pipe(writeStream);  //파이프로 연결 여러개가능
piping.on('finish', () => {
  console.log('done!!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);
