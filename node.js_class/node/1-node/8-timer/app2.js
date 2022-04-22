console.log('code1');
setTimeout(()=>{
    console.log('setTimeout 0');
}, 0);


console.log('code2');
setImmediate(()=>{
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(()=>{
    console.log('process.nextTick');
});

/*
위의 함수 실행 결과!

code1,2,3이 순차적으로 실행되고나서
콜백함수들이 실행된다
code1
code2
code3
-------task que---------
process.nextTick
setTimeout 0  -> 정확하게 0초뒤에 실행되지 않는다! 
왜냐면 callback함수이기 때문에 callstack이 빌때까지 기다려야함.
수행해야하는 일이 더 많다면, 실행되기까지 더 오래걸린다!
setImmediate
*/