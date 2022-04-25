const fruits = ['🍌', '🍓', '🍇', '🍓'];

//1. 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
fruits.forEach(function (value,index,array) {
  console.log(value);
  //console.log(index);  사용하지 않는 인자는 생략이 가능하다.
  //console.log(array);
});
fruits.forEach((value) => console.log(value));

// 2. 조건에 맞는(콜백함수) 아이템을 찾을때
//Q.배열안에 쿠키를 찾기!
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === '🍪');
console.log(result);

// 3. findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환 (조건이 맞다면 true)
result = products.findIndex((item) => item.name === '🍪');
console.log(result);

// 4. some : 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪');
console.log(result);

//5.  every : 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

// 6. filter : 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪');
console.log(result);

console.clear();

// 7. Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2); //2배씩 곱해서 새로운 배열 반환
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// 8. Flatmap: 중첩된 배열을 쫘악 펴서 새로운 배열로!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// 9. sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);  //문자열 형태로 변환되어 1담에 10이온다
// < 0 : a가 앞으로 정렬, 오름차순
// > 0 : b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// 10. reduce 배열의 요소들을 접어서 접어서 값을 하나로!
//sum은 더해서 저장되는 변수 , 0 은 맨처음에 초기화 되는 값
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
