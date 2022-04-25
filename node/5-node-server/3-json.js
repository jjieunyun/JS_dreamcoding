const http = require('http');

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
  { name: 'Frontend' },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what? 클라이언트가 어떤 데이터를 원하는지?
  const method = req.method; // how?, action? 어떤 메소드를 받아올건지
  if (url === '/courses') {
    if (method === 'GET') { //사용자가 courses를 읽고싶다면?
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(courses)); //JSON형태로 변환해서 보내준다
    } else if (method === 'POST') {
      const body = []; //텅텅빈 바디를 보낸다
      req.on('data', (chunk) => {  //dta라는 이벤트가 발생하면 , chunk 부분적인 data
        console.log(chunk);
        body.push(chunk);
      });

      req.on('end', () => { 
        const bodyStr = Buffer.concat(body).toString();
        const course = JSON.parse(bodyStr);
        courses.push(course);
        console.log(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(8080);
