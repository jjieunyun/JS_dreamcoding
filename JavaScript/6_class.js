//class - template
//object - instance of a class
//자바스크립트 클래스 : 프로토타입 기반 상속

'use strict'

//1. class declarations
class person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(this.name + ": hello!");
    }
}

//객체 생성
const jieun = new person('jieun', 20);
console.log(jieun.name);
console.log(jieun.age);
jieun.speak;

//2. getter And setters
//방어적인 자세
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //get과 set안에 있는 함수는 이름을 좀 다르게 넣어야함 
    //아니면 무한 호출하게됨
    get age() {  
        return this._age;
    }
    set age(value) {   //사용자가 값을 설정
        this._age = value< 0? 0 : value;  //삼항연산
    }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);


//5. Inheritance
class Shape { //feild
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() { //메소드1
        console.log("drawing " + this.color + " color of");
    }
    
    getArea() { //메소드2
        return this.width * this.height
    }
}

//필드와 메소드 상속과 다형성
class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() { //다형성
        return (this.width * this.height) / 2;
    }
}


const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();

console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();


//6. class check instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);