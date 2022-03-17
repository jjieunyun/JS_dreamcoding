//promise
//자바스크립트 내장 object 비동기적을 수행할 때 콜백함수 대신에 사용

//(1) state : pending -> fulfilled or refected 상태에 대해이해하기  (기능하는 중인지 기능수행 완료 했는지 등)
//(2) producer vs consumer에대해 이해하기! : 누가제공하고 누가 사용하는지.

//1. producer
//when new promise is created ,  the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout( () => {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});

//2. consumers : then, catch, finally
promise
    .then((value) => {
        console.log(value);
})
    .catch(error => {
        console.log(error);
})
    .finally(() => {
        console.log('finally');
});


//3. promise chaining  14분부너~~~
const fetchNum