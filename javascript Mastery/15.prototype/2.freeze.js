//동결 Object.freeze
//값의 수정❌, 추가❌, 삭제❌, 속성 재정의 ❌(단, 얕은 꽁꽁 얼림)

const jieun = { name: '지은' };
const dog = {name : '호두', emoji : '🐶', owner : jieun}

Object.freeze(dog);
dog.name = '멍멍'
console.log(dog)
dog.age = 4;

//밀봉 Object.seal 값의 수정✅, 추가❌, 삭제❌, 속성 재정의 ❌
const cat  = {} 
//const cat  = {...dog} 
Object.assign(cat,dog);
Object.seal(cat)
console.log(cat)
cat.name = '달이'
console.log(cat)
cat.emoji = '😻'
console.log(cat)

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

//확장 preventExtensions  추가❌
const tiger  = { name : '호돌'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
console.log(tiger);
delete tiger.name;
console.log(tiger)
tiger.age = 1;
