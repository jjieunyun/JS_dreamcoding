const fs = require('fs');
console.log('logging');
//콘솔을 지울때 사용
console.clear();

//log level
//브라우저에서 실행하면 글씨 색이 변하고 앞에 아이콘이 표시된다
/*
서버에서는 로그에 남기게 되는데 서버에 문제가 생겼을때 관리하기 편하다.
레벨별로 배포할때 출력할 것인지 선택 할수가있다.

*/
console.log('log'); //개발할때
console.info('info'); //중요한 정보를 남기고 싶을 때
console.warn('warn'); //발생하면 안되지만 치명적인 에러는 아닐 때(경고단계)
console.error('error'); // 심각한 에러가 발생했을때 (사용자에러, 시스템에러)

//assert
console.assert(2===3,'not same');  //참이 아닌경우 출력
console.assert(2===2, 'same'); //참일때 출력

//print object (객체 출력)
const student = {name: 'hodu', age : '2', company : {name : 'ac'}};
console.log(student);
console.table(student);
console.dir(student);
console.dir(student, {showHidden : true, color: false, depth:0});


//measure time(성능확인시 사용)
console.time('for loop');
for (let i=0; i<10 ; i++) {
    i++;
}
console.timeEnd('for loop');

//counting(해당하는 레이블이 몇번 호출 되었는지 확인)
function a(){ 
    console.count('a function');
};
a();
console.countReset('a function');
a();


//trace (디버깅할때)
//무슨 함수가 몇번째 줄에서 호출되었는지 확인하면서 디버깅 가능하다
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace();
}
f1();