# Steps 步骤条

引导用户按照流程完成任务的导航条。当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## Installation

```sh
npm install @stbui/za-steps
```

## 基本用法

```jsx
import Steps from '@stbui/za-steps';
```

## 迷你版

## 带图标的步骤条

## 步骤切换

## 竖直方向的步骤条

## 竖直方向的小型步骤条

## 步骤运行错误

## 点状步骤条

## 自定义点状步骤条

### Steps

整体步骤条。

| 参数        | 说明 | 类型                                        | 默认值       |
| ----------- | ---- | ------------------------------------------- | ------------ |
| current     |      | Number                                      | 0            |
| direction   |      | Enum {'horizontal', 'vertical'}             | 'horizontal' |
| progressDot |      | Boolean                                     |              |
| size        |      | Enum {'default', 'small'}                   | 'default'    |
| status      |      | Enum {'wait', 'process', 'finish', 'error'} | 'process'    |

### Steps.Step

步骤条内的每一个步骤。

| 参数        | 说明                 | 类型                                        | 默认值 |
| ----------- | -------------------- | ------------------------------------------- | ------ |
| description | 步骤的详情描述，可选 | String \| ReactNode                         | -      |
| icon        | 步骤图标的类型，可选 | String \| ReactNode                         | -      |
| status      |                      | Enum {'wait', 'process', 'finish', 'error'} | 'wait' |
| title       | 标题                 | String \| ReactNode                         | -      |
