---
title: button
nav:
    title: 组件
    order: 1
---

# Button

按钮组件通过点击执行一个具体的行为或动作。

<carbon-ad></carbon-ad>

## Installation

```sh
npm install @stbui/za-button
```

## Usage

```tsx
import React from 'react';
import Button from '@stbui/za-button';

export default () => (
    <Button style={{ color: 'white', background: 'red' }}>Button</Button>
);
```

```tsx
import React from 'react';
import Button from '@stbui/za-button';

export default () => (
    <div>
        <Button colors="primary" isSubmit={true}>
            Default
        </Button>
        <Button disabled>disabled</Button>
        <Button bordered>border</Button>
        <Button colors="primary" shape="round">
            round
        </Button>
    </div>
);
```
