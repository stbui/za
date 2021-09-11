# Timeline 时间轴

垂直展示的时间流信息。

## 何时使用

-   当有一系列信息需按时间排列时，可正序和倒序。
-   需要有一条时间轴进行视觉上的串联时。

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

```html
<Timeline>
    <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
    <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
    <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
    <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
</Timeline>
```

### Timeline

时间轴。

| 参数       | 说明                                           | 类型                                | 默认值                               |
| ---------- | ---------------------------------------------- | ----------------------------------- | ------------------------------------ |
| mode       | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | Enum {'left', 'alternate', 'right'} | 'left'                               |
| pending    | 指定最后一个幽灵节点是否存在或内容             | Boolean \| String \| ReactNode      | false                                |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点       | String \| ReactNode                 | `<Icon type="load-line" spinning />` |
| reverse    | 节点排序                                       | Boolean                             | false                                |

### Timeline.Item

时间轴的每一个节点。

| 参数  | 说明                                                  | 类型                | 默认值 |
| ----- | ----------------------------------------------------- | ------------------- | ------ |
| color | 指定圆圈颜色 `'blue', 'red', 'green'`，或自定义的色值 | String              | 'blue' |
| dot   | 自定义时间轴点                                        | String \| ReactNode | -      |
