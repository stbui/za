# Checkbox

## Installation

```sh
npm install @stbui/za-form
```

## Usage

```jsx
import React from 'react';
import Form, { Filed } from '@stbui/za-form';

export default () => (
    <Form
        onFinish={values => console.log(values)}
        onFinishFailed={err => console.log(err)}
    >
        <Filed name="username">
            <input />
        </Filed>
        <Filed name="password">
            <input />
        </Filed>
        <button>login</button>
    </Form>
);
```
