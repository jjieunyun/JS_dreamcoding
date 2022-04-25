//count변수는 외부에 노출되지 않는다.
//export한 함수만 노출된다
let count =0;

function increase() {
    count++;

};

function getCount() {
    return count;
}

//모듈을 export해야 다른 곳에서 사용가능하다

module.exports.getCount = getCount;
module.exports.increase = increase;

//모듈을 생략할 수있다?

//exports = {}; -> exports에 특별한 값을 바로할당하면 module.exports의 역할을 할수없다.
exports.increase = increase;

console.log(module);