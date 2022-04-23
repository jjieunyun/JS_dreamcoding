const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

//어떤 문자열이 몇번째에 있는지 확인
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

//특별한 문자열을 포함하는지 아닌지
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//문자열에서 원하는 위치 가져옴 ()
console.log(text.substring(0, 2)); //시작열, 마지막열(포함X)
console.log(text.slice(2));  //2번위치부터 잘라짐
console.log(text.slice(-2)); //뒤에서 두번째까지 잘라짐

const space = '            space       ';
console.log(space.trim());

const longText = 'Get to the, point';
console.log(longText.split(' ')); //스페이스 별로 문자열 출력
console.log(longText.split(', ', 2)); //콤마단위로 끊을 수있고,
