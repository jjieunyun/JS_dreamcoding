//클래스를 베이스로한 객체지향프로그래밍
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    printName() {
        console.log(`${this.name} ${this.emoji}`);
    }
}

class Dog extends Animal {
    play() {
        console.log('play!!')
    }
}


class Tiger extends Animal {
    hunt() {
        console.log('HUNT!!!')
    }
}

const dog1 = new Dog('꾸꾸', '🐩');
const tiger1 = new Tiger('호돌', '😻');
dog1.printName();
tiger1.printName();

dog1.play()
tiger1.hunt()


