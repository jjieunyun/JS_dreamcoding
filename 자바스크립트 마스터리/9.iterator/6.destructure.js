// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];

//변수를 배열로 만들기!! -> 의미있는 이름 전달가능
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎']; //이름과 이모지를 반환한다
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

//object에서 사용
const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) { //person으로 받지않고 분해해서 받아오기
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);


//job: occupation -> 키를 occupation으로 바꿔서 가져온다! 키를 변경할수있다.
const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

//구조분해는 중첩적으로 할 수있다. 
function changeColor({ styles: { color } }) {
  console.log(color);
}
changeColor(prop);
