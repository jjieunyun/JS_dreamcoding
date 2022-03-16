//JSON
//Js objcet notation

//1. object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {  //함수는 제외!
        console.log(name + 'can jump!');
    },
};

json = JSON.stringify(rabbit, ['name','color']);  //원하는 property만 배열로 만들기 가능
console.log(json);


//2. JSON to object
//parse(json)