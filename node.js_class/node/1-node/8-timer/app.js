let num =1;

//
setInterval(()=> {
    console.log(num++);
},1000)

setTimeout(()=>{
    console.log('Timeout');
    clearInterval(interval);
},6000)