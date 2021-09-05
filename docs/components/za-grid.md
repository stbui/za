# Grid 栅格系统

24 栅格系统。

## 设计理念

在多数业务情况下，需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

-   通过`row`在水平方向建立一组`column`（简写 col）
-   你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
-   栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用`.col-8`来创建
-   如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。

## 基本使用

```tsx
/**
 * desc: 从堆叠到水平排列。使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。
 */
import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';
import { Row, Col } from '@stbui/za-grid';

const DemoStyle = styled.div`
    .za-col {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
        padding: 16px 0;

        background: ${themes.default.primary};

        &:nth-child(odd) {
            background: rgba(0, 160, 233, 0.7);
        }
    }
`;

export default () => (
    <DemoStyle>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
        <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
        </Row>
        <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
        </Row>
    </DemoStyle>
);
```

## 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。(n 是自然数)

```tsx
import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';
import { Row, Col } from '@stbui/za-grid';

const DemoStyle = styled.div`
    text-align: center;
    height: 30px;
    color: #fff;

    background: ${themes.default.primary};
`;

export default () => (
    <Row gutter={16}>
        <Col span={6}>
            <DemoStyle>col-6</DemoStyle>
        </Col>
        <Col span={6}>
            <DemoStyle>col-6</DemoStyle>
        </Col>
        <Col span={6}>
            <DemoStyle>col-6</DemoStyle>
        </Col>
        <Col span={6}>
            <DemoStyle>col-6</DemoStyle>
        </Col>
    </Row>
);
```

## 左右偏移

```tsx
/**
 * title: 列偏移
 * desc: 使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。
 */
import React from 'react';
import styled from 'styled-components';
import { themes } from '@stbui/za-theme';
import { Row, Col } from '@stbui/za-grid';

const DemoStyle = styled.div`
    .za-col {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
        padding: 16px 0;

        background: ${themes.default.primary};

        &:nth-child(odd) {
            background: rgba(0, 160, 233, 0.7);
        }
    }
`;

export default () => (
    <DemoStyle>
        <Row>
            <Col span={8}>col-8</Col>
            <Col span={8} offset={8}>
                col-8
            </Col>
        </Row>
        <Row>
            <Col span={6} offset={6}>
                col-6 col-offset-6
            </Col>
            <Col span={6} offset={6}>
                col-6 col-offset-6
            </Col>
        </Row>
        <Row>
            <Col span={12} offset={6}>
                col-12 col-offset-6
            </Col>
        </Row>
    </DemoStyle>
);
```

## 列排序

```tsx
/**
 * title: 列排序
 * desc: 通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。
 */
import React from 'react';
import { Row, Col } from '@stbui/za-grid';

export default () => (
    <Row>
        <Col span={18} push={6}>
            col-18 col-push-6
        </Col>
        <Col span={6} pull={18}>
            col-6 col-pull-18
        </Col>
    </Row>
);
```

## 弹性布局-水平对齐

```tsx
/**
 * title: 弹性布局-水平对齐
 * desc: 使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
 */
import React from 'react';
import { Row, Col } from '@stbui/za-grid';

export default () => (
    <div className="grid-demo">
        <p>左边对齐-Align Left</p>
        <Row type="flex" justify="start">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>

        <p>居中对齐-Align Center</p>
        <Row type="flex" justify="center">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>

        <p>右边对齐-Align Right</p>
        <Row type="flex" justify="end">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>

        <p>等宽分布-Monospaced Arrangement</p>
        <Row type="flex" justify="space-between">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>

        <p>横向充满-Align Full</p>
        <Row type="flex" justify="space-around">
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
            <Col span={4}>col-4</Col>
        </Row>
    </div>
);
```

## 弹性布局-垂直对齐

Flex 子元素垂直对齐。

```tsx
import React from 'react';
import { Row, Col } from '@stbui/za-grid';

export default () => {
    const DemoBox = props => (
        <p className={`height-${props.value}`}>{props.children}</p>
    );

    return (
        <div className="grid-demo">
            <p>顶部对齐-Align Top</p>
            <Row type="flex" justify="center" align="top">
                <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>

            <p>居中对齐-Align Middle</p>
            <Row type="flex" justify="space-around" align="middle">
                <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>

            <p>底部对齐-Align Bottom</p>
            <Row type="flex" justify="space-between" align="bottom">
                <Col span={4}>
                    <DemoBox value={100}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={50}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={120}>col-4</DemoBox>
                </Col>
                <Col span={4}>
                    <DemoBox value={80}>col-4</DemoBox>
                </Col>
            </Row>
        </div>
    );
};
```

## API

若此布局组件不能满足你的需求，你也可以直接使用社区的优秀布局组件：

-   [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
-   [react-blocks](http://whoisandy.github.io/react-blocks/)

### Row

| 成员    | 说明                      | 类型                                                              | 默认值  |
| ------- | ------------------------- | ----------------------------------------------------------------- | ------- |
| align   | flex 布局下的垂直对齐方式 | 'top' \| 'middle' \| 'bottom'                                     | 'top'   |
| gutter  | 栅格间隔                  |                                                                   |         |
| justify | flex 布局下的水平排列方式 | 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' | 'start' |

### Col

| 成员   | 说明                                        | 类型   | 默认值 |
| ------ | ------------------------------------------- | ------ | ------ |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格      | Number | 0      |
| order  | 栅格顺序，`flex` 布局模式下有效             | Number | 0      |
| pull   | 栅格向左移动格数                            | Number | 0      |
| push   | 栅格向右移动格数                            | Number | 0      |
| span   | 栅格占位格数，为 0 时相当于 `display: none` | Number | -      |
