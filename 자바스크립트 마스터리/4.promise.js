//주어진 seconds(초)가 지나면 callback함수를 호출함
//단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(seconds) {
    return new Promise();
}

runInDelay(2)
    .then(()=>console.log('타이머 완료'))
    .catch(console.error)
    .finally(()=> console.log('끝났다'))


