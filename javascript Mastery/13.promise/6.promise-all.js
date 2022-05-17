function getBanana() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('🍌');
        }, 1000);
    })
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('🍎');
        }, 2000);
    })
}

function getOrange() {
    return Promise.reject(new Error('no Orange'));
}

//바나나와 사과를 함께 가지고 오기

getBanana()
    .then((banana)=> 
        getApple()
            .then((apple) => [banana,apple])
    ).then(console.log)


//Promise.all -> 병렬적으로 실행하기 - 
Promise.all([getBanana(),getApple()])
    .then(fruits => console.log('all : ', fruits));

//Promise.race -> 주어진 promise중에 제일 빨리 수행된것이 이김
Promise.race([getBanana(),getApple()])
.then(fruits => console.log('race : ', fruits))

//allSettled -> 정상처리&에러발생 전부 출력
Promise.allSettled([getBanana(),getApple(),getOrange()])
    .then(fruits => console.log('allSettled : ', fruits))
    .catch(console.log);