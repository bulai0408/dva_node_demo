
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { dispatch, form: { validateFields } } = this.props;
    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'register/register',
          payload: {
            ...values
          }
        })
      }
    })

  }

  render() {
    const { form: { getFieldDecorator }, register } = this.props;
    const { sex } = register;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };

    return (
      <Form onSubmit={this.onSubmit}>
        <FormItem
          {...formItemLayout}
          label='用户名'
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: 'please enter your username',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='密码'
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'please enter your password',
            }],
          })(
            <Input type='password' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='性别'
        >
          {getFieldDecorator('sex', {
            initialValue: sex,
            rules: [{
              required: true, message: 'please choose your sex',
            }],
          })(
            <RadioGroup onChange={this.onChangeSex}>
              <Radio value={'1'}>男</Radio>
              <Radio value={'2'}>女</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='年龄'
        >
          {getFieldDecorator('age', {
            rules: [{
              required: true, message: 'please enter your age',
            }],
          })(
            <Input type='number' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='手机'
        >
          {getFieldDecorator('phone', {
            rules: [{
              required: true, message: 'please enter your phone',
            }],
          })(
            <Input type='number' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='邮箱'
        >
          {getFieldDecorator('email', {
            rules: [{
              required: true, message: 'please enter your email',
              type: 'email', message: 'please enter a email'
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='其他'
        >
          {getFieldDecorator('other')(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {/* <FormItem {...tailFormItemLayout}> */}
          <div style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" onClick={this.onSubmit}>submit</Button>
          </div>
        </FormItem>
      </Form>
    )
  }

}

// UserForm.propTypes = {
//     onDelete: PropTypes.func.isRequired,
//     products: PropTypes.array.isRequired,
// };

export default Form.create()(RegisterForm);