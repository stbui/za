# FooterToolbar 底部工具栏

固定在底部的工具栏。

## 何时使用

固定在内容区域的底部，不随滚动条移动，常用于长页面的数据搜集和提交工作。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 浮动固定页脚

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 在 Layout 中的使用方式

## 指定滚动区域

## API

| 参数      | 说明              | 类型              | 默认值       |
| --------- | ----------------- | ----------------- | ------------ |
| children  | 工具栏内容        | ReactNode         | -            |
| className | 额外的 class      | String            | -            |
| style     | 自定义样式        | Object            | -            |
| target    | 目标，默认 window | () => HTMLElement | () => window |
