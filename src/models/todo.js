import { message } from 'antd';
import { getData } from '../api';

export default {
    namespace: 'todo',
    state: {
        todoList: [],
        title: '',
        content: '',
        addTodoVisible: false,
    },
    effects: {
        *getTodoList({ payload: params }, { put, call }) {
            try {
                const data = yield call(getData, { url: '/todo/getTodoList', method: 'get', params })
                if (!data.success) {
                    message.error(data.message);
                    return;
                }
                const todoList = data.data;
                yield put({ type: 'doSaveTodoList', payload: todoList })
            } catch (e) {
                message.error(e.message);
            }
        },
        *addTodo({ payload: params }, { put, call, select }) {
            try {
                const data = yield call(getData, { url: '/todo/add', method: 'post', params })
                if (!data.success) {
                    message.error(data.message);
                    return;
                }
                const _id = yield select(({ user }) => user._id)
                yield [
                    put({ type: 'getTodoList', payload: { userId: _id } }),
                    put({ type: 'closeAdd' })
                ]
            } catch (e) {
                message.error(e.message);
            }
        }
    },
    reducers: {
        'doSaveTodoList'(state, { payload: params }) {
            return {
                ...state,
                todoList: [...params]
            }
        },
        'showAdd'(state) {
            return {
                ...state,
                addTodoVisible: true
            }
        },
        'closeAdd'(state) {
            return {
                ...state,
                addTodoVisible: false
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