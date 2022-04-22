//this는 global이다?
//this는 사용하는 곳에 따라서 달라진다!

function hello() {
    console.log(this);
    console.log(this === global);
}

hello();

class A{
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('------class-------');
        console.log(this);
        //this는 global이 아니다 
        console.log(this === global);
    }
}

//만들어둔 클래스 호출
const a = new A(1);
//a의 함수호출
a.memberFunction();

console.log(`--------global scope---------`)
//함수와 클래스에서 사용되지 않았을 때!
//global object 
console.log(this)
console.log(this === module.exports);