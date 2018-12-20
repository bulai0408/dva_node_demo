import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';

const IndexPage = ({ dispatch }) => {
  const onLogin = () => {
    dispatch(routerRedux.push('/login'))
  }

  const onRegister = () => {
    dispatch(routerRedux.push('/register'))
  }
  return (
    <div className={styles.normal}>
      <h1>欢迎回来</h1>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={onLogin} type='primary' style={{ marginBottom: 20 }}>登录</Button>
        <Button onClick={onRegister}>注册</Button>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
