// 10. 기본적으로 primise를 가져오기
//비동기 적으로 실행되기 때문에 순서가 보장되지 않는다. 
//== 순서대로 작성하더라도 실행의 순서가 보장되지 않는다.

//인자는 어떤것이, 추가적인 옵션확인, 리턴되는 값은 무엇인지, Promise라면 catch를 이용해 에러를 잡기 
// 순서가 중요하다면 then안에 작성을 해야한다!
const fs = require('fs').promises;

//1. reading a file (파일읽기)
fs.readFile('./text.txt', 'utf8') //
  .then((data) => console.log(data)) // 파일이 잘 읽어와 지면  -> console.log에 출력하라
  .catch(console.error); //에러가 발생하면 콘솔에 에러발생

//2.writing a file (파일쓰기)
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') // 
  //promise가 void타입이기때문에 then을 쓸 필요는 없지만,에러발생할 수있기 때문에 catch는 해줘야한다!
  .catch(console.error);
  //append를 쓰면 기존 데이터 뒤에 입력된다.
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') //
  .catch(console.error);

//3. copy
fs.copyFile('./file.txt', './file2.txt') //
  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') // 현재 경로의 모든 파일을 가져옴
  .then(console.log) //콘솔로그로 출력
  .catch(console.error);
