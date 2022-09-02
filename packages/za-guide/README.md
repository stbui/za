# Guide 引导

页面内容的引导。

## 何时使用

面向新用户或新功能的引导，使用户快速地了解页面内容。

## 基本使用

```tsx
import React from 'react';
import Guide from '@stbui/za-guide';

export default () => {
    return (
        <div className="guide-demo">
            <div className="guide-demo-cont">
                <h3 className="item guide-demo-step-alone">引导项</h3>
            </div>
            <Guide
                visible={true}
                mask={true}
                steps={[
                    {
                        element: '.guide-demo-step-alone',
                        popover: {
                            className: 'custom',
                            title: '标题',
                            description: '当前引导步骤介绍',
                        },
                    },
                ]}
            />
        </div>
    );
};
```

## 固定展示

```tsx
import React from 'react';
import Guide from '@stbui/za-guide';
import Button from '@stbui/za-button';

export default () => {
    const [visible, setVisible] = React.useState(false);

    const handleStart = () => {};

    return (
        <div className="guide-demo">
            <Button type="primary" onClick={handleStart}>
                开始引导
            </Button>
            <Guide
                className="custom-fixed-mode"
                visible={visible}
                mode="fixed"
                steps={[
                    {
                        title: '标题 1',
                        subtitle:
                            '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
                        content: (
                            <img
                                alt="图片"
                                style={{ width: '100%' }}
                                src={
                                    '//ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe'
                                }
                            />
                        ),
                    },
                    {
                        title: '标题 2',
                        content: (
                            <img
                                alt="图片"
                                style={{ width: '100%' }}
                                src={
                                    '//ysf.qiyukf.net/080b89be8a980ab9951a1b0de643d939'
                                }
                            />
                        ),
                    },
                    {
                        content: (
                            <img
                                alt="图片"
                                style={{ width: '100%' }}
                                src={
                                    '//ysf.qiyukf.net/260c0731b07b2933fe04f1a4d629450c'
                                }
                            />
                        ),
                    },
                ]}
            />
        </div>
    );
};
```

## 带计数的步骤

```tsx
import React from 'react';
import Guide from '@stbui/za-guide';
import Button from '@stbui/za-button';

export default () => {
    const [visible, setVisible] = React.useState(false);

    const handleStart = () => {};

    return (
        <div className="guide-demo">
            <Button type="primary" onClick={handleStart}>
                开始引导
            </Button>
            <div className="guide-demo-cont">
                <h3 className="item guide-demo-step1">第1步</h3>
                <h3 className="item guide-demo-step2">第2步</h3>
                <h3 className="item guide-demo-step3">第3步</h3>
                <h3 className="item guide-demo-step4">第4步</h3>
            </div>
            <Guide
                visible={visible}
                steps={[
                    {
                        element: '.guide-demo-step1',
                        popover: {
                            className: 'custom',
                            title: '第1步',
                            description: '第1步介绍',
                            position: 'bottomLeft',
                        },
                    },
                    {
                        counterPosition: 'leftBottom',
                        element: '.guide-demo-step2',
                        popover: {
                            title: '第2步',
                            description: '第2步介绍',
                            position: 'right',
                        },
                    },
                    {
                        counterPosition: 'rightTop',
                        element: '.guide-demo-step3',
                        popover: {
                            title: '第3步',
                            description: '第3步介绍',
                            position: 'left',
                        },
                    },
                    {
                        counterPosition: 'rightBottom',
                        element: '.guide-demo-step4',
                        popover: {
                            title: '第4步',
                            description: '第4步介绍',
                            position: 'top',
                        },
                    },
                ]}
            />
        </div>
    );
};
```

## API

| 属性                    | 说明                                                        | 类型                                                                                                               | 默认值   |
| :---------------------- | :---------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------- |
| allowClose              | 点击遮罩层时是否允许关闭                                    | Boolean                                                                                                            | false    |
| className（fixed 模式） | 容器类名，只在 fixed 模式有效                               | String                                                                                                             | -        |
| counter                 | 是否展示内容高亮区的步骤计数器                              | Boolean                                                                                                            | true     |
| doneBtnText             | 完成按钮的文案                                              | String                                                                                                             | '知道了' |
| keyboardControl         | 允许通过键盘控制（按 ESC 键关闭，按左右方向键切换引导步骤） | Boolean                                                                                                            | false    |
| mask                    | 是否展示遮罩层                                              | Boolean                                                                                                            | true     |
| mode                    | 引导的展示模式                                              | Enum { 'fixed', 'normal' }                                                                                         | 'normal' |
| nextBtnText             | 下一步按钮的文案                                            | String                                                                                                             | '下一步' |
| onClose                 | 关闭引导时的回调函数                                        | () => {}                                                                                                           | -        |
| prevBtnText             | 上一步按钮的文案                                            | String                                                                                                             | '上一步' |
| skipBtnText             | 跳过按钮的文案                                              | String                                                                                                             | '跳过'   |
| steps（normal 模式）    | 定义步骤，详情见下方介绍                                    | Array < Object { counterPosition: Enum, element: String, popover: Object } >                                       | -        |
| steps（fixed 模式）     | 定义步骤，详情见下方介绍                                    | Array < Object { title: String \| HTMLElement, subtitle: String \| HTMLElement, content: String \| HTMLElement } > | -        |
| style（fixed 模式）     | 容器样式，只在 fixed 模式有效                               | Object                                                                                                             | -        |
| visible                 | 是否展示引导                                                | Boolean                                                                                                            | false    |

### steps 数组内的元素（normal 模式）

| 属性            | 说明                              | 类型                                                                                                         | 默认值    |
| :-------------- | :-------------------------------- | :----------------------------------------------------------------------------------------------------------- | :-------- |
| counterPosition | 步骤计数器的位置                  | Enum {'leftTop', 'leftBottom', 'rightTop', 'rightBottom'}                                                    | 'leftTop' |
| element         | 要高亮的元素或该元素的 CSS 选择器 | HTMLElement \| String                                                                                        | -         |
| popover         | 步骤弹层容器设置，详情见下方介绍  | Object { className: String, description: String \| HTMLString, position: Enum, title: String \| HTMLString } | -         |

### steps 数组内元素的 popover（normal 模式）

| 属性        | 说明               | 类型                                                                                                                                            | 默认值       |
| :---------- | :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| className   | 步骤弹层容器的类名 | String                                                                                                                                          | -            |
| description | 步骤的介绍         | String \| HTMLString                                                                                                                            | -            |
| position    | 步骤弹层的位置     | Enum {'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'} | 'bottomLeft' |
| title       | 步骤的标题         | String \| HTMLString                                                                                                                            | -            |

### steps 数组内的元素（fixed 模式）

| 属性     | 说明                               | 类型                  | 默认值 |
| :------- | :--------------------------------- | :-------------------- | :----- |
| content  | 步骤的内容                         | String \| HTMLElement | -      |
| subtitle | 步骤的子标题                       | String \| HTMLElement | -      |
| title    | 步骤的标题，值为 null 时不展示标题 | String \| HTMLElement | null   |

<style>
.guide-demo {
  position: relative;
}

.guide-demo-cont {
  width: 100%;
  height: 500px;
  margin-top: 40px;
}

.guide-demo-cont .item {
  width: 60px;
  height: 24px;
  text-align: center;
  margin: auto;
}

.guide-demo-step-alone {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateY(-50%);
}

.guide-demo-step1 {
  top: 0;
  left: 0;
  right: 0;
}

.guide-demo-step2 {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transform: translateY(-50%);
}

.guide-demo-step3 {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateY(-50%);
}

.guide-demo-step4 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
