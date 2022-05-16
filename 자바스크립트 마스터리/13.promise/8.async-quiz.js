function fetchEgg(chichen) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    return Promise.resolve(`🌳 => 🐔`);
    //return Promise.reject(new Error('no chicken'))
}


//퀴즈 - async await로 바꾸기

async function makeGetChichen() {
    let chicken;
    try{
        chicken = await getChicken();
    } catch{
        chicken ='🐔';
    }
    const egg = await fetchEgg(chicken);
    return freyEgg(egg);
}

makeGetChichen().then(console.log)
