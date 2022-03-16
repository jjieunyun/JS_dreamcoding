'use strict'

//Array

//1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍕','🍔','🍟'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);  //제일 마지막 인덱스

//3. looping over an array
//a. for
console.clear();
for (let i=0; i<fruits.length;i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit));

//4. Addiction, deletion, copy
//push : add an item to the end
fruits.push('🌭','🍜');
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning
fruits.unshift('🥪','🧁');
console.log(fruits);

//shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

//주의!! 매우느림 note!! shift , unshif are slower than pop, push!!!!! 

//splice : remove an item by index position
fruits.push('🥯','🍗');
console.log(fruits);
fruits.splice(1,1);  // start index , deleteCount 
console.log(fruits);
fruits.splice(1,1,'🍛','🍣');
console.log(fruits);

//concat : combine two arrays
const fruit2 = ['😊','😍'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);


//5. searching
//indexOf : find the Index
//index가 없으면 -1로 나타남!
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍣'));
console.log(fruits.indexOf('🌭'));

//includes
console.log(fruits.includes('냠'));
console.log(fruits.includes('🍗'));

//lastIndexOf
console.clear();
fruits.push('🌭');
console.log(fruits);
console.log(fruits.indexOf('🌭'));  //맨첨의 인덱스값 출력
console.log(fruits.lastIndexOf('🌭'));  //맨 마지막의 인덱스값 출력