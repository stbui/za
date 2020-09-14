# 按钮 ActionButtons

## 交互规范

## Installation

```sh
npm install @stbui/za-action-buttons
```

## Usage

```tsx
import React from 'react';
import ActionButtons from '@stbui/za-action-buttons';

export default () => (
    <ActionButtons style={{ color: 'white', background: 'red' }}>
        ActionButtons
    </ActionButtons>
);
```

## API

| 属性          | 说明 | 类型               | 默认值 |
| ------------- | ---- | ------------------ | ------ |
| cancelText    |      | string             |        |
| submitText    |      | string             |        |
| isLoading     |      | boolean            |        |
| onClickSubmit |      | Function           |        |
| onClickCancel |      | Function           |        |
| size          |      | small,medium,large |        |
