// buffer란 ? 고정된 사이즈의 메모리 덩어리Fixed-size chuck of memory
// 배열의 형태, 데이터의 바이트 그 자체 array of integers, byte of data
const fs = require('fs');

//Buffer라는 class에 from이라는 api를 이용
const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
