//**num, string, boolean,  null, undefiend
//위에꺼빼고 나머지는 object!!
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

//변수를 선언하면 그 변수를 위한 data저장공간이 생긴다 ->
//변수를 할당하면 그 변수에 들어있는 값이 복사되어 들어온다!
number2 = 3;
console.log(number);
console.log(number2);


//object
//변수를 선언하면 data를 담을 공간이 할당된다.
//**얘네들은 값이 작아서 변수를 선언하면 그 값이 그대로 저장되지만,
//object에는 변수를 담기에는 너무 크기때문에 '주소 reference'가 저장된다.
let obj = {
    name : 'lee',
    age : 5,
}
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name);
console.log(obj2.name);


//let과 const의 차이점
//let은 선언하고 다른값으로 다시 변경할 수 있다.
let a = 2;
a = 5;

//const로 값을 한번 선언하면 그 변수의 값은 절대로 변경할 수 없다!
const num =5;

//const로 객체를 정의하고나면 -> 그객체의 ref는 잠기게된다.
// reference를 다른 ref로 바꾸는 것은 불가능하지만!
//object가 가리키고 있는 name값을 바꾸는 것은 가능하다!
//why)) object의 data는 어딘가에 따로 저장되어있고 object는 주소(ref)만 담고있기 때문에!
//가르키고있는 data는 
const object = {
    name: 'lee',
    age : 5,
}
//따라서, 주소가 가르키고있는 data는 변경이 가능하다!
obj.name = 'judy'
console.log(obj.name);