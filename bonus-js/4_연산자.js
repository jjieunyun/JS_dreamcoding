//연산자
//false : 0, -0 , ' ', null, NaN, undefined
//true : -1, 'hello', []

let num = 8;  //undefined : 
if(num) {
    console.log('true!');
}else {
    console.log('false');
}

num && console.log(num);