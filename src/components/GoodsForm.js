
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;

class GoodsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onFormChange = (e, type) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'goods/changeFormItem',
      payload: {
        [type]: e.target.value
      }
    })
  }

  render() {
    const { form: { getFieldDecorator }, login } = this.props;

    const littleFormItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
      colon:false,
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
      colon:false,
    };

    return (
      <Form onSubmit={this.onSubmit}  hideRequiredMark={true}>
        <FormItem
          {...littleFormItemLayout}
          label='商品名称'
        >
          {getFieldDecorator('goodsName', {
            rules: [{
              required: true, message: 'please enter goodsName',
            }],
            onChange: (e) => { this.onFormChange(e, 'goodsName') }
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...littleFormItemLayout}
          label='商品数量'
        >
          {getFieldDecorator('number', {
            rules: [{
              required: true, message: 'please enter number',
            }],
            onChange: (e) => { this.onFormChange(e, 'number') }
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...littleFormItemLayout}
          label='商品单位'
        >
          {getFieldDecorator('unit', {
            rules: [{
              required: true, message: 'please enter unit',
            }],
            onChange: (e) => { this.onFormChange(e, 'unit') }
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...littleFormItemLayout}
          label='商品金额'
        >
          {getFieldDecorator('money', {
            rules: [{
              required: true, message: 'please enter money',
            }],
            onChange: (e) => { this.onFormChange(e, 'money') }
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='单次最大购买数量'
        >
          {getFieldDecorator('maxPurchaseNumber', {
            rules: [{
              required: true, message: 'please enter maxPurchaseNumber',
            }],
            onChange: (e) => { this.onFormChange(e, 'maxPurchaseNumber') }
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='单次最小购买数量'
        >
          {getFieldDecorator('minPurchaseNumber', {
            rules: [{
              required: true, message: 'please enter minPurchaseNumber',
            }],
            onChange: (e) => { this.onFormChange(e, 'minPurchaseNumber') }
          })(
            <Input />
          )}
        </FormItem>
      </Form>
    )
  }
}


export default Form.create()(GoodsForm);