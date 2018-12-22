import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, Modal } from 'antd';
import { routerRedux } from 'dva/router';

import TodoForm from '../components/TodoForm';
import GoodsForm from '../components/GoodsForm';


class TodoPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    const { dispatch } = this.props;
    const loginInfo = localStorage.getItem('loginInfo');
    const parsedLoginInfo = loginInfo ? JSON.parse(loginInfo) : {};
    dispatch({
      type: 'todo/getTodoList',
      payload: {
        userId: parsedLoginInfo._id
      }
    })
  }

  showAdd = () => {
    this.props.dispatch({ type: 'todo/showAdd' })
  }

  showAddGoods = () => {
    this.props.dispatch({ type: 'goods/showAdd' })
  }

  closeAdd = () => {
    this.props.dispatch({ type: 'todo/closeAdd' })
  }

  closeAddGoods = () => {
    this.props.dispatch({ type: 'goods/closeAdd' })
  }

  handleAddTodoSubmit = () => {
    const { validateFields } = this.todoForm;
    const { user: { _id }, dispatch, todo: { title, content, } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'todo/addTodo',
          payload: {
            title,
            content,
            userId: _id
          }
        })
      }
    })
  }

  handleAddGoodsSubmit = () => {
    const { validateFields } = this.goodsForm;
    const { dispatch, goods } = this.props;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'goods/addGoods',
          payload: {
            ...goods
          }
        })
      }
    })
  }

  toGoddsList = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/goods'));
  }

  toAddGodds = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/addGoods'));
  }

  render() {
    const { user, todo, goods, dispatch } = this.props;
    const { username } = user;
    const { todoList, addTodoVisible } = todo;
    const { addGoodsVisible } = goods;


    const todoUI = todoList.map(item => (
      <div key={item._id}>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </div>
    ))

    const loginInfo = localStorage.getItem('loginInfo');
    const parsedLoginInfo = loginInfo ? JSON.parse(loginInfo) : {};

    return (
      <div className={styles.normal}>
        <h1>{parsedLoginInfo.username},你好</h1>
        <h1>todo</h1>
        <div>
          <Button className={styles.marginButton} onClick={this.showAdd}>新建代办</Button>
          <Button className={styles.marginButton} onClick={this.getData}>查看代办</Button>
          <Button className={styles.marginButton} onClick={this.showAddGoods}>添加商品</Button>
          <Button className={styles.marginButton} onClick={this.toGoddsList}>去商品列表</Button>
        </div>

        {todoUI}

        <Modal
          visible={addTodoVisible}
          title='新建代办'
          destroyOnClose
          onCancel={this.closeAdd}
          footer={
            [
              <Button key='cancel' onClick={this.closeAdd}>取消</Button>,
              <Button key='submit' onClick={this.handleAddTodoSubmit}>确认</Button>
            ]
          }
        >
          <TodoForm dispatch={dispatch} ref={ref => { this.todoForm = ref; }} />
        </Modal>
        <Modal
          visible={addGoodsVisible}
          title='新建商品'
          destroyOnClose
          onCancel={this.closeAddGoods}
          footer={
            [
              <Button key='cancel' onClick={this.closeAddGoods}>取消</Button>,
              <Button key='submit' onClick={this.handleAddGoodsSubmit}>确认</Button>
            ]
          }
        >
          <GoodsForm dispatch={dispatch} ref={ref => { this.goodsForm = ref; }} />
        </Modal>
      </div>
    );
  }
}


export default connect(({ user, todo, goods }) => ({ user, todo, goods }))(TodoPage);
