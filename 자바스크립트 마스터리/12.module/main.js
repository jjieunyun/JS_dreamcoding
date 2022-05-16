//받아올때 이름 똑같이 가져오고 사용하고싶은 이름을 as로 넣어준다.
//import {increase as inc} from './conter.js'
//import {increase, getCount} from './counter.js'

//그룹화 해서 사용가능함
import * as counter from './conter.js'

counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount())