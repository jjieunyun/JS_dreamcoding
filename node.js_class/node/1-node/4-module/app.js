//모듈!!!
/*
모듈의 장점 : 내가 노출하고 싶은 data만 노출할 수있다.
import를 해서 사용
*/

const counter = require('./counter');

//counter에있는 increase함수를 이용해서 값을 증가시킨다
counter.increase();
counter.increase();
counter.increase();

//counter에있는 getcount라는 함수를 실행
console.log(counter.getCount());