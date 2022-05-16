function fetchEgg(chichen) {
    return Promise.resolve(`${chichen} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChichen() {
    return Promise.resolve(`🌳 => 🐔`);
    //return Promise.reject(new Error('no chicken'))
}

fetchEgg('🐔')
    .then(egg => console.log(egg));

getChichen()
    .then((chichen) => fetchEgg(chichen))
    .then((egg) => fryEgg(egg))
    .then((friedEgg) => console.log(friedEgg))
    //에러를 적절한 곳에 위치시켜주어야 Promise가 정상적으로 실행된다.
    //.catch(error => console.log(error.name))
