# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

-   当页面内容区域比较长时；
-   当用户需要频繁返回顶部查看相关内容时。

## Installation

```sh
npm install @stbui/za-backtop
```

## 基本

```jsx
import React from 'react';
import Checkbox from '@stbui/za-backtop';

export default () => <Checkbox>backtop</Checkbox>;
```

## 自定义样式

## API

| 参数             | 说明                                                          | 类型              | 默认值       | 版本 |
| ---------------- | ------------------------------------------------------------- | ----------------- | ------------ | ---- |
| target           | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |      |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop                            | number            | 400          |      |
| onClick          | 点击按钮的回调函数                                            | function          | -            |      |
| duration         | 回到顶部所需时间（ms）                                        | number            | 450          |      |
