//async & await
//<비동기 내용>
//서버에서 data를 받아오는데 10초가 걸린다면?
//동기적으로 처리될때 : 사용자 입장에서 서버데이터를 먼저 처리해야되기 때문에 10초를 빈화면으로
//오래걸리는 일들은 비동기적으로 처리하자! 
//so, promise를 쓴다면? : user data가 처리되는대로 callback함수를 불러줄수 있다.

//1. promise써보기
function fetchUser() {
    return new Promise((resolve, reject) => {
        //do network request in 10secs ....

        //promise안에는 resolve나 reject로 완료를 해줘야됨!
        resolve('ellie');
    });
    
}

const user = fetchUser();
user.then(console.log);
console.log(user);

/*
//1-1 async로 써보기 : 코드블럭이 자동으로 promise로 바뀜
async function fetchUser() {
        //do network request in 10secs ....
        return 'ellie'
}

const user = fetchUser();
user.then(console.log);
console.log(user);
*/

//2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getPotato() {
    await delay(2000); //delay가 끝날때 까지 await가 기다려줌
    return '🍟';
}

async function getBread() {
    await delay(1000);
    return '🥯';
}

//promise도 너무 중첩되면 콜백지옥....
/*
function pickFoods() {
    return getPotato()
    .then(potato => {
        return getBread().then(bread => `${potato} + ${bread}`);
    });
}

pickFoods().then(console.log);
*/

//위에꺼 async로 바꾸기
//병열처리의 문제점!! -> 프로미스로 병렬처리하기
async function pickFoods() {
    const potatoPromise = getPotato();  //만들자마자 코드실행
    const breadPromise = getBread();  //만들자마자 위에꺼랑 코드 실행

    const potato = await potatoPromise;
    const bread = await breadPromise;
    return `${potato} + ${bread}`;
}

pickFoods().then(console.log);

//3. useful promise APIs
function pickAllFoods() {
    return Promise.all([getPotato(), getBread()])
    .then(foods => foods.join(' + '));
}

pickAllFoods().then(console.log);


function pickOnlyOne() {
    retrun Promise.race([getPotato(), getBread()]);
}

pickOnlyOne().then(cosole.log);