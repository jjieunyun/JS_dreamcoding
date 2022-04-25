const fs = require('fs');


//write할때도 stream을 사용할 수있다.
const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished!');
});

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end();
