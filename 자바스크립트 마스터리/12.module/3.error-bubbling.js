//bubbling up propagating

function a() {
    throw new Error('error!')
}

function b() {
    try {
        a();
    }catch(error) {
        console.log('내가 핸들링 할 수없는 에러라면? 다시 throw가능')
        throw error;
    }
}

function c() {
    b()
}

try{
    c()
}catch (error) {
    console.log('catched!')
}
console.log('done')