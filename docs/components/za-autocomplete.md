# AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

需要自动完成时。

## Installation

```sh
npm install @stbui/za-autocomplete
```

## 基本使用

```jsx
import React from 'react';
import Autocomplete from '@stbui/za-autocomplete';

export default () => <Autocomplete>Autocomplete</Autocomplete>;
```

## 自定义选项

## 查询模式

## API

| 参数                     | 说明                                                                                                                                                | 类型                                                                                                                                         | 默认值              |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| allowClear               | 支持清除, 单选模式有效                                                                                                                              | Boolean                                                                                                                                      | false               |
| autoFocus                | 自动获取焦点                                                                                                                                        | Boolean                                                                                                                                      | false               |
| backfill                 | 使用键盘选择选项的时候把选中项回填到输入框中                                                                                                        | Boolean                                                                                                                                      | false               |
| children (数据源)        | 自动完成的数据源。<br>AutoComplete.Option：选择项<br>AutoComplete.OptGroup：选择组                                                                  |                                                                                                                                              | -                   |
| children (自定义输入框)  | 自定义输入框                                                                                                                                        | HTMLInputElement \|<br> HTMLTextAreaElement \|<br> ReactNode< InputProps >                                                                   | `<Input />`         |
| className                | 容器类名                                                                                                                                            | String                                                                                                                                       | -                   |
| dataSource               | 自动完成的数据源                                                                                                                                    | Array< DataSourceItemType>                                                                                                                   | -                   |
| defaultActiveFirstOption | 是否默认高亮第一个选项                                                                                                                              | Boolean                                                                                                                                      | true                |
| defaultValue             | 指定默认选中的条目                                                                                                                                  | String \|<br> Array< String > \|<br> { key: String, label: String \| ReactNode } \|<br> Array< { key: String, label: String \| ReactNode} >  | -                   |
| disabled                 | 是否禁用                                                                                                                                            | Boolean                                                                                                                                      | false               |
| filterOption             | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` 和 `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | Boolean \| (inputValue, option) => Boolean                                                                                                   | true                |
| getPopupContainer        | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位                                                  | (triggerNode) => HTMLElement                                                                                                                 | () => document.body |
| highlightSelected        | 是否用主色调高亮选中的选项。当选项中包含超链接时，可以通过此接口取消高亮色以免无法区分文本和超链接。                                                | Boolean                                                                                                                                      | true                |
| onBlur                   | 失去焦点时的回调                                                                                                                                    | () => Void                                                                                                                                   | -                   |
| onChange                 | 选中 option，或 input 的 value 变化时，调用此函数                                                                                                   | (value) => Void                                                                                                                              | -                   |
| onFocus                  | 获得焦点时的回调                                                                                                                                    | () => Void                                                                                                                                   | -                   |
| onSearch                 | 搜索补全项的时候调用                                                                                                                                | (value) => Void                                                                                                                              | -                   |
| onSelect                 | 被选中时调用，参数为选中项的 value 值                                                                                                               | (value, option) => Void                                                                                                                      | -                   |
| optionLabelProp          | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`                                            | String                                                                                                                                       | `children`          |
| placeholder              | 输入框提示                                                                                                                                          | String                                                                                                                                       | -                   |
| style                    | 容器样式                                                                                                                                            | Object                                                                                                                                       | -                   |
| value                    | 指定当前选中的条目                                                                                                                                  | String \|<br> Array< String > \|<br> { key: String, label: String \| ReactNode } \|<br> Array< { key: String, label: String \| ReactNode } > | -                   |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
