import { message } from 'antd';

export default {
    namespace: 'user',
    state: {
    },
    effects: {

    },
    reducers: {
        'saveUserInfo'(state, { payload: params }) {
            return {
                ...params
            }
        },
    },
};