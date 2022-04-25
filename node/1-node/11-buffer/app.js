// buffer란 ? 고정된 사이즈의 메모리 덩어리 Fixed-size chuck of memory (숫자의 배열)
// 배열의 형태, 데이터의 바이트 그 자체 array of integers, byte of data
const fs = require('fs'); //정의를 보기위해서 작성했음

//1. Buffer라는 class에 from이라는 api를 이용
const buf = Buffer.from('Hi'); 
console.log(buf); //유니코드형태로
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//2. create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString()); //아스키코드를 문자열로!
console.log(buf3.toString()); //buf3에도 똑같이 들어간다

//3. concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
