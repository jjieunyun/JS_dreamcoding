import express from 'express';
import 'express-async-errors';

let tweets = [
    {
        id : '1',
        text : '호두야 안녕',
        createdAt: Date.now().toString(),
        name : 'hodu',
        username : 'hodu',
        url : 'https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfUgkfFVGxuOgKPKH11JUHNcXGrL7L7RzI4v68JWOoN3vl2kvYUxP5Ac2w0Laq77Mi8IEfApuIy9HvVn1DqC_UXUvArBrYmGqQ.png?r=215'
    },
    {
        id : '2',
        text : '꾸꾸야 안녕',
        createdAt: Date.now().toString(),
        name : 'gguggu',
        username : 'gguggu',
        url : 'https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRWOJfRtKfMIZsWhmzZqXIJuzCQXXYYxl_-zYx3rsXgVQrOftOWQZWUT1skv7hlXvy4Pny9tvonIe74YoEMaD7CDYwdUdD1Fhg.png?r=6ab'
    },
];
const router = express.Router();

//1. Get /dwitter
//2번 api에서 기본적으로 dwitter로 연결되어있기 때문에 굳이 작성하지 않아도된다.
//어차피 2번에서 false일때 작동되는 로직이 구현되어있기 때문에!


//2. Get /dwitter?username=:username
router.get('/',(req, res, next) => {
    const username = req.query.username;
    const data = username? tweets.filter(Tweet => Tweet.username === username)
    : tweets;
    res.status(200).json(data);
});

//3. GEt /dwitter/:id
router.get('/:id',(req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find(Tweet => Tweet.id === id);
    if(tweet) {
        res.status(200).json(tweet);
    }else {
        res.status(404).json({message : `Tweet id(${id}) not found!!`})
    }
})

//4. POST /dwitter
router.post('/',(req, res, next) => {
    const {text, name, username} = req.body;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt : new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
})

//5. PUT /dwitter/:id
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find(Tweet => Tweet.id === id);
    if(tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    }else {
        res.status(404).json({message : `Tweet id(${id}) not found!!`})
    }
})


//6. DELETE /dwitter/:id
router.delete('/:id',(req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((Tweet)=> Tweet.id !== id);
    res.sendStatus(204);
})

export default router;