import express from 'express';
import 'express-async-errors';

let tweets = [
    {
        id : '1',
        text : 'text작성~!!by.꾸구',
        createdAt : Date.now().toString(),
        name : 'Hodu',
        username : 'hodu',
        url : 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg'
    },
    {
        id : '2',
        text : '꾸꾸페이지',
        createdAt : Date.now().toString(),
        name : 'Gguggu',
        username : 'gguggu',
    }
]

const router = express.Router();

//구현해야 할 서버들 - DB가 없기 때문에 메모리 상에서 구현할 것
//GET / tweets
//GET / tweets?username=username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data); //json으로 배열을 전달한다.
});

//GET /tweets/:id  ->param이 들어오기 때문에 다른 라우터에서 구현해야한다.
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet) {
        res.status(200).json(tweet);
    }else {
        res.status(404).json({message : `Tweet id(${id} not found)`});
    }
})

//POST /tweets
router.post('/',(req, res, next) => {
    const {text, name, username} = req.body;
    const tweet = {
        id : Date.now().toString(),
        text,
        createdAt : new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
})

//PUT /tweets/:id
router.put('/:id',(req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet) {
        tweet.text = text;
        res.status(200).json(tweet);

    }else {
        res.status(404).json({message : `Tweet id(${id} not found)`});
    }
})

//DELETE /tweets/:id
router.delete('/:id',(req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter(tweet => tweet.id !==id);
    res.sendStatus(204);
})

export default router;