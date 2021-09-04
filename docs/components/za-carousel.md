# Carousel 走马灯

旋转木马，一组轮播的区域。

# 何时使用

-   当有一组平级的内容。
-   当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
-   常用于一组图片或卡片轮播。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 基本

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 垂直

## 渐显

## 自动切换

## 手动切换

## 提供帧剩余时间效果

## 居中模式

## API

| 参数          | 说明                                                   | 类型                                    | 默认值    |
| ------------- | ------------------------------------------------------ | --------------------------------------- | --------- |
| afterChange   | 切换面板的回调                                         | (current) => Void                       | -         |
| arrows        | 是否显示切换箭头                                       | Boolean                                 | false     |
| autoplay      | 是否自动切换                                           | Boolean                                 | false     |
| autoplaySpeed | 每次切换的间隔时间，单位毫秒                           | Number                                  | 3000      |
| beforeChange  | 切换面板的回调                                         | (from, to) => Void                      | -         |
| centerMode    | 是否开启居中模式                                       | Boolean                                 | false     |
| centerPadding | 居中模式下的面板容器的内边距值                         | String                                  | '50px'    |
| className     | 容器类名                                               | String                                  | -         |
| dots          | 是否显示面板指示点                                     | Boolean                                 | true      |
| dotsPosition  | 面板指示点的显示位置                                   | Enum {'top', 'right', 'bottom', 'left'} | 'bottom'  |
| dotsTimer     | 是否在面板指示点提供帧剩余时间效果，开启自动切换时有效 | Boolean                                 | false     |
| easing        | 动画效果                                               | String                                  | 'linear'  |
| effect        | 动画效果函数                                           | Enum {'scrollx', 'fade'}                | 'scrollx' |
| focusOnSelect | 是否在点击面板后定位到该面板                           | Boolean                                 | false     |
| nextArrow     | 自定义“切换到下一个”按钮                               | HTMLElement                             | -         |
| prevArrow     | 自定义“切换到上一个”按钮                               | HTMLElement                             | -         |
| slidesToShow  | 在一个面板容器中显示的面板数量                         | Number                                  | 1         |
| style         | 容器样式                                               | Object                                  | -         |

### 方法

| 名称              | 描述           |
| ----------------- | -------------- |
| goTo(slideNumber) | 切换到指定面板 |
| next()            | 切换到下一面板 |
| prev()            | 切换到上一面板 |

更多参数可参考：<https://github.com/akiran/react-slick>
