import { message } from 'antd';
import { getData } from '../api';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'register',
    state: {
        username: '', //用户名
        password: '', //密码
        sex: '', //性别
        age: '', //年龄
        phone: '', //手机
        email: '', //邮箱
        other: '' //其他补充
    },
    effects: {
        *register({ payload: params }, { put, call }) {
            try {
                yield put({ type: 'doSaveRegisterForm', payload: params });
                const data = yield call(getData, { url: '/user/register', method: 'post', params })
                if (!data.success) {
                    message.error(data.message);
                    return;
                }
                yield put(routerRedux.push('/login'))
            } catch (e) {
                message.error(e.message);
            }
        }
    },
    reducers: {
        'doSaveRegisterForm'(state, { payload: params }) {
            return {
                ...params,
            }
        },
    },
};