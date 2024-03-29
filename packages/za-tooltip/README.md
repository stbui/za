# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## 基本

```tsx
import React from 'react';
import Tooltip from '@stbui/za-tooltip';

export default () => {
    return (
        <Tooltip title="prompt text">
            <span>Tooltip will show when mouse enter.</span>
        </Tooltip>
    );
};
```

## 箭头指向

```tsx
/**
 * desc: 设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。
 */
import React from 'react';
import Tooltip from '@stbui/za-tooltip';
import Button from '@stbui/za-button';

export default () => {
    return (
        <div>
            <Tooltip placement="topLeft" title="Prompt Text">
                <Button>Align edge / 边缘对齐</Button>
            </Tooltip>
            <span style={{ padding: 10 }} />
            <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
                <Button>Arrow points to center / 箭头指向中心</Button>
            </Tooltip>
        </div>
    );
};
```

## 位置

位置有 12 个方向。

```js
render(){
	const text = <span>prompt text</span>;
	const buttonWidth = 70;
	return (
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
	</div>
	)
  }
```

## API

| 参数  | 说明     | 类型                | 默认值          |
| ----- | -------- | ------------------- | --------------- |
| title | 提示文字 | String \| ReactNode | () => ReactNode |

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
