import { message } from 'antd';
import { getData } from '../api';
import { routerRedux } from 'dva/router';

export default {
    namespace: 'login',
    state: {
        username: '', //用户名
        password: '', //密码
    },
    effects: {
        *login({ payload: params }, { put, call }) {
            try {
                yield put({ type: 'doSaveLoginForm', payload: params });
                const data = yield call(getData, { url: '/user/login', method: 'post', params })
                if (!data.success) {
                    message.error(data.message);
                    return;
                }
                const { token } = data;
                const loginInfo = data.data;
                localStorage.setItem('token', token);
                localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
                yield [
                    put({ type: 'user/saveUserInfo', payload: loginInfo }),
                    put(routerRedux.push('/todo'))
                ]
            } catch (e) {
                message.error(e.message);
            }
        }
    },
    reducers: {
        'doSaveLoginForm'(state, { payload: params }) {
            return {
                ...params,
            }
        },
    },
};