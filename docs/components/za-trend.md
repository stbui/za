# Trend 趋势标记

趋势符号，标记上升和下降趋势。

## 何时使用

用于标记上升和下降趋势，通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外。

## 基本使用

## Installation

```sh
npm install @stbui/za-alert
```

## Usage

```jsx
import Alert from '@stbui/za-alert';

function Example() {
    return (
        <>
            <Alert>Alert</Alert>
        </>
    );
}
```

## API

| 参数         | 说明             | 类型                              | 默认值  |
| ------------ | ---------------- | --------------------------------- | ------- |
| className    | 容器类名         | String                            | -       |
| colorful     | 是否使用彩色标记 | Boolean                           | true    |
| flag         | 上升或下降的标识 | Enum {'up', 'down'}               | -       |
| reverseColor | 颜色反转         | Boolean                           | false   |
| size         | 标识的大小       | Enum {'small', 'normal', 'large'} | 'small' |
| style        | 容器样式         | Object                            | -       |
| value        | 上升或下降的值   | String                            | -       |
