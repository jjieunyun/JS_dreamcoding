//object

//1. Literals and Properties
const obj1 = {} //object literal
const obj2 = new Object(); //object constructor

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie', age : 4};
print(ellie);

ellie.hasJob = true;  // 뒤늦게 객체추가가능
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties 계산된 프로퍼티
console.log(ellie.name);
console.log(ellie['naem']);  //str타입으로 (어떤 타입을 써야할지 모를때) 

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');


//3. property Value Shorthand
const person1 = { name: 'bob', age : 2};
const person2 = { name: 'ellie', age : 4};
const person3 = { name: 'dave', age : 3};
const person4 = Person('jieun', 30);
console.log(person4)


//4. constructor function
function Person(name,age) {
        this.name = name;
        this.age = age;
}

//5. in