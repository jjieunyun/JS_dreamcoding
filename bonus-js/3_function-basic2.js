//함수 정의, 호출, 그리고 콜백함수

const num =1;
const num2 =2;
const result = num + num2;
console.log(result);

const num3 =1;
const num4 = 2;

function add(a,b) {
    return a + b;
}

const sum = add(3,4);
console.log(sum);

//함수의 정의~!!
//함수또한 object이다! 
//따라서, 코드블럭은 메모리 어딘가에 저장되어있고, 
//그 저장되어 있는 주소를 함수이름인 add가 저장하게된다~!!
function add(num1, num2) {
    return num1 + num2;
}

//아무런 인자를 받지 않는 함수는 인자값을 넣어도 실행 안됨~
//어떤 데이터를 받고싶다면?  인자값을 넣어주면됨! 내가 정하는 것
function print(a, b) {
    console.log(a+" "+b);
}
print(8,23);

//함수를 다른 변수에 할당하면 ~? 그 함수가 가리키고 있는 ref주소가 그 변수에 
//복사된다!
const doSomething = add;

const results = doSomething(2,3);
console.log(results);


//중요)) 함수의 이름을 변수에 할당하거나 or 다른함수의 인자로 전달한다는 것은
//이름이 가리키고있는 함수의 ref를 전달한다는것과 같다.
function surprise(operator) {  //surprise(add)를 했기 땜에 operator에 add ref저장
    const result_sur = operator(2,3);  //그래서 add(2,3)이랑 동일함! (인자가 없다면 NaN)
    console.log(result_sur);
}

function divide(num1, num2) {
    return num1 / num2
};

surprise(divide); //->divide함수의 ref를 surprise함수의 인자인 operator가 받는다.
surprise(add); //->add함수의 ref를 surprise함수의 인자인 operator가 받는다.