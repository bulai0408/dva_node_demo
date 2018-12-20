

import React from 'react';
import { connect } from 'dva';
import RegisterForm from '../components/RegisterForm'

const RegisterPage = ({ dispatch, register }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ marginTop: 30 }}>注册</h1>
            <div style={{ width: '30%', minWidth: 450 }}>
                <RegisterForm dispatch={dispatch} register={register} />
            </div>
        </div>
    )
};

export default connect(({ register }) => ({ register }))(RegisterPage);