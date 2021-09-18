# Switch 开关

功能的开关组件。

## 何时使用

-   适用于在开关状态，或两个互斥状态中进行切换。切换的结果会即时作用于页面。
-   和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 安装

```sh
npm install @stbui/za-switch
```

## 使用

表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。

### 基本

```tsx
import React from 'react';
import Switch from '@stbui/za-switch';

export default () => (
    <>
        <Switch>开关</Switch>
        <Switch checked>开关</Switch>
    </>
);
```

### 不可用

Switch 失效状态。

```tsx
import React from 'react';
import Switch from '@stbui/za-switch';

export default () => (
    <>
        <Switch disabled>开关</Switch>
    </>
);
```

### 文字和图标

带有文字说明和图标

```tsx
import React from 'react';
import Switch from '@stbui/za-switch';

export default () => (
    <>
        <Switch checkedChildren="on" unCheckedChildren="off" />
        <br />
        <br />
        <Switch checkedChildren="已启用" unCheckedChildren="已关闭" />
    </>
);
```

## API

| 参数              | 说明               | 类型                               | 默认值    |
| ----------------- | ------------------ | ---------------------------------- | --------- |
| autoFocus         | 组件自动获取焦点   | Boolean                            | false     |
| checked           | 指定当前是否选中   | Boolean                            | false     |
| checkedChildren   | 选中时的内容       | String \| ReactNode                | -         |
| className         | 选择器的 className | String                             | -         |
| defaultChecked    | 初始是否选中       | Boolean                            | false     |
| disabled          | 是否禁用           | Boolean                            | false     |
| loading           | 加载中的开关       | Boolean                            | false     |
| onChange          | 变化时回调函数     | (checked:Boolean) => Void          | -         |
| size              | 开关大小           | Enum {'default', 'small', 'large'} | 'default' |
| unCheckedChildren | 非选中时的内容     | String \| ReactNode                | -         |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
