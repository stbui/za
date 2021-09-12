# Switch 开关

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
