

import React from 'react';
import { connect } from 'dva';
import LoginForm from '../components/LoginForm'

const LoginPage = ({ dispatch, login }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ marginTop: 30 }}>登录</h1>
            <div style={{ width: '30%', minWidth: 450 }}>
                <LoginForm dispatch={dispatch} login={login} />
            </div>
        </div>
    )
};

export default connect(({ login }) => ({ login }))(LoginPage);