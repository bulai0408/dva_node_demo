import express from 'express';
import { todo } from '../db'
import _ from 'lodash';

const router = express.Router();

router.post('/add', (req, res) => {
    const newTodo = _.cloneDeep(req.body);
    todo.create(newTodo, (error) => {
        if (error) {
            res.json({
                success: false,
                message: '添加失败'
            })
        } else {
            res.json({
                success: true,
                message: '添加成功'
            })
        }
    })
})

router.get('/getTodoList', (req, res) => {
    todo.find({ 'userId': req.query.userId }, (error, record) => {
        if (error) {
            res.json({
                success: false,
                message: '查询失败'
            })
        } else {
            res.json({
                success: true,
                message: '查询成功',
                data: record
            })
        }
    })
})

module.exports = router;