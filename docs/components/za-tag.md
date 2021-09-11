# Tag 标签

进行标记和分类的小标签。

## 何时使用

-   用于标记事物的属性和维度。
-   进行分类。

## Installation

```sh
npm install @stbui/za-tag
```

## 基本

```jsx
import React from 'react';
import Tag from '@stbui/za-tag';

export default () => (
    <>
        <Tag>Tag</Tag>
    </>
);
```

## 自定义标签颜色

## 动态添加和删除

## 可选择

## API

### Tag

| 参数          | 说明                                                                           | 类型        | 默认值 |
| ------------- | ------------------------------------------------------------------------------ | ----------- | ------ |
| afterClose    | 关闭动画完成后的回调                                                           | () => Void  | -      |
| autoShowClose | 标签可关闭时，是否自动展示关闭按钮。设置为 false 时，需 hover 到标签上才展示。 | Boolean     | true   |
| className     | 容器类名                                                                       | String      | -      |
| closable      | 标签是否可以关闭                                                               | Boolean     | false  |
| color         | 标签色                                                                         | String      | -      |
| onClose       | 关闭时的回调                                                                   | (e) => Void | -      |
| style         | 自定义内联样式                                                                 | Object      | -      |
| visible       | 是否显示标签                                                                   | Boolean     | true   |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | Boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => Void | -      |
