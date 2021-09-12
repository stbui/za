# Checkbox 复选框

复选框表单域, 用于备选项数目不是太多且需要多选的场景。

## Installation

```sh
npm install @stbui/za-checkbox
```

## Usage

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 禁用状态

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox disabled>Checkbox</Checkbox>;
```

## 中间状态

## API

| 参数名         | 说明 | 必填 | 类型 | 默认值 | 备注 |
| -------------- | ---- | ---- | ---- | ------ | ---- |
| checked        |      |      |      |        |      |
| defaultChecked |      |      |      |        |      |
| disabled       |      |      |      |        |      |
| onChange       |      |      |      |        |      |
