/*
* 글로벌 context의 this
* - 브라우저 : windows
* - 노드 : 모듈을 가리킨다
*/

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
//globalThis.setTimeout();
//setTimeout() -> 생략이 가능하다

console.clear();

/*
함수 내부에서의 this
- stric use 모드에서는 undefined
- 느슨한 모드에서는 global This
- 생성자함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 기리킨다
*/ 

function func() {
    console.log(this);
}
func()

function Cat(name) {
    this.name = name;
    this.printName = function() {
        console.log(this.name)
    };
}

const cat1 = new Cat('달이');
const cat2 = new Cat('쩨이');

cat1.printName();
cat2.printName();