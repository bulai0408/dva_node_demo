import React, { Fragment } from 'react';

export const Goods = (props) => {
  return (
    <Fragment>
      <div>商品名称：{props.goodsName}</div>
      <div>商品价格：{props.money}</div>
      <div>商品单位：{props.unit}</div>
      <div>商品数量：{props.number}</div>
      <div>最大购买数量：{props.maxPurchaseNumber}</div>
      <div>最小购买数量：{props.minPurchaseNumber}</div>
    </Fragment>
  )
}
