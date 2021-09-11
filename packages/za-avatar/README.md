# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## Installation

```sh
npm install @stbui/za-avatar
```

## 基本

```jsx
import React from 'react';
import Avatar from '@stbui/za-avatar';

export default () => (
    <>
        <Avatar src="images/avatars/blackwidow.png" />
        <Avatar src="images/avatars/blackwidow.png" size="large" />
        <Avatar src="images/avatars/blackwidow.png" size="xlarge" />
    </>
);
```

## 类型

## 自动调整字符大小

## 带徽标的头像

## API

| 参数      | 说明                                                          | 类型                                         | 默认值    |
| --------- | ------------------------------------------------------------- | -------------------------------------------- | --------- |
| alt       | 图像无法显示时的替代文本                                      | String                                       | -         |
| className | 类名                                                          | String                                       | -         |
| icon      | 设置头像的图标类型，参考 `Icon` 组件                          | String                                       | -         |
| onError   | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => Boolean                                | -         |
| shape     | 指定头像的形状                                                | Enum {'circle', 'square'}                    | 'circle'  |
| size      | 设置头像的大小                                                | Enum {'large', 'small', 'default'} \| Number | 'default' |
| src       | 图片类头像的资源地址                                          | String                                       | -         |
