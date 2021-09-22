# Tree 树形控件

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## Installation

```sh
npm install @stbui/za-tree
```

## Usage

```tsx
import React from 'react';
import Tree, { TreeNode } from '@stbui/za-tree';

export default () => {
    return (
        <Tree>
            <TreeNode title="1" key="0-0"></TreeNode>
            <TreeNode title="2" key="0-1"></TreeNode>
            <TreeNode title="3" key="0-2"></TreeNode>
            <TreeNode title="4" key="0-3">
                <TreeNode title="41" key="0-0-1"></TreeNode>
                <TreeNode title="42" key="0-0-2"></TreeNode>
            </TreeNode>
        </Tree>
    );
};
```

## API

### Tree props

| 参数                | 说明                                                                                                                                                                                                                                                | 类型                                                                             | 默认值 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------ |
| autoExpandParent    | 是否自动展开父节点                                                                                                                                                                                                                                  | Boolean                                                                          | true   |
| checkable           | 节点前添加 Checkbox 复选框                                                                                                                                                                                                                          | Boolean                                                                          | false  |
| checkedKeys         | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | Array< String > \| {checked: Array< String >, halfChecked: Array< String >}      | []     |
| checkStrictly       | checkable 状态下节点选择完全受控（父子节点选中状态不再关联）                                                                                                                                                                                        | Boolean                                                                          | false  |
| checkType           | 父子节点联动类型，可选择`countDown`，可以让联动变成单向，父节点选中时，默认选中所有子节点，子节点全部选中时，不会选中父节点                                                                                                                         | String                                                                           | -      |
| className           | 容器类名                                                                                                                                                                                                                                            | String                                                                           | -      |
| defaultCheckedKeys  | 默认选中复选框的树节点                                                                                                                                                                                                                              | Array< String >                                                                  | []     |
| defaultExpandAll    | 默认展开所有树节点                                                                                                                                                                                                                                  | Boolean                                                                          | false  |
| defaultExpandedKeys | 默认展开指定的树节点                                                                                                                                                                                                                                | Array< String >                                                                  | []     |
| defaultExpandParent | 默认展开父节点                                                                                                                                                                                                                                      | Boolean                                                                          | true   |
| defaultSelectedKeys | 默认选中的树节点                                                                                                                                                                                                                                    | Array< String >                                                                  | []     |
| disabled            | 将树禁用                                                                                                                                                                                                                                            | Boolean                                                                          | false  |
| draggable           | 设置节点可拖拽（IE8+）                                                                                                                                                                                                                              | Boolean                                                                          | false  |
| expandAll           | （受控）是否展开所有的树节点                                                                                                                                                                                                                        | Boolean                                                                          | false  |
| expandedKeys        | （受控）展开指定的树节点                                                                                                                                                                                                                            | Array< String >                                                                  | []     |
| filterTreeNode      | 按需筛选树节点（高亮），返回 true                                                                                                                                                                                                                   | (node) => Boolean                                                                | -      |
| icon                | 自定义所有子节点的图标。可接收组件，props 为当前树的 props。若某子节点上同时自定义了图标，则被其覆盖。                                                                                                                                              | ReactNode \| (props) => ReactNode                                                | -      |
| loadData            | 异步加载数据                                                                                                                                                                                                                                        | (node) => Void                                                                   | -      |
| loadedKeys          | （受控）已经加载的节点，需要配合 `loadData` 使用                                                                                                                                                                                                    | Array< String >                                                                  | []     |
| multiple            | 支持点选多个节点（节点本身）                                                                                                                                                                                                                        | Boolean                                                                          | false  |
| onCheck             | 点击复选框触发                                                                                                                                                                                                                                      | (checkedKeys, e:{checked: Boolean, checkedNodes, node, event}) => Void           | -      |
| onDragEnd           | dragend 触发时调用                                                                                                                                                                                                                                  | ({event, node}) => Void                                                          | -      |
| onDragEnter         | dragenter 触发时调用                                                                                                                                                                                                                                | ({event, node, expandedKeys}) => Void                                            | -      |
| onDragLeave         | dragleave 触发时调用                                                                                                                                                                                                                                | ({event, node}) => Void                                                          | -      |
| onDragOver          | dragover 触发时调用                                                                                                                                                                                                                                 | ({event, node}) => Void                                                          | -      |
| onDragStart         | 开始拖拽时调用                                                                                                                                                                                                                                      | ({event, node}) => Void                                                          | -      |
| onDrop              | drop 触发时调用                                                                                                                                                                                                                                     | ({event, node, dragNode, dragNodesKeys}) => Void                                 | -      |
| onExpand            | 展开/收起节点时触发                                                                                                                                                                                                                                 | (expandedKeys, {expanded: Boolean, node}) => Void                                | -      |
| onLoad              | 节点加载完毕时触发                                                                                                                                                                                                                                  | (loadedKeys, {event, node}) => Void                                              | -      |
| onRightClick        | 响应右键点击                                                                                                                                                                                                                                        | ({event, node}) => Void                                                          | -      |
| onSelect            | 点击树节点触发                                                                                                                                                                                                                                      | (selectedKeys, e:{selected: Boolean, selectedNodes, node, event}) => Void        | -      |
| required            | 是否必选，单选时有效                                                                                                                                                                                                                                | Boolean                                                                          | false  |
| selectedKeys        | （受控）设置选中的树节点                                                                                                                                                                                                                            | Array< String >                                                                  | -      |
| showIcon            | 是否展示 TreeNode title 前的图标，无默认图标，若设置为 true，则需要自定义图标相关样式。特殊情况：Tree.DirectoryTree 的 `showIcon` 默认为 true，默认显示的图标为文件夹和文件。                                                                       | Boolean                                                                          | false  |
| showLine            | 是否展示连接线                                                                                                                                                                                                                                      | Boolean                                                                          | false  |
| style               | 容器样式                                                                                                                                                                                                                                            | Object                                                                           | -      |
| treeData            | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点。treeData 中 key 必须设置，且其值需在整个树范围内唯一。                                                                                                                                      | Array< {key, title, [children, disabled, disableCheckbox, selectable, isLeaf]} > | []     |

