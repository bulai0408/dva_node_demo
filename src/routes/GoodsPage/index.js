import React from 'react';
import { connect } from 'dva';
import styles from './styles.css';
import { Button, Modal } from 'antd';
import { routerRedux } from 'dva/router';


import { Goods } from '../../components/GoodsItem';
import ToBuyForm from '../../components/ToBuyForm';

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

  buyConfig = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'buyGoods/showAdd' })
  }

  closeAdd = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'buyGoods/closeAdd' })
  }

  render() {
    const { goods, buyGoods } = this.props;
    const { goodsList } = goods;
    const { addBuyVisible } = buyGoods;
    const mapToGoodUI = goodsList.map(item => (
      <div key={item._id} className={styles.goodsItem}>
        <div>
          <Goods {...item} />
        </div>
        <Button type='primary' onClick={this.buyConfig}>购买</Button>
        <Button>加入购物车</Button>
      </div>
    ))
    return (
      <div className={styles.normal}>
        {mapToGoodUI}
        <Modal
          visible={addBuyVisible}
          onCancel={this.closeAdd}
          title='确认订单'
          footer={
            [
              <Button key='cancel' onClick={this.closeAdd}>取消</Button>,
              <Button key='submit'>确认</Button>
            ]
          }
        >
          <ToBuyForm/>
        </Modal>
      </div>
    );
  }
}


export default connect(({ goods, buyGoods }) => ({ goods, buyGoods }))(GoodsPage);
