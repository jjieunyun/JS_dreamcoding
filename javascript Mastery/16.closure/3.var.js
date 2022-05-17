function loop() {
    const array = [];
    //var와 let의 차이점!
    for (let i =0; i<5 ;i++) {
        array.push(function () {
            console.log(i);
        });
    }
    return array;
}

const array = loop();
array.forEach((func) => func());

//var은 전역으로 i를 초기화해서 사용하는 것과 결과가 동일하다