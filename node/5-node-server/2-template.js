const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
// const http2 = require('http2'); // https

const name = 'jjieun';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'Node' },
  { name: 'Frontend' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    ejs //promise로 사용할 수있다!!
      .renderFile('./template/index.ejs', { name : name }) //키와 밸류가 같으면 생략가능
      .then((data) => res.end(data));
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then((data) => res.end(data));
  }
});

server.listen(8080);
