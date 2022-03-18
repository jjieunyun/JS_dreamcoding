'use strict'
//자바스크립트는 동기이다. : 호이스팅 이후 작성한 순서에 맞춰 동기적으로 실행된다
//hoisting : var, function 선언들이 제일먼저 위로 올라가는 것
console.log('1');
setTimeout(() =>  console.log('2'),1000);
console.log('3');

//setTimeout : 브라우저에서 대기했다가 함수를 실행한다 -> 비동기

//동기적 callback
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'))

/* 출력방법
1. 함수를 가장먼저 선언
2.1을 출력
3. setTimeout을 브라우저에서 1초만큼 대기
4. 3을 출력
5. hello출력
6. 2출력
*/


//비동기적 callback (언제실행될지 모름)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

console.clear();

//callback Hell example(콜백지옥)
class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'ellie' && pw === "dream") ||
                (id === 'coder' && pw === 'academy')) {
                    onSuccess(id);
                }
            else {
                onError(new Error('not found'));
            }
        },2000);
    }
    
    getRoles(user,onSuccess, onError){
        setTimeout( () => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}



    const userStorage = new UserStorage();
    const id = prompt('enter your Id');
    const pw = prompt('enter your pw');
    userStorage.loginUser(
        id,
        pw, 
        user => {
            userStorage.getRoles(
                user, 
                userWithRole => {  
                    alert(
                        `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            }, 
            error => {
                console.log(error);
            }
        };
    }, 
    error => {
        console.log(error);
        }
    );

    