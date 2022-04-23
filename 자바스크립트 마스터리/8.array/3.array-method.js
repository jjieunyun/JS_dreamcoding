// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //class이름을 쓰면 static메소드
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아에팀이 있는지 체크
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); //하나가 잘리고 값이 반환됨
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);
fruits.splice(1, 1, '🍎', '🍓'); 
console.log(fruits); // 배열 자체를 수정(업데이트)


// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); //시작하는 인덱스 포함 , 끝나는 인덱스 미포함
console.log(newArr);  // 배열의 값만 잘라와서 반환한다(배열 수정X)
console.log(fruits); //원래 배열에 들어있는 데이터는 수정되지 않는다
newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);  //arr1과 arr2를 더해서 새로운 배열 반환
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
//중첩배열을 하나의 배열로 만들기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3));  //한단계씩 flat됨
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정(똑같은 값으로 할당)
console.log(arr);

arr.fill('s', 1, 3); //자리수를 지정해서 수정할당(끝값 포함 X)
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); //콤마를 이용해서 문자열로 출력
text = arr.join(' | ');
console.log(text);
