import { message } from 'antd';
import { getData } from '../api';

export default {
    namespace: 'goods',
    state: {
        goodsList: [],
        goodsName: '',
        goodsId: '',
        number: 0,
        money: 0,
        maxPurchaseNumber: 0,
        minPurchaseNumber: 0,
        unit:'',
        addGoodsVisible: false
    },
    effects: {
        *getGoodsList({ payload: params }, { put, call }) {
            try {
                const data = yield call(getData, { url: '/good/getGoodsList', method: 'get' })
                if (!data.success) {
                    message.error(data.message);
                    return;
                }
                const goodList = data.data;
                yield put({ type: 'doSaveGoodList', payload: goodList })
            } catch (e) {
                message.error(e.message);
            }
        },
        *addGoods({ payload: params }, { put, call, select }) {
            try {
                const data = yield call(getData, { url: '/good/addGoods', method: 'post', params })
                if (!data.success) {
                    message.error(data.message);
                    return;
                }
                const _id = yield select(({ user }) => user._id)
                yield [
                    put({ type: 'getGoodsList' }),
                    put({ type: 'closeAdd' })
                ]
            } catch (e) {
                message.error(e.message);
            }
        }
    },
    reducers: {
        'doSaveGoodList'(state, { payload: params }) {
            return {
                ...state,
                goodsList: [...params]
            }
        },
        'showAdd'(state) {
            return {
                ...state,
                addGoodsVisible: true
            }
        },
        'closeAdd'(state) {
            return {
                ...state,
                addGoodsVisible: false
            }
        },
        'changeFormItem'(state, { payload: params }) {
            return {
                ...state,
                ...params
            }
        }
    },
};