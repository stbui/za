# Radio 单选框

##何时使用

-   用于在多个备选项中选中单个状态。
-   和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## Installation

```sh
npm install @stbui/za-radio
```

## 基本

适用广泛的基础最简单的用法，展示各种状态下的样式。

```jsx
import React from 'react';
import Radio from '@stbui/za-radio';

export default () => (
    <>
        <Radio value="1">Radio</Radio>
        <Radio value="2" checked>
            选中
        </Radio>
        <Radio value="3" disabled>
            禁用
        </Radio>
        <Radio value="4" checked disabled>
            选中并禁用
        </Radio>
    </>
);
```

```jsx
import React from 'react';
import Radio from '@stbui/za-radio';

export default () => (
    <Radio.Group defaultValue={1}>
        <Radio value={1}>Radio 1</Radio>
        <Radio value={2}>Radio 2</Radio>
        <Radio value={3}>Radio 3</Radio>
    </Radio.Group>
);
```

## 不可用

## 单选组合

## 单选组合 - 配合 name 使用

## RadioGroup 垂直

## RadioGroup 组合 - 配置方式

## 按钮样式

## 按钮样式三种大小

## API

## Radio

| 参数     | 说明                              | 类型                  | 默认值  |
| -------- | --------------------------------- | --------------------- | ------- |
| value    | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | -       |
| name     | 用于表单对应的名称                | String                | -       |
| checked  | Radio 是否被选中                  | Boolean               | `false` |
| disabled | 是否禁用                          | Boolean               | `false` |
| onChange | 数值改变时的回调，返回当前值      | Funtcion(e:Even)      | -       |

## RadioGroup

| 参数     | 说明                              | 类型                  | 默认值 |
| -------- | --------------------------------- | --------------------- | ------ |
| value    | 根据 value 进行比较，判断是否选中 | String/Number/Boolean | -      |
| name     | 用于表单对应的名称                | String                | -      |
| onChange | 数值改变时的回调，返回当前值      | Funtcion(e:Even)      | -      |
