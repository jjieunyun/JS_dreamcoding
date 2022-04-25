import express from 'express';
import postRouter from './router/post.js'
import userRouter from './router/user.js'

const app = express();

app.use(express.json()); //REST API ->Body


app.use('/posts',postRouter);
app.use('/users',userRouter);

// app.route('/posts')
// .get((req,res,next)=> {
//     res.status(201).send('GET: /posts');
// }).get('/posts', (req, res) => {
//   res.status(201).send('POST: /posts');
// });


// app.put('/posts/:id', (req, res) => {
//   res.status(201).send('PUT: /posts/:id');
// });

// app.delete('/posts/:id', (req, res) => {
//   res.status(201).send('DELETE: /posts/:id');
// });

app.listen(8080);
