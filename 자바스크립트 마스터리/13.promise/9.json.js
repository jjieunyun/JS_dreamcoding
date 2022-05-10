/*
자바스크립트 객체 문서

서버와 클라이언트 간의 HTTP통신을 위한 object 형태의 텍스트 포맷
stringify(object) : JSON
Parse(JSON) : object
*/

const hodu = {
    name : 'hodu',
    age : 2,
    eat: () => {
        console.log('eat')
    },
};

//직렬화 - serializing : 객체를 문자열로 변환

const json = JSON.stringify(hodu);
console.log(hodu)
console.log(json)

//역직렬화 - Deserializing :  문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj)