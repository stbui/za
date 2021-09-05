# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

-   对复杂区域进行分组和隐藏，保持页面的整洁。
-   `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 折叠面板

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 手风琴

## 面板嵌套

## 激活后将激活的面板置顶

## 自定义面板

## 可关闭

## 定制 header

## API

### Collapse

| 参数             | 说明                                             | 类型                                   | 默认值            |
| ---------------- | ------------------------------------------------ | -------------------------------------- | ----------------- |
| accordion        | 手风琴，每次只打开一个 tab。默认打开第一个。     | Boolean                                | false             |
| activeKey        | 受控属性，控制当前激活的面板                     | 默认无，accordion 模式下默认第一个元素 |
| bordered         | 是否显示边框                                     | Boolean                                | true              |
| close            | 删除面板的回调                                   | (statusList: Array) => Void            | -                 |
| defaultActiveKey | 初始化选中面板的 key                             | String                                 | -                 |
| isScrollToHeader | 激活后将激活的面板置顶                           | Boolean                                | -                 |
| onChange         | 切换面板的回调                                   | (key) => Void                          | -                 |
| showClose        | 是否开启删除功能；开启后，需传入 statusList 属性 | Boolean                                | false             |
| statusList       | 受控属性，控制每一个面板是否显示的数组           | Array< Boolean >                       | [true, true, ...] |

### Collapse.Panel

| 参数     | 说明                                       | 类型    | 默认值          |
| -------- | ------------------------------------------ | ------- | --------------- |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | Boolean | false           |
| header   | 面板头内容                                 | String  | () => ReactNode |
| key      | 对应 activeKey                             | String  | -               |
