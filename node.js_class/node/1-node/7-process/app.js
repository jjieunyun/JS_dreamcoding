const process = require('process');

console.log(process.execpath);

//
setTimeout( ()=> {
    console.log('setTimeout')
})

//callstack 다 수행하고나서 수행함
//nextTick 함수를 가장 먼저 수행한다.
process.nextTick( ()=>{
    console.log('nextTick');
}) 