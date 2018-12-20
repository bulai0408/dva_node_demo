import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/Products'

const Products = ({ dispatch, products }) => {
    const { productList } = products
    const handleDelete = (id) => {
        dispatch({
            type: 'products/delete',
            payload: id
        })
    }

    return (
        <div>
            <h2>List of Products</h2>
            <ProductList
                onDelete={handleDelete}
                products={productList}
            />
        </div>
    )
};

export default connect(({ products }) => ({ products }))(Products);