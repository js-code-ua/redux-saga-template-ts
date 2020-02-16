import React, { FormEvent } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/es/form';

interface ILoginFormProps extends FormComponentProps {
    handleSubmit(values: any): void,
    handleError(error: any): void,
}

function LoginForm(props: ILoginFormProps) {
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        props.form.validateFields((error, values) => {
            if (error) {
                return props.handleError(error);
            }
            props.handleSubmit(values);
        });
    }

    return (
        <Form onSubmit={onSubmit} className="login-form">
            <Form.Item>
                {props.form.getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(
                    <Input
                        type="email"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
        </Form>
    )
}

export default Form.create<ILoginFormProps>({ name: 'LoginForm' })(LoginForm);
