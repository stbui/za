# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 基本用法

```tsx
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
);
```

## 迷你版

```tsx
/**
 * desc: 迷你版的步骤条，通过设置 `<Steps size="small">` 启用
 */
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps size="small" current={1}>
        <Steps.Step title="Finished" />
        <Steps.Step title="In Progress" />
        <Steps.Step title="Waiting" />
    </Steps>
);
```

## 带图标的步骤条

```ts
/**
 * desc: 通过设置 Steps.Step 的 `icon` 属性，可以启用自定义图标。
 */
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps>
        <Steps.Step
            status="finish"
            title="Finished"
            icon={<IconPlay className="img-icon-14 fishdicon" />}
        />
        <Steps.Step
            status="finish"
            title="Finished"
            icon={<IconTrash className="img-icon-14 fishdicon" />}
        />
        <Steps.Step
            status="process"
            title="In Progress"
            icon={<IconPie className="img-icon-14 fishdicon" />}
        />
        <Steps.Step
            status="wait"
            title="Waiting"
            icon={<IconNote className="img-icon-14 fishdicon" />}
        />
    </Steps>
);
```

## 步骤切换

:::demo 通常配合内容及按钮使用，表示一个流程的处理进度。

```js
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  handleItemChange(index){
    this.setState({ current:index });
  };
  render() {
    const { current } = this.state;
    const Step = Steps.Step;

    const steps = [{
      title: 'First',
      content: 'First-content',
    }, {
      title: 'Second',
      content: 'Second-content',
    }, {
      title: 'Last',
      content: 'Last-content',
    }];
    return (
      <div>
        <Steps current={current} className="demo-step">
          {steps.map((item,i) => <Step key={item.title} title={item.title} onClick={this.handleItemChange.bind(this,i)}/>)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
            )
          }
        </div>
      </div>
    );
  }
```

## 竖直方向的步骤条

```tsx
/**
 * desc: 简单的竖直方向的步骤条。
 */
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps direction="vertical" current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
);
```

## 竖直方向的小型步骤条

```tsx
/**
 * desc:  简单的竖直方向的小型步骤条。
 */
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps direction="vertical" size="small" current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
);
```

## 步骤运行错误

```tsx
/**
 * desc: 使用 Steps 的 `status` 属性来指定当前步骤的状态。
 */
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps current={1} status="error">
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
);
```

## 点状步骤条

```tsx
/**
 * desc: 包含步骤点的进度条。
 */
import React from 'react';
import Steps from '@stbui/za-steps';

export default () => (
    <Steps progressDot current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
);
```

## 自定义点状步骤条

```ts
/**
 * desc: 为点状步骤条增加自定义展示。
 */
import React from 'react';
import Steps from '@stbui/za-steps';

const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

export default () => (
    <Steps progressDot={customDot} current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="In Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
    </Steps>
);
```

## API

### Steps

整体步骤条。

| 参数        | 说明                                                                          | 类型    | 默认值       |
| ----------- | ----------------------------------------------------------------------------- | ------- | ------------ |
| current     | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | Number  |
| direction   | 指定步骤条方向。                                                              |         | 'horizontal' |
| progressDot | 点状步骤条                                                                    | Boolean |              |
| size        | 指定大小                                                                      |         | 'default'    |
| status      | 指定当前步骤的状态                                                            |         | 'process'    |

### Steps.Step

步骤条内的每一个步骤。

| 参数        | 说明                 | 类型                                        | 默认值 |
| ----------- | -------------------- | ------------------------------------------- | ------ |
| description | 步骤的详情描述，可选 | String \| ReactNode                         | -      |
| icon        | 步骤图标的类型，可选 | String \| ReactNode                         | -      |
| status      | 指定状态。           | Enum {'wait', 'process', 'finish', 'error'} | 'wait' |
| title       | 标题                 | String \| ReactNode                         | -      |
