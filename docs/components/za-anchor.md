# 锚点 Anchor

用于跳转到页面指定位置。

## Installation

```sh
npm install @stbui/za-anchor
```

## Usage

```jsx
import React from 'react';
import Anchor from '@stbui/za-anchor';

export default () => <Anchor>Anchor</Anchor>;
```

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## API

### Anchor Props

| 成员             | 说明                                                                                | 类型                                | 默认值       | 版本 |
| ---------------- | ----------------------------------------------------------------------------------- | ----------------------------------- | ------------ | ---- |
| affix            | 固定模式                                                                            | boolean                             | true         |      |
| bounds           | 锚点区域边界                                                                        | number                              | 5            |      |
| getContainer     | 指定滚动的容器                                                                      | () => HTMLElement                   | () => window |      |
| offsetBottom     | 距离窗口底部达到指定偏移量后触发                                                    | number                              |              |      |
| offsetTop        | 距离窗口顶部达到指定偏移量后触发                                                    | number                              |              |      |
| showInkInFixed   | 固定模式是否显示小圆点                                                              | boolean                             | false        |      |
| onClick          | `click` 事件的 handler                                                              | function(e: Event, link: Object)    | -            |      |
| getCurrentAnchor | 自定义高亮的锚点                                                                    | () => string                        | -            |      |
| targetOffset     | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetOffset) | number                              | -            |      |
| onChange         | 监听锚点链接改变                                                                    | (currentActiveLink: string) => void | -            |      |
