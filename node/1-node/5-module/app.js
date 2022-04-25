//최신 모듈!!!
/*자바스크립트의 모듈형식을 사용하고 싶을때!
1. package.json에서 추가해주기 
  "type" : "module",

*/

//counter.js에서 export된것을 전부 가져오고 싶을 때 (*을 써주고 , as사용할이름)
//import * as counter from './counter.js';

import { increase, getCount } from './counter.js';

increase();
increase();
increase();

//counter에있는 getcount라는 함수를 실행
console.log(getCount());