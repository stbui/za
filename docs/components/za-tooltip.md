# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## API

| 参数  | 说明     | 类型                | 默认值          |
| ----- | -------- | ------------------- | --------------- | --- |
| title | 提示文字 | String \| ReactNode | () => ReactNode | -   |

### 公共 API

以下 API 为 Tooltip、Popover 共享的 API。

| 参数               | 说明                                       | 类型                                                                                                                                            | 默认值              |
| ------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| arrowPointAtCenter | 箭头是否指向目标元素中心                   | Boolean                                                                                                                                         | false               |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置                   | Boolean                                                                                                                                         | true                |
| defaultVisible     | 默认是否显隐                               | Boolean                                                                                                                                         | false               |
| getPopupContainer  | 浮层渲染父节点，默认渲染到 body 上。       | (triggerNode) => ReactNode \| HTMLElement                                                                                                       | () => document.body |
| mouseEnterDelay    | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | Number                                                                                                                                          | 0                   |
| mouseLeaveDelay    | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | Number                                                                                                                                          | 0.1                 |
| onVisibleChange    | 显示隐藏的回调                             | (visible) => Void                                                                                                                               | -                   |
| overlayClassName   | 卡片类名                                   | String                                                                                                                                          | -                   |
| overlayStyle       | 卡片样式                                   | Object                                                                                                                                          | -                   |
| placement          | 气泡框位置                                 | Enum {'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'} | top                 |
| trigger            | 触发行为                                   | Enum {'hover', 'focus', 'contextMenu'}                                                                                                          | 'hover'             |
| visible            | 用于手动控制浮层显隐                       | Boolean                                                                                                                                         | false               |

### 注意

请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
