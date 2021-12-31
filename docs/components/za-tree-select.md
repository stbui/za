# TreeSelect 树选择

树型选择控件。

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect。

## Installation

```sh
npm install @stbui/za-alert
```

## 单选

```tsx
import React from 'react';
import Alert from '@stbui/za-alert';

export default () => <Alert>Alert</Alert>;
```

## 设置为必选的单选

## 从数据直接生成的单选

## 异步加载数据的单选

## 多选

## 设置为必选的多选

## 不可编辑的多选

## 设置为必选且不可编辑的多选

## 异步加载数据的多选

## 多选，单向联动

## 后端搜索

## 自定义图标

## API

### Tree props

| 参数                     | 说明                                                                                                                                                                                                                              | 类型                                                                                          | 默认值                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------- |
| autoClearSearchValue     | 当树节点被选择时，是否自动清空搜索框                                                                                                                                                                                              | Boolean                                                                                       | false                  |
| autoExpandParent         | 是否自动展开父节点                                                                                                                                                                                                                | Boolean                                                                                       | false                  |
| className                | 容器类名                                                                                                                                                                                                                          | String                                                                                        | -                      |
| defaultValue             | 指定默认选中的条目                                                                                                                                                                                                                | String \| Array< String >                                                                     | -                      |
| disabled                 | 是否禁用                                                                                                                                                                                                                          | Boolean                                                                                       | false                  |
| doCheckChildInSearch     | 只搜索出部分节点情况下，是否只传这些子节点的 ID                                                                                                                                                                                   | Boolean                                                                                       | false                  |
| dropdownClassName        | 下拉菜单的 className 属性                                                                                                                                                                                                         | String                                                                                        | -                      |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽                                                                                                                                                                                                              | Boolean                                                                                       | true                   |
| dropdownStyle            | 下拉菜单的样式                                                                                                                                                                                                                    | Object                                                                                        | -                      |
| editable                 | 选中的条目是否可编辑，多选时有效                                                                                                                                                                                                  | Boolean                                                                                       | true                   |
| esc                      | 是否开启按 ESC 键关闭弹层                                                                                                                                                                                                         | Boolean                                                                                       | true                   |
| filterTreeNode           | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值                                                                                                                                              | (inputValue: String, treeNode: TreeNode) => Boolean                                           | -                      |
| getPopupContainer        | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。                                                                                                                              | (triggerNode: TreeNode) => HTMLElement                                                        | () => document.body    |
| icon                     | 自定义所有子节点 title 前的图标。可接收组件，props 为当前树的 props。若某子节点上同时自定义了图标，则被其覆盖。`showIcon` 为 true 时有效。                                                                                        | ReactNode \| (props) => ReactNode                                                             | -                      |
| loadData                 | 异步加载数据，返回值应该是一个 promise                                                                                                                                                                                            | (treeNode: TreeNode) => Void                                                                  | -                      |
| loading                  | 是否显示 loading 状态。可以配合实现后端搜索。                                                                                                                                                                                     | Boolean                                                                                       | false                  |
| multiple                 | 支持多选（当设置 treeCheckable 时自动变为 true）                                                                                                                                                                                  | Boolean                                                                                       | false                  |
| notFoundContent          | 当下拉列表为空时显示的内容                                                                                                                                                                                                        | String \| ReactNode                                                                           | '无匹配结果'           |
| onCancel                 | 取消选中树节点时调用此函数，参数 value 为原始选中的条目                                                                                                                                                                           | (value) => Void                                                                               | -                      |
| onChange                 | 选中的树节点改变时调用此函数。函数参数 value 为已选择的树节点值或值的列表，infoList 为已选择的树节点对象的列表，extra 为额外的相关信息                                                                                            | (value, infoList, extra) => Void                                                              | -                      |
| onConfirm                | 确认选中树节点时调用此函数。函数参数 valueList 为已选择的树节点值的列表，infoList 为已选择的树节点对象的列表，extra 为额外的相关信息                                                                                              | (valueList, infoList, extra) => Void                                                          | -                      |
| onExpand                 | 展开或收起树节点时调用此函数。函数参数 expandedKeyList 为当前展开的树节点值的列表，extra 为额外的相关信息                                                                                                                         | (expandedKeyList, extra) => Void                                                              | -                      |
| onReset                  | 点击复位选项时调用，单选时有效                                                                                                                                                                                                    | () => Void                                                                                    | -                      |
| onSearch                 | 搜索框值变化时调用。可以配合实现后端搜索。                                                                                                                                                                                        | (value: String) => Void                                                                       | -                      |
| onSelect                 | 选中某一选项时调用。函数参数 value 为选中的树节点值，valueList 为已选择的树节点值的列表，infoList 为已选择的树节点对象的列表，extra 为额外的相关信息                                                                              | (value, valueList, infoList, extra) => Void                                                   | -                      |
| placeholder              | 选择框默认提示文字                                                                                                                                                                                                                | String                                                                                        | '请选择'               |
| placement                | 下拉菜单弹出的位置                                                                                                                                                                                                                | Enum {'bottomLeft', 'bottomCenter', 'bottomRight','topLeft','topCenter', 'topRight'}          | 'bottomLeft'           |
| required                 | 是否设置为必选。<br/>在单选模式下设置为 true 后，隐藏复位选项；<br/>在可编辑多选模式下设置为 true 后，禁止关闭最后一个 tag，且当前选择项为空时禁用确认按钮；<br/>不可编辑多选模式下设置为 true 后，当前选择项为空时禁用确认按钮。 | Boolean                                                                                       | false                  |
| searchPlaceholder        | 搜索框默认文字                                                                                                                                                                                                                    | String                                                                                        | '请输入关键字'         |
| showCheckedStrategy      | 定义选中项回填的方式。<br/>TreeSelect.SHOW_ALL：显示所有选中节点（包括父节点）<br/>TreeSelect.SHOW_PARENT：当父节点下所有子节点都选中时，只显示父节点<br/>TreeSelect.SHOW_CHILD：只显示子节点                                     | Enum {TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }                    | TreeSelect.SHOW_PARENT |
| showIcon                 | 是否展示 TreeNode title 前的图标，无默认图标，若设置为 true，则需要自定义图标相关样式                                                                                                                                             | Boolean                                                                                       | false                  |
| showSearch               | 是否在下拉中显示搜索框。默认提供实时前端搜索，可以配合 `onSearch` 实现后端搜索。                                                                                                                                                  | Boolean                                                                                       | false                  |
| size                     | 选择框大小                                                                                                                                                                                                                        | Enum {'default', 'large', 'small'}                                                            | 'default'              |
| style                    | 选择框的样式                                                                                                                                                                                                                      | Object                                                                                        | -                      |
| tagWidth                 | 标签的固定宽度，不能超过选择框的宽度，多选时有效                                                                                                                                                                                  | Number                                                                                        | 100                    |
| treeCheckable            | 显示 checkbox                                                                                                                                                                                                                     | Boolean                                                                                       | false                  |
| treeCheckType            | 父子节点联动类型，可选择`countDown`，可以让联动变成单向，父节点选中时，默认选中所有子节点，子节点全部选中时，不会选中父节点                                                                                                       | String                                                                                        | -                      |
| treeData                 | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点。treeData 中 value 必须设置，且其值需在整个树范围内唯一；key 可选，未设置时取 value 的值。                                                                                 | Array< {value, title, [children, key, icon, disabled, disableCheckbox, selectable, isLeaf]} > | []                     |
| treeDefaultExpandAll     | 默认展开所有树节点                                                                                                                                                                                                                | Boolean                                                                                       | false                  |
| treeDefaultExpandedKeys  | 默认展开的树节点                                                                                                                                                                                                                  | Array                                                                                         | []                     |
| treeNodeFilterProp       | 输入项过滤对应的 treeNode 属性                                                                                                                                                                                                    | String                                                                                        | 'title'                |
| treeNodeLabelProp        | 选中后在选择框中显示的 treeNode 属性                                                                                                                                                                                              | String                                                                                        | 'title'                |
| treeNodeResetTitle       | 复位选项的默认文字，单选时有效                                                                                                                                                                                                    | String                                                                                        | '不选择任何分类'       |
| uniqueTreeNodeByLabel    | 是否对选择框中展示的树节点以 Label 去重， `editable` 为 false 时有效                                                                                                                                                              | Boolean                                                                                       | false                  |
| value                    | 受控属性，指定当前选中的树节点                                                                                                                                                                                                    | String \| Array< String >                                                                     | -                      |

### Tree 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### TreeNode props

> 建议使用 treeData 来代替 TreeNode，免去手工构造麻烦

| 参数            | 说明                                                                                                           | 类型                              | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------ |
| checkable       | 当树为 checkable 时，设置独立节点是否展示 Checkbox，默认值继承自 treeCheckable 属性                            | Boolean                           | -      |
| disableCheckbox | 禁掉 checkbox                                                                                                  | Boolean                           | false  |
| disabled        | 是否禁用                                                                                                       | Boolean                           | false  |
| icon            | 自定义当前节点 title 前的图标。可接收组件，props 为当前节点的 props。Tree props 中 `showIcon` 为 true 时有效。 | ReactNode \| (props) => ReactNode | -      |
| isLeaf          | 是否是叶子节点                                                                                                 | Boolean                           | false  |
| key             | 此项必须设置，且其值需在整个树范围内唯一                                                                       | String                            | -      |
| title           | 树节点显示的内容，默认根据此属性值进行筛选                                                                     | String \| ReactNode               | '---'  |
| value           | 此项必须设置，且其值需在整个树范围内唯一                                                                       | String                            | -      |
