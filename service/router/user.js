import express from 'express';
import { user } from '../db'
import _ from 'lodash';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', (req, res) => {
    const newUser = new user({
        username: req.body.username,
        password: req.body.password,
        sex: req.body.sex,
        age: req.body.age,
        phone: req.body.phone,
        email: req.body.email,
        other: req.body.other,
    });
    user.findOne({ username: req.body.username }, (error, record) => {
        if (error) {
            res.json({
                success: false,
                message: '注册失败'
            })
            return;
        }
        if (record) {
            res.json({
                success: false,
                message: '用户名已存在'
            })
            return;
        }
        user.create(newUser, (e) => {
            if (e) {
                res.json({
                    success: false,
                    message: '注册失败'
                })
                return;
            }
            res.json({
                success: true,
                message: '注册成功'
            })
        })
    })
})

router.post('/login', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
    };
    user.findOne(newUser, (error, record) => {
        if (!error) {
            if (!record) {
                res.json({
                    success: false,
                    message: '用户名或密码错误',
                    data: null
                })
                return;
            }
            var userInfo = JSON.parse(JSON.stringify(record));
            _.unset(userInfo, 'password')
            const token = jwt.sign(newUser, "cyh", {
                expiresIn: 60 * 60// 授权时效3600秒
            });
            res.json({
                success: true,
                message: '登录成功',
                data: userInfo,
                token
            })
            return;
        }
        res.json({
            success: false,
            message: '登录失败'
        })
    })
})

module.exports = router;