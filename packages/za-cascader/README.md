# Cascader 级联选择

级联选择框。

## 何时使用

-   需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
-   从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
-   比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 基本

```jsx
/**
 * title: 我是标题
 * desc: 我是简介，我可以用 `Markdown` 来编写
 */
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 默认值

## 可以自定义显示

## 移入展开

## 禁用选项

## 选择即改变

## 大小

## 自定义已选项

## 搜索

## 动态加载选项

## 自定义字段名

## API

| 参数              | 说明                                                                                                                                                          | 类型                                                                              | 默认值                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| allowClear        | 是否支持清除                                                                                                                                                  | Boolean                                                                           | true                                                     |
| autoFocus         | 自动获取焦点                                                                                                                                                  | Boolean                                                                           | false                                                    |
| changeOnSelect    | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示                                                                                            | Boolean                                                                           | false                                                    |
| className         | 自定义类名                                                                                                                                                    | String                                                                            | -                                                        |
| defaultValue      | 默认的选中项                                                                                                                                                  | Array< String >                                                                   | \[]                                                      |
| disabled          | 禁用                                                                                                                                                          | Boolean                                                                           | false                                                    |
| displayRender     | 选择后展示的渲染函数                                                                                                                                          | (label, selectedOptions) => ReactNode                                             | label => label.join(' / ')                               |
| expandTrigger     | 次级菜单的展开方式，可选 'click' 和 'hover'                                                                                                                   | String                                                                            | 'click'                                                  |
| fieldNames        | 自定义 options 中 label name children 的字段                                                                                                                  | Object                                                                            | { label: 'label', value: 'value', children: 'children' } |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode) => HTMLElement                                                      | () => document.body                                      |
| loadData          | 用于动态加载选项，无法与 `showSearch` 一起使用                                                                                                                | (selectedOptions) => Void                                                         | -                                                        |
| notFoundContent   | 当下拉列表为空时显示的内容                                                                                                                                    | String                                                                            | '无匹配结果'                                             |
| onChange          | 选择完成后的回调                                                                                                                                              | (value, selectedOptions) => Void                                                  | -                                                        |
| onVisibleChange   | 显示/隐藏浮层的回调                                                                                                                                           | (value) => Void                                                                   | -                                                        |
| options           | 可选项数据源                                                                                                                                                  | Object                                                                            | -                                                        |
| placeholder       | 输入框占位文本                                                                                                                                                | String                                                                            | '请选择'                                                 |
| popupClassName    | 自定义浮层类名                                                                                                                                                | String                                                                            | -                                                        |
| popupPlacement    | 浮层预设位置                                                                                                                                                  | Enum {'bottomLeft','bottomCenter','bottomRight','topLeft','topCenter','topRight'} | 'bottomLeft'                                             |
| popupVisible      | 控制浮层显隐                                                                                                                                                  | Boolean                                                                           | -                                                        |
| showSearch        | 在选择框中显示搜索框                                                                                                                                          | Boolean                                                                           | false                                                    |
| size              | 输入框大小                                                                                                                                                    | Enum {'large','default','small'}                                                  | 'default'                                                |
| style             | 自定义样式                                                                                                                                                    | Object                                                                            | -                                                        |
| value             | 指定选中项                                                                                                                                                    | Array< String >                                                                   | -                                                        |
| esc               | 是否开启 ESC 关闭弹层                                                                                                                                         | Boolean                                                                           | true                                                     |

`showSearch` 为对象时，其中的字段：

| 参数            | 说明                                                                                         | 类型                            | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| filter          | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false。 | (inputValue, path)=> Boolean    | -      |
| matchInputWidth | 搜索结果列表是否与输入框同宽                                                                 | Boolean                         | -      |
| render          | 用于渲染 filter 后的选项                                                                     | (inputValue, path) => ReactNode | -      |
| sort            | 用于排序 filter 后的选项                                                                     | (a, b, inputValue) => Boolean   | -      |
| limit           | 搜索结果展示数量                                                                             | Number \| false                 | 50     |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)。
