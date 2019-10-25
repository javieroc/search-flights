import { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const originError = isFieldTouched('origin') && getFieldError('origin');
    const destinationError = isFieldTouched('destination') && getFieldError('destination');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={originError ? 'error' : ''} help={originError || ''}>
          {getFieldDecorator('origin', {
            rules: [{ required: true, message: 'Please select origin!' }],
          })(
            <Input
              placeholder="Origin"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={destinationError ? 'error' : ''} help={destinationError || ''}>
          {getFieldDecorator('destination', {
            rules: [{ required: true, message: 'Please select destination!' }],
          })(
            <Input
              placeholder="Destination"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon="search" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSearchForm = Form.create({ name: 'horizontal_search_form' })(SearchForm);

export default WrappedSearchForm;