//프로토타입 베이스 객체지향프로그래밍

function Animal(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function() {
    console.log(`${this.name} ${this.emoji}`)
};

function Tiger(name,emoji) {
    Animal.call(this, name, emoji);
}

function Dog(name, emoji, owner) {
    Dog.prototype = Object.create(Animal.prototype)
}


Dog.prototype.play = () => {
    console.log('놀자')
}

Tiger.prototype = Object.create(Animal.prototype)
Tiger.prototype.hunt = () => {
    console.log('사냥')
}

const dog1 = new Dog('꾸꾸', '🐶', 'ㅈㅇ')
const tiger1 = new Tiger('어훙', '켘')

console.log(dog1 instanceof Dog)
console.log(dog1 instanceof Animal)