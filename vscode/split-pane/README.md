---
title: split-pane
order: 1
group:
    path: /
nav:
    title: 组件
    path: /vscode
---

# split-pane

```tsx
import React from 'react';
import SplitPane from '@stbui/vs-split-pane';

export default () => (
    <>
        <div style={{ position: 'relative', height: 500 }}>
            <SplitPane
                split="vertical"
                minSize={50}
                maxSize={300}
                defaultSize={100}
            >
                <div>min: 50px, max: 300px</div>
                <SplitPane split="horizontal">
                    <div>default min: 50px</div>
                    <div>2</div>
                </SplitPane>
            </SplitPane>
        </div>
    </>
);
```

# Api

| 属性                      | 类型 | 默认值 | 说明                  |
| ------------------------- | ---- | ------ | --------------------- |
| split                     |      |        | vertical \| horizontal |
| minSize                   |      |        |                       |
| maxSize                   |      |        |                       |
| defaultSize               |      |        |                       |
| onDragStart               |      |        |                       |
| onDragEnd                 |      |        |                       |
| onSecondaryPaneSizeChange |      |        |                       |
