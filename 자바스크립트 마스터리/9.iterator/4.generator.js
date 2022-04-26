// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

//function*  =>제너레이터 형태임
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; //next를 호출해야 순회한다.
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
//에러를 던질 수있다! -> generator안에서 에러를 처리할 수있다.
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
