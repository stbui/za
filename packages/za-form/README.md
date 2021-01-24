# Form

## Installation

```sh
npm install @stbui/za-form
```

## Usage

```jsx
import React from 'react';
import Form, { Field } from '@stbui/za-form';
import Input from '@stbui/za-input';

const Item = ({ children, name, rules, noStyle, ...restProps }: any) => {
    return (
        <Field name={name} rules={rules}>
            {control => {
                return noStyle ? (
                    React.cloneElement(children, { ...control })
                ) : (
                    <Form.Item {...restProps}>
                        {React.cloneElement(children, { ...control })}
                    </Form.Item>
                );
            }}
        </Field>
    );
};

export default () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
    };

    const onFinishFailed = error => {
        console.log(error);
    };

    return (
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Item label="用户" name="user">
                <Input placeholder="请输入" />
            </Item>
            <Item label="密码" name="password">
                <Input placeholder="请输入" />
            </Item>

            <Form.Item>
                <Button theme="info" onClick={() => form.submit()}>
                    查询
                </Button>
                <Button onClick={() => form.resetFields()}>重置</Button>
            </Form.Item>
        </Form>
    );
};
```
