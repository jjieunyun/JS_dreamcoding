import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

// http://expressjs.com/en/resources/middleware/morgan.html
const app = express();

// cookie-parser
// morgan ->어떤 요청을 받았는지 log로 남김
// cors -> 
// helmet -> 공통적으로 보안에 필요한  header를 추가해준다

// cookie-parser
// key: Cookie
// value: yummy_cookie=choco; tasty_cookie=strawberry

//** 미들웨어 옵션은 변수로 저장해서 모듈관리는 깔끔하게!
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // for options request
  credentials: true, // Access-Control-Allow-Credentials: true
};

//** 사용한 미들웨어들
app.use(cookieParser()); // http://expressjs.com/en/resources/middleware/cookie-parser.html
app.use(morgan('common')); // http://expressjs.com/en/resources/middleware/morgan.html
app.use(cors(corsOptions));
app.use(helmet()); // https://github.com/helmetjs/helmet

app.get('/', (req, res) => {
  console.log(req.cookies); // it will be undefined without cookie-parser
  console.log(req.cookies.yummy_cookie);
  res.send('Welsome!');
});

app.listen(8080);
