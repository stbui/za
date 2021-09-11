# Dropdown 下拉菜单

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 交互规范

• 弹出一个下拉选项给用户选择操作

• 当选项少时（少于 5 项），建议直接将选项平铺，使用 单选 是更好的选择；

• 可以搜索的选择器：选项较多且指向性明确使用，当输入框处于激活态时，浮出下拉列表。在输入过程中，出现匹配枚举项，点击枚举项，则输入的关键词清空，同时下拉选项收起。输入框出现选择的选项。

•多选选择器： 用户在输入关键词中，选择对应下拉选项，则输入的字符串清空，同时出现该选项 tag。

• 二元选择题（是/否），建议使用复选框或开关；五个以内选项，建议使用单选框，一眼就能看到所有选项，而不需要去打开列表。

• 合理排列选项，将选择次数最多的选项或最有可能的答案设为默认选项，代表空值或全部的选项通常放在选项顶部

• 数值类选项建议直输入，对于精确数值可采用数字输入框，不精确数值可采用滑块；

• 选择器交互方式尽量不要使用交互式下拉菜单，交互式下拉菜单指在同一页面内，用户选中某一菜单中的选项后，另一菜单的选项也会跟着变化。网页界面内的选项变来变去，就容易让用户看得眼花缭乱、抓不住重点。

• 选项各种状态要做出明确区分，禁用选项通常变灰而非删除。

## Installation

```sh
npm install @stbui/za-dropdown
```

## 基本

```jsx | pure
import React from 'react';
import Dropdown from '@stbui/za-dropdown';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 弹出位置

## 右键菜单

## 带下拉框的按钮

## 触发事件

## 其他元素

## 菜单隐藏方式

## 多级菜单

## 触发方式

## API

属性如下

| 参数              | 说明                                                                                                                                                          | 类型                                                                                   | 默认值              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------- |
| className         | 自定义类名                                                                                                                                                    | String                                                                                 | -                   |
| disabled          | 菜单是否禁用                                                                                                                                                  | Boolean                                                                                | -                   |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | () => HTMLElement                                                                      | () => document.body |
| onVisibleChange   | 菜单显示状态改变时调用，参数为 visible                                                                                                                        | (visible) => Void                                                                      | -                   |
| overlay           | 菜单                                                                                                                                                          | [Menu](https://nsfi.github.io/ppfish-components/#/components/menu)                     | -                   |
| placement         | 菜单弹出位置                                                                                                                                                  | Enum {'bottomLeft', 'bottomCenter' ,'bottomRight' ,'topLeft' ,'topCenter', 'topRight'} | 'bottomLeft'        |
| style             | 自定义样式                                                                                                                                                    | Object                                                                                 | -                   |
| trigger           | 触发下拉的行为                                                                                                                                                | Array< `click` \| `hover` \| `contextMenu` >                                           | ['hover']           |
| visible           | 菜单是否显示                                                                                                                                                  | Boolean                                                                                | -                   |

`overlay` 菜单使用 [Menu](https://nsfi.github.io/ppfish-components/#/components/menu/)，还包括菜单项 `Menu.Item`，分割线 `Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。
>
> Dropdown 在单个数据过长、数量过多的极端情况下可能会出现屏幕显示不下的情况，可以考虑设置`overflow:auto`,`maxWidth(maxHeight):100vw`等方式处理
>
> Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 `<Menu selectable>`.

### Dropdown.Button

| 参数            | 说明                                   | 类型                                                                                   | 默认值       |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------- | ------------ |
| className       | 自定义类名                             | String                                                                                 | -            |
| disabled        | 菜单是否禁用                           | Boolean                                                                                | -            |
| onClick         | 点击左侧按钮的回调，和 Button 一致     | () => Void                                                                             | -            |
| onVisibleChange | 菜单显示状态改变时调用，参数为 visible | (visible) => Void                                                                      | -            |
| overlay         | 菜单                                   | Menuu                                                                                  | -            |
| placement       | 菜单弹出位置                           | Enum {'bottomLeft', 'bottomCenter' ,'bottomRight' ,'topLeft' ,'topCenter', 'topRight'} | 'bottomLeft' |
| size            | 按钮大小，和 Button 一致               | String                                                                                 | 'default'    |
| style           | 自定义样式                             | Object                                                                                 | -            |
| trigger         | 触发下拉的行为                         | Array< `click` \| `hover` \| `contextMenu` >                                           | ['hover']    |
| type            | 按钮类型，和 Button 一致               | String                                                                                 | 'default'    |
| visible         | 菜单是否显示                           | Boolean                                                                                | -            |
