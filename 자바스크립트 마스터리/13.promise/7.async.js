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

async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];
}

fetchFruits()//
    .then((fruits) => console.log(fruits));




