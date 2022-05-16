//자바스크립트는 동기적으로 실행되기 때문에 오래걸리는 작업을 순차적으로 진행하면 비효율적이다.

function a() {
    return 1
}

function b() {
    return a() + 1;
}

function c() {
    return b() + 1;
}

const result = c();
console.log(result);