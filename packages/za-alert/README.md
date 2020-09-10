# 警告提示 Alert

警告提示，展现需要关注的信息。

## Installation

```sh
npm install @stbui/za-alert
```

## Usage

```jsx
import React from 'react';
import Alert from '@stbui/za-alert';

export default () => <Alert>Alert</Alert>;
```

## API

| 参数        | 说明                                                                 | 类型                    | 默认值                                    |
| ----------- | -------------------------------------------------------------------- | ----------------------- | ----------------------------------------- |
| afterClose  | 关闭动画结束后触发的回调函数                                         | () => void              | -                                         |
| banner      | 是否用作顶部公告                                                     | boolean                 | false                                     |
| closable    | 默认不显示关闭按钮                                                   | boolean                 | -                                         |
| closeText   | 自定义关闭按钮                                                       | string \| ReactNode     | -                                         |
| description | 警告提示的辅助性文字介绍                                             | string \| ReactNode     | -                                         |
| icon        | 自定义图标，`showIcon` 为 true 时有效                                | ReactNode               | -                                         |
| message     | 警告提示内容                                                         | string \| ReactNode     | -                                         |
| showIcon    | 是否显示辅助图标                                                     | boolean                 | false，`banner` 模式下默认值为 true       |
| type        | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string                  | `info`，`banner` 模式下默认值为 `warning` |
| onClose     | 关闭时触发的回调函数                                                 | (e: MouseEvent) => void | -                                         |
