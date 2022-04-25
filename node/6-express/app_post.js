import express from 'express'
const app = express ();

//body를 가져오려면 express에서 제공하는 api사용해야함
app.use(express.json());
app.post('/',(req,res,next)=> {
    console.log(req.body);
});

app.listen(8080);