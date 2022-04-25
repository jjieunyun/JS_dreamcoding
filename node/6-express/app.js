import express from 'express'
const app = express ();


// app all과 app use의 차이
//all은 정확한 path가 있어야만 호출된다
app.all('/api',(req,res,next)=> {
    console.log('all');
    next();
})

//sky path이후에 그 어떤 경로에 대해서도 호출된다.
app.use('/sky',(req,res,next)=> {
    console.log('use');
    next();
})



app.get('/',
    (req,res,next)=>{
        console.log('first');
        return res.send('hello')  
        //next에 아무것도 안하면 다음으로 넘어간다! -> 호출되면 다음 미들웨어 호출X
        //res.send('hello2') ->send 두번하면 오류남
    },
    (req,res,next)=>{
        console.log('second');
    }
);




app.get('/sky/:id', (req,res,next)=>{
    console.log('~~~~~~~~~~~~~~')
    console.log(req.path)
    console.log('~~~~~~~~~~~~~~')
    console.log(req.headers)
    console.log('~~~~~~~~~~~~~~')
    console.log(req.params)
    console.log('~~~~~~~~~~~~~~')
    console.log(req.query)
    console.log('~~~~~~~~~~~~~~')

    res.setHeader('key','value')  //response라는 obj안에 
    // /res.json({name: 'jieun'});
    res.status(201).send('created');
})
app.use((req, res, next)=> {
    res.status(404).send('not Found!')
})
app.use((error, req, res, next)=>{
    console.log(error);
    res.status(500).send('sorry, try later!')
})
app.listen(8080);

//ip : 우리서버가 네트워크상에 어디에 위치해 있는지
//port  : ip중의 특정한 위치

//콜백함수로 들어오는 req,res들에 대한 메소드
