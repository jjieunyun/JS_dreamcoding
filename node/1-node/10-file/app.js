const fs = require('fs');

// API 제공형태 3가지
// rename(...., callback(error, data)) : 비동기로 실행
// try { renameSync(....) } catch(e) { } : 따로 콜백함수를 전달하지 않고 동기적 실행
// promises.rename().then().catch(0) : promise형태로 rername사용


//1. 동기적 실행 : renameSync는 try-catch로 감싸야한다!
//(왜냐면 동기적으로 실행되는데 에러나면 다음것도 실행안되니까)
try { //한번 시도했다가
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) { //에러가 발생했을때
  console.error(error);
}

//2. 비동기적 실행
fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

//3. primise형태로 실행
fs.promises
  .rename('./text2.txt', './text-new.txt') 
  .then(() => console.log('Done!'))
  .catch(console.error);
