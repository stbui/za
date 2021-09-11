# ColorPicker 颜色选择器

## 何时使用

用于颜色选择。

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

### ColorPicker

| 参数              | 说明                                        | 类型                           | 默认值                                                                                                                               |
| :---------------- | :------------------------------------------ | :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| alpha             | 颜色 opacity 值                             | Number                         | 100                                                                                                                                  |
| className         | 额外的 className                            | String                         | -                                                                                                                                    |
| color             | 取色板当前的颜色值                          | String (HEX 色值)              | '#33bbff'                                                                                                                            |
| colorHistory      | 颜色选择历史记录,组件初始化的时候会进行同步 | Array< {color,alpha}\|String > | []                                                                                                                                   |
| colorMap          | 快捷入口的颜色列表                          | Array< String >                | ['#33bbff', '#337eff', '#8a73ff', '#bb67e6', '#f290b6', '#f24957', '#cc613d', '#faa702', '#ffe500', '#aacc00', '#26bf40', '#3dd9af'] |
| defaultAlpha      | 默认的 opacity 值                           | Number                         | 100                                                                                                                                  |
| defaultColor      | 默认的的颜色值                              | String (HEX 色值)              | '#33bbff'                                                                                                                            |
| disabled          | 是否禁用                                    | Boolean                        | false                                                                                                                                |
| enableAlpha       | 是否开启 opacity                            | Boolean                        | false                                                                                                                                |
| enableHistory     | 开启历史记录                                | Boolean                        | true                                                                                                                                 |
| getPopupContainer | 选定弹出框的相对位置节点                    | () => HTMLElement              | () => document.body                                                                                                                  |
| onChange          | 颜色更改                                    | ({color,alpha}）=> Void        | noop                                                                                                                                 |
| onVisibleChange   | 弹出框显示隐藏                              | (visible）=> Void              | noop                                                                                                                                 |
| quickMode         | 是否使用快捷入口模式                        | Boolean                        | false                                                                                                                                |
| style             | 自定义样式                                  | Object                         | {}                                                                                                                                   |
| popupStyle        | 弹出层自定义样式                            | Object                         | {}                                                                                                                                   |
| esc               | 是否 ESC 关闭弹出框                         | Boolean                        | true                                                                                                                                 |

### ColorPicker.QuickPanel

| 参数              | 说明                                                              | 类型                           | 默认值                                                                                                                                                                           |
| :---------------- | :---------------------------------------------------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alpha             | 颜色 opacity 值                                                   | Number                         | 100                                                                                                                                                                              |
| className         | 额外的 className                                                  | String                         | -                                                                                                                                                                                |
| color             | 取色板当前的颜色值                                                | String (HEX 色值)              | '#33bbff'                                                                                                                                                                        |
| colorHistory      | 自定义颜色选择弹窗中的颜色选择历史记录,组件初始化的时候会进行同步 | Array< {color,alpha}\|String > | []                                                                                                                                                                               |
| colorMap          | 快捷入口的颜色列表                                                | Array< String >                | ['#33bbff', '#337eff', '#8a73ff', '#bb67e6', '#f290b6', '#f24957', '#cc613d', '#faa702', '#ffe500', '#aacc00', '#26bf40', '#3dd9af', '#333333', '#666666', '#999999', '#cccccc'] |
| defaultAlpha      | 自定义颜色选择默认的 opacity 值                                   | Number                         | 100                                                                                                                                                                              |
| defaultColor      | 默认的的颜色值                                                    | String (HEX 色值)              | '#33bbff'                                                                                                                                                                        |
| disabled          | 是否禁用                                                          | Boolean                        | false                                                                                                                                                                            |
| enableAlpha       | 自定义颜色选择是否开启 opacity                                    | Boolean                        | false                                                                                                                                                                            |
| enableHistory     | 自定义颜色选择是否开启历史记录                                    | Boolean                        | true                                                                                                                                                                             |
| getPopupContainer | 自定义颜色选择弹出框的相对位置节点                                | () => HTMLElement              | () => document.body                                                                                                                                                              |
| onChange          | 颜色更改                                                          | ({color,alpha}）=> Void        | noop                                                                                                                                                                             |
| onVisibleChange   | 自定义颜色选择框显示隐藏                                          | (visible）=> Void              | noop                                                                                                                                                                             |
| userSelectColor   | 提供用户使用自定义颜色选择                                        | Boolean                        | true                                                                                                                                                                             |
| style             | 自定义样式                                                        | Object                         | {}                                                                                                                                                                               |
| popupStyle        | 弹出层自定义样式                                                  | Object                         | {}                                                                                                                                                                               |
| esc               | 是否 ESC 关闭弹出框                                               | Boolean                        | true                                                                                                                                                                             |
