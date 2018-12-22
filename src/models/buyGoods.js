import { message } from 'antd';
import { getData } from '../api';

export default {
    namespace: 'buyGoods',
    state: {
        goodsDetail: undefined,
        toBuyGoodsId: '',
        number: 1,
        maxPurchaseNumber: 0,
        minPurchaseNumber: 0,
        addBuyVisible: false
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
                addBuyVisible: true
            }
        },
        'closeAdd'(state) {
            return {
                ...state,
                addBuyVisible: false
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