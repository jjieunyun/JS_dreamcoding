//class
//클래스 안에 사용자가 원하는 기능을 다 넣게 되면, 사용자가 컨트롤 하기가 어렵다.
//콜백함수를 이용해서 class를만들게 되면 사용자의 편의에 따라 컨트롤 할 수 있다.

//하나의 class로 여러기능을 수행하는 object를 만들 수 았다.
class Counter {
    constructor(runEvery5Times){  //생성이되면~
        this.counter = 0; //counter라는 변수가 있고 0으로 초기화된다.
        this.callback = runEvery5Times;
    }

    increase() {  //increase라는 함수도 있따!
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 ===0) {  //
            this.callback && this.callback(this.counter);
        }
    }
}
function printSomething(num) {  //동작값을 따로 조정할 수 있다.
    console.log(`yo! ${num}`);
}
function alertNum(num) {
    alert(`alert! ${num}`);
}

//class Counter와같이 counter와 callback함수를 가지고있음.
const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();