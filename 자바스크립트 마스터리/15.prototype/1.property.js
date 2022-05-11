const dog = { name : '호두', emoji : '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

//객체안의 property 존재유무를 알수있는 방법
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//object의 각각의 property는  property descript라고 하는 객체로 저장된다.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors)

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc)

/*
defineProperty : 객체의 property를 서술할 수 있다.
Object.defineProperty(dog, 'name' {
    value : '멍멍',
    writable : false,
    enumerable : false,
    configurable : false,
})*/