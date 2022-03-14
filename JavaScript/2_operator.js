//string concatenation

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 +2 = ${1+2}`);

//Q1. 짝수만 출력 (0부터 10까지) -continue사용
for (let i =0;i <11;i++) {
    if (i % 2 !==0) {
        continue;
    }
    else {
        console.log(i);
    }
} 

//Q2. 0부터 10까지 숫자중에서 8까지만 출력

for(i =0;i <11; i++) {
    if (i >= 9) {
        break;
    }
    console.log(i);
}