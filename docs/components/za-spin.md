# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

系统与服务器交互时中间产生的等待状态，适用于短时间的交互提示。

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

| 参数             | 说明                                               | 类型                               | 默认值    |
| ---------------- | -------------------------------------------------- | ---------------------------------- | --------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）                 | Number (毫秒)                      | -         |
| indicator        | 加载指示符                                         | ReactNode                          | -         |
| size             | 组件大小，可选值为 `'small'` `'default'` `'large'` | Enum {'small', 'default', 'large'} | 'default' |
| spinning         | 是否旋转                                           | Boolean                            | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案               | String                             | -         |
| wrapperClassName | 包装器的类属性                                     | String                             | -         |

### Spin.TextLoading

提供带动效的文字加载中样式，用法:

```js
<Spin.TextLoading />
```

### Spin.Container

提供居中的容器，用法:

```js
<Spin.Container style={{ height: 540 }}>
    <Spin tip="组件正在加载..." />
</Spin.Container>
```

### 静态方法

`Spin.setDefaultIndicator(indicator: ReactNode)`
同上 `indicator`，你可以自定义全局默认元素
