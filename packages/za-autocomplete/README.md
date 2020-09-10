# 自动完成 Autocomplete

## Installation

```sh
npm install @stbui/za-autocomplete
```

## Usage

```jsx
import React from 'react';
import Autocomplete from '@stbui/za-autocomplete';

export default () => <Autocomplete>Autocomplete</Autocomplete>;
```

输入框自动完成功能。

## 何时使用

需要自动完成时。

## API

| 参数                        | 说明                                                                                                                                            | 类型                                                                               | 默认值              | 版本 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------- | ---- |
| allowClear                  | 支持清除, 单选模式有效                                                                                                                          | boolean                                                                            | false               |      |
| autoFocus                   | 自动获取焦点                                                                                                                                    | boolean                                                                            | false               |      |
| backfill                    | 使用键盘选择选项的时候把选中项回填到输入框中                                                                                                    | boolean                                                                            | false               |      |
| children (自定义输入框)     | 自定义输入框                                                                                                                                    | HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement&lt;InputProps>       | &lt;Input />        |      |
| children (自动完成的数据源) | 自动完成的数据源                                                                                                                                | React.ReactElement&lt;OptionProps> \| Array&lt;React.ReactElement&lt;OptionProps>> | -                   |      |
| defaultActiveFirstOption    | 是否默认高亮第一个选项                                                                                                                          | boolean                                                                            | true                |      |
| defaultValue                | 指定默认选中的条目                                                                                                                              | string                                                                             | -                   |      |
| disabled                    | 是否禁用                                                                                                                                        | boolean                                                                            | false               |      |
| dropdownClassName           | 下拉菜单的 className 属性                                                                                                                       | string                                                                             | -                   |      |
| dropdownMatchSelectWidth    | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动                                              | boolean \| number                                                                  | true                |      |
| filterOption                | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false      | boolean \| function(inputValue, option)                                            | true                |      |
| getPopupContainer           | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode)                                                              | () => document.body |      |
| placeholder                 | 输入框提示                                                                                                                                      | string                                                                             | -                   |      |
| value                       | 指定当前选中的条目                                                                                                                              | string                                                                             | -                   |      |
| onBlur                      | 失去焦点时的回调                                                                                                                                | function()                                                                         | -                   |      |
| onChange                    | 选中 option，或 input 的 value 变化时，调用此函数                                                                                               | function(value)                                                                    | -                   |      |
| onFocus                     | 获得焦点时的回调                                                                                                                                | function()                                                                         | -                   |      |
| onSearch                    | 搜索补全项的时候调用                                                                                                                            | function(value)                                                                    | -                   |      |
| onSelect                    | 被选中时调用，参数为选中项的 value 值                                                                                                           | function(value, option)                                                            | -                   |      |
| defaultOpen                 | 是否默认展开下拉菜单                                                                                                                            | boolean                                                                            | -                   |      |
| open                        | 是否展开下拉菜单                                                                                                                                | boolean                                                                            | -                   |      |
| options                     | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能                                                                                           | { label, value }[]                                                                 | -                   |      |
| onDropdownVisibleChange     | 展开下拉菜单的回调                                                                                                                              | function(open)                                                                     | -                   |      |
| notFoundContent             | 当下拉列表为空时显示的内容                                                                                                                      | ReactNode                                                                          | -                   |      |
