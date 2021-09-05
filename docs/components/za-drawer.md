# Drawer 抽屉组件

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

## 何时使用

-   当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
-   当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 基础用法

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## API

| 参数          | 说明                                     | 类型                                    | 默认值                                                                      |
| ------------- | ---------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------- |
| className     | 对话框外层容器的类名                     | String                                  | -                                                                           |
| closed        | 是否展示关闭按钮                         | Boolean                                 | false                                                                       |
| duration      | 过渡效果需要的时间                       | String                                  | '.3s'                                                                       |
| ease          | 过渡效果的时间曲线                       | String                                  | 'cubic-bezier(0.78, 0.14, 0.15, 0.86)'                                      |
| getContainer  | 指定 Drawer 挂载的 HTML 节点             | () => ReactNode                         | () => document.body                                                         |
| handler       | 是否显示触发按钮或自定义触发按钮样式     | Boolean \| ReactNode                    | `<div className="drawer-handle"><i className="drawer-handle-icon" /></div>` |
| height        | 高度                                     | String \| Number                        | -                                                                           |
| level         | 随着抽屉移动的元素                       | Enum {'all',null,className,id,tagName}  | 'all'                                                                       |
| mask          | 是否展示遮罩                             | Boolean                                 | true                                                                        |
| maskStyle     | 遮罩样式                                 | Object                                  | -                                                                           |
| onChange      | 展开或收起的回调                         | (status:Boolean) => Void                | -                                                                           |
| onCloseClick  | 点击关闭按钮的回调                       | (e) => Void                             | -                                                                           |
| onHandleClick | 点击触发按钮的回调                       | (e) => Void                             | -                                                                           |
| onMaskClick   | 点击遮罩的回调                           | (e) => Void                             | -                                                                           |
| placement     | 抽屉的方向                               | Enum {'left', 'right', 'top', 'bottom'} | 'right'                                                                     |
| style         | 可用于设置 Drawer 的样式，调整浮层位置等 | Object                                  | -                                                                           |
| visible       | 打开或关闭抽屉                           | Boolean                                 | false                                                                       |
| width         | 宽度                                     | String \| Number                        | -                                                                           |
