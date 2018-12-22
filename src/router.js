import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import RegisterPage from './routes/RegisterPage';
import LoginPage from './routes/LoginPage';
import TodoPage from './routes/TodoPage';
import GoodsPage from './routes/GoodsPage/index.js';
import AddGoddsPage from './routes/AddGoddsPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/todo" exact component={TodoPage} />
        <Route path="/goods" exact component={GoodsPage} />
        <Route path="/addGoods" exact component={AddGoddsPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
