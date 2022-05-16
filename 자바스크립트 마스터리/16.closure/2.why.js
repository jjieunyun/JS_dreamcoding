//내부 정보를 은닉하고, 공개(public, 외부함수) 함수를 통핸 데이터 조작을 위해 사용함
//클로저 : 캡슐화와 정보은닉
//class : private filed or method를 사용하는 효과와 동일

function makeCounter() {
    let count =0;
    function increase() {
        count++;
        console.log(count)
    }
    return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

//클래스를 사용해서 closure와 같은 기능을 구현할 수있다.
//클로저는 더이상 잘 사용하지 않는다
class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}

const counter = new Counter();
counter.increase();