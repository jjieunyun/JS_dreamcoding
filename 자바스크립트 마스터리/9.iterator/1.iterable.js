// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;
// (1)심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체다! 라는것을 의미한다

// (2)순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있다.

const array = [1, 2, 3];
//아래 array객체는 전부 Iterator를 리턴함.
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

//Itorator로 하나하나씩 순회하는  for문을 할당할 수있다.
for(let item of array.values(){
  console.log(item)
})

// iterator 사용해 보기!
const iterator = array.values();

//Iterater에는 next,thorow함수가 있다.
while (true) {
  const item = iterator.next(); //next를 호출해야 첫번째 부터(순서대로)아이템 호출
  if (item.done) break; //done이라면 그만두고 (값이 false임)
  console.log(item.value);
}

for (let item of array) {
  console.log(item);
}

for (let item of array.values()) {
  console.log(item);
}

//일반 객체는 Iterable하지 않다. 
//object는 of를 사용할 수없고 in을 사용할 수있다. (안의 값을 하나씩 반환함)
const obj = { id: 123, name: 'Ellie' };
for (const key in obj) {
  console.log(key);
}
