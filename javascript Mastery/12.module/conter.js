let count = 0;

//모듈안에서 딱 하나만 export하는 경우에는 export default를 사용한다

export  function increase() {
    count++;
    console.log(count);
}

export function getCount() {
    return count;
}