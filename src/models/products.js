export default {
    namespace: 'products',
    state: {
        productList: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 },]
    },
    reducers: {
        'delete'(state, { payload: id }) {
            const { productList } = state;
            return {
                ...state,
                productList: productList.filter(item => item.id !== id)
            }
        },
    },
};