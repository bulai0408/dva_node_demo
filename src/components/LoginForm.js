
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class LoginForm extends Component {
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
          type: 'login/login',
          payload: {
            ...values
          }
        })
      }
    })

  }

  render() {
    const { form: { getFieldDecorator }, login } = this.props;

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

        <FormItem {...tailFormItemLayout}>
          <div style={{ textAlign:'center'}}>
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

export default Form.create()(LoginForm);