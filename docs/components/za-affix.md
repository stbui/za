---
nav:
    title: 基础组件
    order: 1
---

# Affix 固钉

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## Installation

```sh
npm install @stbui/za-affix
```

## 固定在顶部

```jsx
import React from 'react';
import Affix from '@stbui/za-affix';

export default () => <Affix>Affix</Affix>;
```

## 自定义固钉触发距离及回调监听

可以获得是否固定的状态。

```jsx | pure
import React from 'react';
import Affix from '@stbui/za-affix';

export default () => <Affix offsetTop={120}>Affix</Affix>;
```

## 滚动容器

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

## 固定在底部

## API

| 成员         | 说明                                                                   | 类型              | 默认值       |
| ------------ | ---------------------------------------------------------------------- | ----------------- | ------------ |
| offsetBottom | 距离窗口底部达到指定偏移量后触发                                       | Number            | -            |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                       | Number            | -            |
| onChange     | 固定状态改变时触发的回调函数                                           | (affixed) => Void | -            |
| target       | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
