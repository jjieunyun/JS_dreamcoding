//1.function
// one function === one thing
// function is object in JS
'use strict'

function printHello (message) {
    console.log(message);
}
printHello("hi");

//2. parameters
//object는 reference로 전달됨
function changeName (obj) {
    obj.name = 'corder';
}
const jieun = {
    name : 'jieun'
}
changeName(jieun);
console.log(jieun);

//3. Default parameters (added in ES6)
function showMessage(message, from='unknown') {
    console.log(message + ' by ' + from);
}
showMessage('hello');

//4. Rest parameters(added in ES6)
//배열형태로 전달
function printAll(...args) {
    for (let i=0; i<args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream','coding','ellie')

//5. Local scope
//밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        let childMessage = 'hello';
    }
}
printMessage();


//6. callback function
function randomQuiz(answer,printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    }
    else {
        printNo();
    }
}

const printYes = function () {  //anoymous funcion
    console.log('yes!');
}
const printNo = function () {
    console.log('no!');
}

randomQuiz('wrong',printYes, printNo);
randomQuiz('love you',printYes, printNo);