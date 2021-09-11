# Ellipsis 文本自动省略号

文本过长自动处理省略号，支持按照文本框宽度、文本长度和最大行数三种方式截取。

## Installation

```sh
npm install @stbui/za-checkbox
```

## Usage

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## API

> 注意： length/width/lines 属性代表三种模式：限制字数、限制宽度、限制行数 ，使用时三选一

> Tooltip 仅在文字不能完全显示的时候生效。

| 参数                 | 说明                                                      | 类型             | 默认值 |
| -------------------- | --------------------------------------------------------- | ---------------- | ------ |
| tooltip              | 移动到文本展示完整内容的提示                              | Boolean          | true   |
| tooltipProps         | tooltip 的属性                                            | Object           | {}     |
| length               | 在按照长度截取下的文本最大字符数，超过则截取省略          | Number           | -      |
| lines                | 在按照行数截取下最大的行数，超过则截取省略                | Number           | `1`    |
| fullWidthRecognition | length 模式下,是否将全角字符的长度视为 2 来计算字符串长度 | Boolean          | false  |
| className            | 额外 class                                                | String           | -      |
| style                | 额外样式                                                  | Object           | -      |
| width                | 限制宽度大小                                              | String \| Number | -      |
