# Alert 警告提示

警告提示，展现需要关注的信息。

## Installation

```sh
npm install @stbui/za-alert
```

## Usage

```jsx
import React from 'react';
import Alert from '@stbui/za-alert';

export default () => (
    <>
        <Alert type="info">info</Alert>
        <Alert type="success">success</Alert>
        <Alert type="warning">warning</Alert>
    </>
);
```

## closable

```jsx
import React from 'react';
import Alert from '@stbui/za-alert';

export default () => (
    <>
        <Alert type="info" closable>
            info
        </Alert>
        <Alert type="success" closable>
            success
        </Alert>
        <Alert type="warning" closable>
            warning
        </Alert>
    </>
);
```

## API

| 参数       | 说明                         | 类型                                  | 默认值 |
| ---------- | ---------------------------- | ------------------------------------- | ------ |
| afterClose | 关闭动画结束后触发的回调函数 | () => void                            | -      |
| banner     | 是否用作顶部公告             | boolean                               | false  |
| closable   | 默认不显示关闭按钮           | boolean                               | -      |
| closeText  | 自定义关闭按钮               | string \| ReactNode                   | -      |
| message    | 警告提示内容                 | string \| ReactNode                   | -      |
| type       | 指定警告提示的样式，         | `success`、`info`、`warning`、`error` |        |
| onClose    | 关闭时触发的回调函数         | (e: MouseEvent) => void               | -      |
