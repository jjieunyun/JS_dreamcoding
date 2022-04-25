const path = require('path');
console.log('__dirname'); 
console.log(__dirname); //1. 현재위치
console.log(__filename);  //2. 파일 이름

console.log(path.sep); //3. 경로 구분자 : \

console.log(path.delimiter); //4. 환경변수 구분자 : ;

//basename
console.log(path.basename(__filename)); //파일이름
console.log(path.basename(__filename, '.js'));  //확장자 제거 



//dirname - directory이름만 가져오기
console.log(path.dirname(__filename));

//extension - 확장자 가져오기
console.log(path.extname(__filename));

//parse - 전체경로를 하나 씩 분리함(object형태)
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root)

//string형태로 변환
const string = path.format(parsed);
console.log(string);

// isAbsolute : 절대경로인지 확인가능 (절대경로라면 true, 아니라면 false)
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/ 절대경로로 시작함
console.log('isAbsolute?', path.isAbsolute('../')); //상대경로

// normalize : 경로가 이상하면 알아서 고쳐줌
console.log(path.normalize('./folder////////sub'));

// join : 현재 새로운 폴더를 만들고 싶을때 
console.log(__dirname + path.sep + 'image'); //현재 폴더안에 + 경로구분자(path.sep) + 폴더이름
console.log(path.join(__dirname, 'image')); //path.join : 현재 디렉토리안에 image라는 폴더를 만들어 줌