// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('😍');
}
// apple이라면? 사과이모지, 하트이모지
fruit === 'apple' ? console.log('🍎') : console.log('😍');

let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji);
