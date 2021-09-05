# Form 表单

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 表单

我们为 form 提供了以下三种排列方式：

-   水平排列：标签和表单控件水平排列,（默认）。
-   垂直排列：标签和表单控件上下垂直排列。
-   行内排列：表单项水平行内排列。

## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 `<Form.Item />` 。

```js
<Form.Item {...props}>{children}</Form.Item>
```

## 水平登录栏

水平登录栏，常用在顶部导航栏中。

## Installation

```sh
npm install @stbui/za-form
```

## Usage

```jsx | pure
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
