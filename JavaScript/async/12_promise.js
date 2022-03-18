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


//3. promise chaining  
const fetchNum = new Promise( (resolve, reject) => {
    setTimeout( () =>resolve(1), 1000 );
} );

fetchNum
.then(num => num * 2)
.then(num => num * 3)
.then (num => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> resolve(num -1), 1000 );
    } )
})
.then(num => console.log(num));

//4. 오류를 잘 처리하자
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'),1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`),1000);
});
const cook = egg =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`),1000);
});

getHen()
.then(hen => getEgg(hen))
.catch(error => {  //실패햇을때!
    retrun '🥯'
});
.then(egg => cook(egg))
.then(meal => console.log(meal));

