function add(a, b) {
  return a + b;
}
//함수를 어딘가에 할당하면 -> 주소값을 복사해서 전달하는 것과 같다
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