### TreeNode props

| 参数            | 说明                                                                                                                                  | 类型                              | 默认值               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | -------------------- |
| checkable       | 当树为 checkable 时，设置独立节点是否展示 Checkbox，默认值继承自 checkable 属性                                                       | Boolean                           | -                    |
| disableCheckbox | 禁掉 checkbox                                                                                                                         | Boolean                           | false                |
| disabled        | 禁掉响应                                                                                                                              | Boolean                           | false                |
| icon            | 自定义当前节点 title 前的图标。可接收组件，props 为当前节点的 props                                                                   | ReactNode \| (props) => ReactNode | -                    |
| isLeaf          | 设置为叶子节点(设置了`loadData`时有效)                                                                                                | Boolean                           | false                |
| key             | 被树的 (default)ExpandedKeys \| (default)CheckedKeys \| (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复 | String                            | 内部计算出的节点位置 |
| selectable      | 设置节点是否可被选中                                                                                                                  | Boolean                           | true                 |
| title           | 标题                                                                                                                                  | String \| ReactNode               | '---'                |

### DirectoryTree props

| 参数         | 说明         | 类型                                 | 默认值  |
| ------------ | ------------ | ------------------------------------ | ------- |
| expandAction | 目录展开逻辑 | Enum {false, 'click', 'doubleClick'} | 'click' |

### 注意

树节点可以有很多，在设置`checkable`时，将会花费更多的计算时间，因此我们缓存了一些计算结果（`this.treeNodesStates`）避免多次重复计算，以此提高性能。但这也带来了一些限制，当你异步加载树节点时，你需要这样渲染树：

```js
{
    this.state.treeData.length ? (
        <Tree>
            {this.state.treeData.map(data => (
                <TreeNode />
            ))}
        </Tree>
    ) : (
        'loading tree'
    );
}
```
