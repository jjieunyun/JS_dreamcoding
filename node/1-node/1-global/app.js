//node.js의 global object (최상위 객체)
/*
1. 최상위 객체를 생성하는 것은 불가능하다
2. 전역객체는 전역 스코프를 가지고 있다.(모든 노드 프로그램에서 접근)
3. 전역객체의 자식객체를 사용할 때는 전역객체 기술을 생략할 수있다.*/ 
//clearImmediate, setImmediate

//노드 모듈임을 알려줌 -> vs code내에서 노드를 사용한다고 인식
const fs = require('fs');

console.log(global);

global.hello = () =>{
    global.console.log('hello');
}

global.hello();
hello();