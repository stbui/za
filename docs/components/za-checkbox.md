# Checkbox 复选框

复选框表单域, 用于备选项数目不是太多且需要多选的场景。

## 何时使用

-   在一组可选项中进行多项选择时；
-   单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 基本用法

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 不可用

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox disabled>Checkbox</Checkbox>;
```

## 受控的 Checkbox

## Checkbox 组

## 全选

## 中间状态

## API

### Checkbox

| 参数           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
| autoFocus      | 自动获取焦点                            | Boolean           | false  |
| checked        | 指定当前是否选中                        | Boolean           | false  |
| className      | 选择器的 className                      | String            | -      |
| defaultChecked | 初始是否选中                            | Boolean           | false  |
| disabled       | 失效状态                                | Boolean           | false  |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | Boolean           | false  |
| onChange       | 变化时回调函数                          | (e:Event) => Void | -      |

### Checkbox.Group

| 参数         | 说明                                                     | 类型                      | 默认值 |
| ------------ | -------------------------------------------------------- | ------------------------- | ------ |
| defaultValue | 默认选中的选项                                           | String \| Array< String > | []     |
| disabled     | 整组失效                                                 | Boolean                   | false  |
| onChange     | 变化时回调函数                                           | (checkedValue) => Void    | -      |
| options      | 指定可选项                                               | String \| Array< String > | []     |
| value        | 指定选中的选项                                           | String \| Array< String > | []     |
| name         | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | string                    |

## 方法

### Checkbox

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
