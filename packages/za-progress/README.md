# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

-   当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
-   当需要显示一个操作完成的百分比时。

## Installation

```sh
npm install @stbui/za-progress
```

## Usage

```jsx
import React from 'react';
import Progress from '@stbui/za-progress';

export default () => <Progress value={20}>20</Progress>;
```

## API

| 属性                         | 说明                                                   | 类型                                      | 默认值                     |
| ---------------------------- | ------------------------------------------------------ | ----------------------------------------- | -------------------------- |
| className                    | 容器类名                                               | String                                    | -                          |
| extraContent                 | 进度条末端额外的元素，`type="line"` 时有效             | ReactNode                                 | -                          |
| format                       | 内容的模板函数                                         | (percent, successPercent) => Void         | `percent => percent + '%'` |
| gapDegree                    | 进度圈缺口角度，可取值 0 ~ 360，`type="circle"` 时有效 | Number                                    | 0                          |
| gapPosition                  | 进度圈缺口位置，`type="circle"` 时有效                 | Enum { 'top', 'bottom', 'left', 'right' } | 'top'                      |
| message                      | 进度条的辅助信息                                       | String                                    | -                          |
| operation(`type="circle"`)   | 进度圈下方额外的元素                                   | ReactNode                                 | -                          |
| operation(`type="line"`)     | 进度条右侧额外的元素                                   | ReactNode                                 | -                          |
| percent                      | 百分比                                                 | Number                                    | 0                          |
| showInfo                     | 是否显示进度数值或状态图标                             | Boolean                                   | true                       |
| status                       | 状态                                                   | Enum { 'success', 'exception', 'active' } | -                          |
| strokeWidth(`type="circle"`) | 进度圈线的宽度，单位是进度条画布宽度的百分比           | Number                                    | 6                          |
| strokeWidth(`type="line"`)   | `type="line"` 时为进度条线的宽度，单位 px              | Number                                    | 10                         |
| style                        | 容器样式                                               | Object                                    | -                          |
| successPercent               | 已完成的分段百分比，`type="line"` 时有效               | Number                                    | 0                          |
| type                         | 类型                                                   | Enum { 'line', 'circle', 'dashboard' }    | 'line'                     |
| width                        | 进度圈的画布宽度，单位 px，`type="circle"` 时有效      | Number                                    | 132                        |
