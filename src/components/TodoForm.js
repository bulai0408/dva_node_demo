
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onFormChange = (e, type) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todo/changeFormItem',
      payload: {
        [type]: e.target.value
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

    return (
      <Form onSubmit={this.onSubmit}>
        <FormItem
          {...formItemLayout}
          label='标题'
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'please enter your title',
            }],
            onChange: (e) => { this.onFormChange(e, 'title') }
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label='内容'
        >
          {getFieldDecorator('content', {
            rules: [{
              required: true, message: 'please enter your content',
            }],
            onChange: (e) => { this.onFormChange(e, 'content') }
          })(
            <Input />
          )}
        </FormItem>
      </Form>
    )
  }
}


export default Form.create()(TodoForm);