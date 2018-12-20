import express from 'express';
import { good } from '../db'
import _ from 'lodash';

const router = express.Router();

router.post('/addGoods', (req, res) => {
    const newGoods = _.cloneDeep(req.body);
    good.create(newGoods, (error) => {
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

router.get('/getGoodsList', (req, res) => {
    good.find({}, (error, record) => {
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