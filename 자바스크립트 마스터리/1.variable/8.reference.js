// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
// 다른변수에 재 할당하는 경우 -> 주소가 복사되어진 다른 곳의 data도 변경
let apple = {
  // 0x1234
  name: '사과',
};
let orange = apple; // 0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);
