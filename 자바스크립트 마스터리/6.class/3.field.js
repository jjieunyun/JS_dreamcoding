// 접근제어자 - 캡슐화
//->생성된 다음에 외부에서 접근하여 데이터를 변경할 수없게 한다.
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  //생성자 함수 밖에서 초기 값을 설정할 수 있다 (field)
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함
console.log(apple);

