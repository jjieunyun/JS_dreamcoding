// 1. Set (순서 없고, 중복이불가능하다)
const set = new Set([1, 2, 3]); //빈 Set도 가능하고 배열을 넣어서 사용해도 됨
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인 (있는지 없는지 확인)
console.log(set.has(2));
console.log(set.has(6));

// 순회 
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6); //있는데 추가하면 무시된다!
console.log(set); 

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// object 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈 -> object의 가격을 변경하면 data도 변경된다!
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs); //세트의 갯수는 3이된다! 새로운 주소를 가지고 데이터에 추가됨
obj3.price = 8;
console.log(objs);
