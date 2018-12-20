import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, Modal } from 'antd';
import { routerRedux } from 'dva/router';

import { Goods } from '../components/GoodsItem';

class GoodsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'goods/getGoodsList' })
  }

  render() {
    const { goods } = this.props;
    const { goodsList } = goods;
    const mapToGoodUI = goodsList.map(item => (
      <div key={item._id} style={{ marginBottom: 20 }}>
        <Goods {...item} />
      </div>
    ))
    return (
      <div className={styles.normal}>
        {mapToGoodUI}
      </div>
    );
  }
}


export default connect(({ goods }) => ({ goods }))(GoodsPage);
