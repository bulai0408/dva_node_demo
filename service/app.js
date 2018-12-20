import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressJwt from 'express-jwt';


import jwtAuth from './router/token';
import user from './router/user';
import todo from './router/todo';
import good from './router/good';
import file from './router/file';

const app = express();

const corsOptions = {
    "origin": "http://localhost:8000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "credentials": true,
    "optionsSuccessStatus": 200
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use(jwtAuth);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            success: false,
            message: 'invalid token'
        });
    }
});

app.use('/user', user);
app.use('/todo', todo);
app.use('/good', good);
app.use('/file', file);

app.listen(8888, () => { console.log('成功运行在8888端口') })