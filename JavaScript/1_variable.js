'use strict'

//2. variable (Read,write)
//let (added in ES6)
let globalName = "global name"
{
    let name = "jjieun"
    console.log(name);
    name = "hello"
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//1. var histing : 어디에 선언하던지 상관없이 값을 끌어올려주는 것
//2. block scope이 없음! 

//3. constant (only read)
//favor immutable data type always for a few reasons!
// - security
// - thread safety
// - reduce human mistakes

const daysInweek = 7;
const maxNumber = 5;

//4. variable types

const count = 17;
const size = 1.7;
const nAn = 1 // "not a Number"

//5. string

//6. boolean

//7. undefined

//8. object 
const myname = {
    name : "지은",
    age : 31

}

//Dynamic typing : 
let text = "hello";
console.log(text, typeof(text));
text = 1;
console.log(text, typeof(text));
