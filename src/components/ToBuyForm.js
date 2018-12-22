import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;

class ToBuyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onFormChange = (e, type) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'buyGoods/changeFormItem',
      payload: {
        [type]: e.target.value
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;

    const littleFormItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
      colon: false,
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
      colon: false,
    };

    return (
      <Form onSubmit={this.onSubmit} hideRequiredMark={true}>

        <FormItem
          {...littleFormItemLayout}
          label='收货人姓名'
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'please enter name',
            }],
            onChange: (e) => { this.onFormChange(e, 'name') }
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...littleFormItemLayout}
          label='收货人手机号'
        >
          {getFieldDecorator('phone', {
            rules: [{
              required: true, message: 'please enter phone',
            }],
            onChange: (e) => { this.onFormChange(e, 'phone') }
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...littleFormItemLayout}
          label='收获地址'
        >
          {getFieldDecorator('address', {
            rules: [{
              required: true, message: 'please enter address',
            }],
            onChange: (e) => { this.onFormChange(e, 'address') }
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...littleFormItemLayout}
          label='数量'
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
          label='支付方式'
        >
          {getFieldDecorator('payMethod', {
            rules: [{
              required: true, message: 'please enter payMethod',
            }],
            onChange: (e) => { this.onFormChange(e, 'payMethod') }
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...littleFormItemLayout}
          label='买家留言'
        >
          {getFieldDecorator('leaveComments', {
            rules: [{
              required: true, message: 'please enter leaveComments',
            }],
            onChange: (e) => { this.onFormChange(e, 'leaveComments') }
          })(
            <Input />
          )}
        </FormItem>
      </Form>
    )
  }
}


export default Form.create()(ToBuyForm);