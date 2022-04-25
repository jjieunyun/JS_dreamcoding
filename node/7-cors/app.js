import express from 'express';
import cors from 'cors';

const app = express();

//미들웨어 다운받으면 그냥 cors만해도된다 
app.use(cors({
  origin : ['http://127.0.0.1:5500'],
  optionsSuccessStatus : 200,
  credentials : true, //Access-Control-Allow-Origin 설정과 동일하다
}));

//id 쉐어링 - 다른 서버면 데이터 가져오기 
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
