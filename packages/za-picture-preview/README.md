# PicturePreview 图片查看器

预览图片，对图片进行等比缩放、全屏显示、放大、缩小、旋转 90 度、保存等操作。

## 何时使用

当图片因大小比例、展示角度等原因不适合观看或想连续观看一组图片时，可以使用图片查看器调整或观看。

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

| 属性        | 说明                                                                                                                                                                                   | 类型       | 默认值 |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- | :----- |
| activeIndex | 当前展示第几张图片                                                                                                                                                                     | Number     | 0      |
| className   | 图片容器类名                                                                                                                                                                           | String     | -      |
| draggable   | 是否可拖动                                                                                                                                                                             | Boolean    | false  |
| esc         | 是否允许通过按 ESC 键关闭                                                                                                                                                              | Boolean    | true   |
| mask        | 是否展示遮罩层                                                                                                                                                                         | Boolean    | true   |
| onClose     | 关闭后的回调函数                                                                                                                                                                       | () => Void | -      |
| progress    | 是否展示图片总数和当前进度                                                                                                                                                             | Boolean    | false  |
| source      | 设置图片的源数据，可选，格式为 `[{src: ""[, name: ""]}]`。当不设置 source 时可以手动构造子节点，子节点需是 `img` 标签，且包含 `src` 属性。若 source 与子节点同时存在，子节点将被忽略。 | Array      | []     |
| style       | 图片容器样式                                                                                                                                                                           | Object     | -      |
| toolbar     | 是否展示工具栏                                                                                                                                                                         | Boolean    | false  |
| visible     | 是否展示图片查看器                                                                                                                                                                     | Boolean    | false  |
