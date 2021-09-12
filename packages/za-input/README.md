# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

-   需要用户输入表单域内容时。
-   提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## Installation

```sh
npm install @stbui/za-input
```

## 基本使用

```jsx
import React from 'react';
import Input from '@stbui/za-input';

export default () => <Input>Input</Input>;
```

## 三种大小

## 前置/后置标签

## 输入框组合

## 搜索框

## 文本域

## 适应文本高度的文本域

## 计数器

## 前缀和后缀

## API

### Input

| 参数         | 说明                                                   | 类型                | 默认值    |
| ------------ | ------------------------------------------------------ | ------------------- | --------- |
| addonAfter   | 带标签的 input，设置后置标签                           | String \| ReactNode | -         |
| addonBefore  | 带标签的 input，设置前置标签                           | String \| ReactNode | -         |
| defaultValue | 输入框默认内容                                         | String              | -         |
| disabled     | 是否禁用状态，默认为 false                             | Boolean             | false     |
| id           | 输入框的 id                                            | String              | -         |
| onPressEnter | 按下回车的回调                                         | (e) => Void         | -         |
| prefix       | 带有前缀图标的 input                                   | String \| ReactNode | -         |
| size         | 控件大小。注：标准表单内的输入框大小限制为 `'large'`。 |                     |
| suffix       | 带有后缀图标的 input                                   | String              | ReactNode |
| type         |                                                        | Enum                | 'text'    |
| value        | 输入框内容                                             | String              | -         |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。

### Input.TextArea

| 参数         | 说明                                                                          | 类型                                          | 默认值 |
| ------------ | ----------------------------------------------------------------------------- | --------------------------------------------- | ------ |
| autosize     | 自适应内容高度，可设置为 `true \| false` 或对象：`{ minRows: 2, maxRows: 6 }` | Boolean \| {minRows: Number, maxRows: Number} | false  |
| defaultValue | 输入框默认内容                                                                | String                                        | -      |
| onPressEnter | 按下回车的回调                                                                | (e) => Void                                   | -      |
| value        | 输入框内容                                                                    | String                                        | -      |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

### Input.Counter

| 参数  | 说明                                                     | 类型              | 默认值                          |
| ----- | -------------------------------------------------------- | ----------------- | ------------------------------- |
| limit | 输入框字符限制数量                                       | Number            | -                               |
| count | 计数方法，可以通过更改计数方法实现如中文字算两个字等需求 | (value) => Number | (value: String) => value.length |

`Input.Counter` 的其他属性和`Input.TextArea`一致。

### Input.Search

| 参数        | 说明                           | 类型                 | 默认值 |
| ----------- | ------------------------------ | -------------------- | ------ |
| enterButton | 是否有确认按钮，可设为按钮文字 | Boolean \| ReactNode | false  |
| onSearch    | 点击搜索或按下回车键时的回调   | (value) => Void      | -      |

其余属性和 Input 一致。

### Input.Group

| 参数    | 说明                                  | 类型                               | 默认值    |
| ------- | ------------------------------------- | ---------------------------------- | --------- |
| compact | 是否用紧凑模式                        | Boolean                            | false     |
| size    | `Input.Group` 中所有的 `Input` 的大小 | Enum {'large', 'default', 'small'} | 'default' |

```html
<Input.Group>
    <input />
    <input />
</Input.Group>
```
