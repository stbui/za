# Guide 引导

页面内容的引导。

## 何时使用

面向新用户或新功能的引导，使用户快速地了解页面内容。

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

| 属性                    | 说明                                                        | 类型                                                                                                               | 默认值   |
| :---------------------- | :---------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------- |
| allowClose              | 点击遮罩层时是否允许关闭                                    | Boolean                                                                                                            | false    |
| className（fixed 模式） | 容器类名，只在 fixed 模式有效                               | String                                                                                                             | -        |
| counter                 | 是否展示内容高亮区的步骤计数器                              | Boolean                                                                                                            | true     |
| doneBtnText             | 完成按钮的文案                                              | String                                                                                                             | '知道了' |
| keyboardControl         | 允许通过键盘控制（按 ESC 键关闭，按左右方向键切换引导步骤） | Boolean                                                                                                            | false    |
| mask                    | 是否展示遮罩层                                              | Boolean                                                                                                            | true     |
| mode                    | 引导的展示模式                                              | Enum { 'fixed', 'normal' }                                                                                         | 'normal' |
| nextBtnText             | 下一步按钮的文案                                            | String                                                                                                             | '下一步' |
| onClose                 | 关闭引导时的回调函数                                        | () => {}                                                                                                           | -        |
| prevBtnText             | 上一步按钮的文案                                            | String                                                                                                             | '上一步' |
| skipBtnText             | 跳过按钮的文案                                              | String                                                                                                             | '跳过'   |
| steps（normal 模式）    | 定义步骤，详情见下方介绍                                    | Array < Object { counterPosition: Enum, element: String, popover: Object } >                                       | -        |
| steps（fixed 模式）     | 定义步骤，详情见下方介绍                                    | Array < Object { title: String \| HTMLElement, subtitle: String \| HTMLElement, content: String \| HTMLElement } > | -        |
| style（fixed 模式）     | 容器样式，只在 fixed 模式有效                               | Object                                                                                                             | -        |
| visible                 | 是否展示引导                                                | Boolean                                                                                                            | false    |

### steps 数组内的元素（normal 模式）

| 属性            | 说明                              | 类型                                                                                                         | 默认值    |
| :-------------- | :-------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-------- |
| counterPosition | 步骤计数器的位置                  | Enum {'leftTop', 'leftBottom', 'rightTop', 'rightBottom'}                                                    | 'leftTop' |
| element         | 要高亮的元素或该元素的 CSS 选择器 | HTMLElement \| String                                                                                        | -         |
| popover         | 步骤弹层容器设置，详情见下方介绍  | Object { className: String, description: String \| HTMLString, position: Enum, title: String \| HTMLString } | -         |

### steps 数组内元素的 popover（normal 模式）

| 属性        | 说明               | 类型                                                                                                                                            | 默认值       |
| :---------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| className   | 步骤弹层容器的类名 | String                                                                                                                                          | -            |
| description | 步骤的介绍         | String \| HTMLString                                                                                                                            | -            |
| position    | 步骤弹层的位置     | Enum {'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'} | 'bottomLeft' |
| title       | 步骤的标题         | String \| HTMLString                                                                                                                            | -            |

### steps 数组内的元素（fixed 模式）

| 属性     | 说明                               | 类型                  | 默认值 |
| :------- | :--------------------------------- | :-------------------- | :----- |
| content  | 步骤的内容                         | String \| HTMLElement | -      |
| subtitle | 步骤的子标题                       | String \| HTMLElement | -      |
| title    | 步骤的标题，值为 null 时不展示标题 | String \| HTMLElement | null   |
