# Anchor 锚点

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## Installation

```sh
npm install @stbui/za-anchor
```

## 基本

```jsx
import React from 'react';
import Anchor from '@stbui/za-anchor';

export default () => <Anchor>Anchor</Anchor>;
```

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## API

> 注意：该组件不支持`hashHistory` ,[详情](https://github.com/ReactTraining/react-router/issues/394#issuecomment-220221604)

> 提供一级子内容项样式，保证当内容下有多个子内容项时，支持快速定位（业务可自定义内容项层级）

### Anchor

| 成员           | 说明                             | 类型                             | 默认值       |
| -------------- | -------------------------------- | -------------------------------- | ------------ |
| affix          | 固定模式                         | Boolean                          | true         |
| bounds         | 锚点区域边界                     | Number                           | 5(px)        |
| className      | 额外 class                       | String                           | -            |
| getContainer   | 指定滚动的容器                   | () => HTMLElement                | () => window |
| offsetBottom   | 距离窗口底部达到指定偏移量后触发 | Number                           |              |
| offsetTop      | 距离窗口顶部达到指定偏移量后触发 | Number                           |              |
| onClick        | `click` 事件的 handler           | (e: Event, link: Object) => Void | -            |
| showInkInFixed | 固定模式是否显示蓝条             | Boolean                          | false        |
| inkPosition    | 锚点位置选择                     | Enum {'left', 'right'}           | 'left'       |
| style          | 额外样式                         | Object                           | -            |

### Anchor.Link

| 成员  | 说明     | 类型              | 默认值 |
| ----- | -------- | ----------------- | ------ |
| href  | 锚点链接 | String            |        |
| title | 文字内容 | String\|ReactNode |        |
