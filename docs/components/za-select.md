# Select 选择器

## 何时使用

-   弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
-   当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 基本使用

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 限制多选个数

## 添加额外的内容

## 三种大小

## 分组

## 获得选项文本

## 联动

## 多选操作/Label 可删除的多选操作

## 支持搜索

## 加载状态

## 宽度及位置自定义

## 后端搜索-单选

## 后端搜索-多选

## API

```html
<select>
    <Select.Option value="alen">alen</Select.Option>
</select>
```

### Select props

| 参数                     | 说明                                                                                                                                             | 类型                                                                                 | 默认值              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------- |
| allowClear               | 支持搜索框清除操作                                                                                                                               | Boolean                                                                              | true                |
| defaultActiveFirstOption | 是否默认激活第一项                                                                                                                               | Boolean                                                                              | false               |
| defaultValue             | 指定默认选中的条目                                                                                                                               | String \| Array< String > \| Number \| Array< Number >                               | -                   |
| disabled                 | 是否禁用                                                                                                                                         | Boolean                                                                              | false               |
| dropdownClassName        | 下拉菜单的 className 属性                                                                                                                        | String                                                                               | -                   |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽                                                                                                                             | Bolean                                                                               | true                |
| dropdownStyle            | 下拉菜单的 style 属性                                                                                                                            | Object                                                                               | -                   |
| errorMessage             | 错误提示文案                                                                                                                                     | String/ReactNode                                                                     | '超过选项上限'      |
| extraOptions             | 额外的列表项                                                                                                                                     | String/ReactNode                                                                     | -                   |
| filterOption             | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | Boolean \| (inputValue, option) => Void                                              | true                |
| getPopupContainer        | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0)  | (triggerNode) => HTMLElement                                                         | () => document.body |
| labelClear               | 多选模式下开启 label 删除功能                                                                                                                    | Boolean                                                                              | false               |
| labelInValue             | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `{key: String, label: ReactNode , title : String }` 的格式     | Boolean                                                                              | false               |
| loading                  | 加载状态                                                                                                                                         | Boolean                                                                              | false               |
| maxCount                 | 最大多选个数                                                                                                                                     | Number                                                                               | -                   |
| maxLabelClearPanelHeight | 可删除 label 模式下面板的最大高度( mode='multiple' & labelClear)                                                                                 | Number \| String                                                                     | '三行的高度'        |
| maxScrollHeight          | 列表滚动区高度                                                                                                                                   | Number                                                                               | 250                 |
| mode                     | 设置 Select 的模式                                                                                                                               | Enum {'multiple' , 'single' }                                                        | -                   |
| multipleSelectAllText    | 在多选模式下选项全部选中时，在已选框中显示的特定的文案                                                                                           | String                                                                               | '全部选中'          |
| notFoundContent          | 当下拉列表为空时显示的内容                                                                                                                       | String \| ReactNode                                                                  | '无匹配结果'        |
| onChange                 | 选中 option 时，调用此函数                                                                                                                       | (value) => Void                                                                      | -                   |
| onDeselect               | 多选模式下取消选定时的回调                                                                                                                       | (value) => Void                                                                      | -                   |
| onMouseEnter             | 鼠标移入时回调                                                                                                                                   | (value) => Void                                                                      | -                   |
| onMouseLeave             | 鼠标移出时回调                                                                                                                                   | (value) => Void                                                                      | -                   |
| onPopupScroll            | 下拉列表滚动时的回调                                                                                                                             | (value) => Void                                                                      | -                   |
| onSearch                 | 文本框值变化时回调                                                                                                                               | (value) => Void                                                                      | -                   |
| onSelect                 | 被选中时调用，参数为选中项的 value (或 key) 值                                                                                                   | (value) => Void                                                                      | -                   |
| onVisibleChange          | 弹出框显示隐藏                                                                                                                                   | (visible) => Void                                                                    | -                   |
| placeholder              | 选择框默认文字                                                                                                                                   | String                                                                               | '请选择'            |
| placement                | 弹窗位置                                                                                                                                         | Enum {'bottomLeft', 'bottomCenter', 'bottomRight','topLeft','topCenter', 'topRight'} | 'bottomLeft'        |
| searchInputProps         | 搜索框额外属性                                                                                                                                   | Object                                                                               | {}                  |
| searchPlaceholder        | 搜索框默认文字                                                                                                                                   | String                                                                               | '请输入关键字'      |
| selectAllText            | 是否显示全选/反选功能-文案                                                                                                                       | String                                                                               | '选择所有'          |
| showArrow                | 是否显示下拉小箭头                                                                                                                               | Boolean                                                                              | true                |
| showMultipleSelectAll    | 设置在多选模式下选项全部选中时，是否在已选框中显示特定的文案，而不是显示“选项 1、选项 2、选项 3...”                                              | Boolean                                                                              | false               |
| showOptionCheckedIcon    | 是否显示 option 选中的 √                                                                                                                         | Boolean                                                                              | true                |
| showSearch               | 是否可搜索，需要配合 filterOption 或者后端搜索使用                                                                                               | Boolean                                                                              | false               |
| showSelectAll            | 是否显示全选/反选功能（仅在 mode='multiple'生效）                                                                                                | Boolean                                                                              | true                |
| showSingleClear          | 是否显示清除选择功能（仅在 mode='single'生效）                                                                                                   | Boolean                                                                              | false               |
| size                     | 选择框大小，可选 `large` `small`                                                                                                                 | Enum {'large','small'}                                                               | default             |
| tagWidth                 | 可清除选项的宽度（仅在 mode = 'multiple' 且 labelClear = true 生效）                                                                             | String \| Number                                                                     | 100                 |
| value                    | 指定当前选中的条目                                                                                                                               | String \| Array< String > \| Number \| Array< Number >                               | -                   |
| visible                  | 下拉选择框显示隐藏                                                                                                                               | Boolean                                                                              | -                   |
| esc                      | 是否 ESC 关闭弹出框                                                                                                                              | Boolean                                                                              | true                |
| required                 | 限定多选模式下至少需要选择一项选项                                                                                                               | Boolean                                                                              | false               |

> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 getPopupContainer={triggerNode => triggerNode.parentNode} 将下拉弹层渲染节点固定在触发器的父元素中。

### Select Methods

| 名称    | 说明     |
| ------- | -------- |
| blur()  | 取消焦点 |
| focus() | 获取焦点 |

> 注意，在有 SearchInput 的情况，操作的目标为 Input 框,`listConvertToGroup`在 util 库中引用

### Select.Option props

| 参数     | 说明                                                                                           | 类型    | 默认值 |
| -------- | ---------------------------------------------------------------------------------------------- | ------- | ------ | --- |
| disabled | 是否禁用                                                                                       | Boolean | false  |
| key      | 和 value 含义一致。如果 React 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置 | String  | -      |
| value    | -                                                                                              | String  | Number | -   |
| title    | title 值                                                                                       | String  | -      |

### Select.OptGroup props

| 参数  | 说明 | 类型                | 默认值 |
| ----- | ---- | ------------------- | ------ |
| key   | -    | String              | -      |
| label | 组名 | String \| ReactNode | -      |
