const dog1 = { name: '호두', age : 2, emoji : '🐕‍🦺' };
const dog2 = { name: '꾸꾸', age : 1, emoji : '🐩' };

function Dog(name,age,emoji) {
    this.name = name;
    this.age = age;
    this.emoji = emoji;

    //인스턴스 레벨의 함수 : 메모리낭비...! -> 프로토타입 레벨의 함수를 생성하면 된다.
    this.printName = () => {
        console.log(`${this.name} ${this.age} ${this.emoji}`)
    }
}

const dog11 = new Dog('호두',2,'🐕‍🦺');
const dog22 = new Dog('꾸꾸', 1, '🐩');
console.log(dog11,dog22)

//prototype level function
Dog.prototype.printName = function() {
    console.log(`${this.name} ${this.age} ${this.emoji}`)
};

const dog111 = new Dog('호두',2,'🐕‍🦺');
const dog222 = new Dog('꾸꾸', 1, '🐩');
console.log(dog111,dog222)
