import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

//에러처리방법 : 미들웨어에서 에러를 처리하는 것이 좋다!
app.get('/file1', (req, res) => { //
//   1. 비동기적 : 에러가 콜백함수내에서 적절하게 처리되도록 해야한다
//      비동기는 promise,try - catch 아무것도 에러를 잡을 수 없다(내부적으로 에러가 발생해서)
//   fs.readFile('/file1.txt', (err, data) => {
//     if (err) {
//       res.sendStatus(404);
//     }
//   });

//   2. 동기적
  try {
    const data = fs.readFileSync('/file1.txt');
  } catch (error) {
    res.sendStatus(404).send('file not Found')
  }
});

app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt') //
    .catch((error) => {
      res.sendStatus(404);
    });
});


//Async 예제
//함수앞에 async를 마크해주면 -> 함수자체는 promise로 감싸져서 내부적으로 에러가 생김
app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt'); //코드자체는 동기적
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
