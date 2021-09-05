# DatePicker 日期选择器

用于选择某个日期、日期范围、某个日期的具体时间点、日期时间点范围；多用于表单输入、筛选等场景。

## Installation

```sh
npm install @stbui/za-checkbox
```

## 日期选择器

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## 禁用

## 不可选择的日期

## 日期选择器额外的页脚

## 选择周

## 带快捷选项的日期面板

当展示结果关注绝对时间、且快捷选项较多时使用。快捷选项不建议太多。

## 带时间的日期面板

## 日期范围选择器

可在一个选择器中便捷地选择一个日期范围

## 禁用日期范围选择器

## 日期范围选择器额外的页脚

在浮层中加入额外的页脚

## 自定义日期范围组件的错误信息

-   根据不同的业务需求，可以自定义错误逻辑和信息展示，如设置最大可选的时间范围等
-   错误信息展示形式可以自定义，如 Message 或额外的页脚

## 带快捷选项的日期范围面板

## 带时间的日期范围面板

## 日期格式

-   使用 `format` 指定输入框的格式;
-   请注意大小写;

以下为可用的格式化字串，以 UTC 2018 年 1 月 2 日 03:04:05 为例：

| 格式   | 含义 | 备注                               | 举例 |
| ------ | ---- | ---------------------------------- | ---- |
| `yyyy` | 年   | -                                  | 2018 |
| `M`    | 月   | 不补 0                             | 1    |
| `MM`   | 月   | 补 0                               | 01   |
| `W`    | 周   | 仅周选择器的 `format` 可用；不补 0 | 1    |
| `WW`   | 周   | 仅周选择器的 `format` 可用         | 01   |
| `d`    | 日   | 不补 0                             | 2    |
| `dd`   | 日   | 补 0                               | 02   |
| `H`    | 小时 | 24 小时制；不补 0                  | 3    |
| `HH`   | 小时 | 24 小时制；补 0                    | 03   |
| `m`    | 分钟 | 不补 0                             | 4    |
| `mm`   | 分钟 | 补 0                               | 04   |
| `s`    | 秒   | 不补 0                             | 5    |
| `ss`   | 秒   | 补 0                               | 05   |

## API

### 公共参数

| 参数              | 说明                                                                                                 | 类型                                                                                   | 默认值             |
| ----------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------ |
| allowClear        | 是否显示清除按钮                                                                                     | Boolean                                                                                | true               |
| className         | 选择器的 className                                                                                   | String                                                                                 | -                  |
| disabled          | 是否禁用                                                                                             | Boolean                                                                                | false              |
| disabledDate      | 禁用日期                                                                                             | (Date, mode) =>Boolean                                                                 | -                  |
| esc               | 是否支持按 ESC 键关闭弹窗                                                                            | Boolean                                                                                | true               |
| firstDayOfWeek    | 周起始日                                                                                             | Enum {0,1,2,3,4,5,6}                                                                   | 0                  |
| footer            | 在面板中添加额外的页脚                                                                               | () =>ReactNode                                                                         | -                  |
| format            | 时间日期格式化, 年 `yyyy`，月 `MM`，日 `dd`，小时 `HH`，分 `mm`，秒 `ss`, 详情见 `日期格式`          | String                                                                                 | 'yyyy-MM-dd'       |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | () =>ReactNode                                                                         | () =>document.body |
| onBlur            | 失焦时的回调                                                                                         | (e) => {}                                                                              | -                  |
| onChange          | 确认选定的值时触发                                                                                   | (value) => {}                                                                          | -                  |
| onFocus           | 聚焦时的回调                                                                                         | (e) => {}                                                                              | -                  |
| onVisibleChange   | 弹出或关闭日历的回调                                                                                 | (status:Boolean) => {}                                                                 | -                  |
| placement         | 弹窗位置                                                                                             | Enum {'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'} | 'bottomLeft'       |
| shortcuts         | 快捷选项                                                                                             | {text: String, onClick: () => {}}                                                      | -                  |
| showTrigger       | 是否显示前缀图标                                                                                     | Boolean                                                                                | true               |
| style             | 选择框的样式                                                                                         | Object                                                                                 | -                  |
| yearCount         | 可选择的年份总数                                                                                     | Number                                                                                 | 50                 |

### DatePicker

| 参数        | 说明     | 类型                 | 默认值 |
| ----------- | -------- | -------------------- | ------ |
| mode        | 日期类型 | Enum {'week', 'day'} | 'day'  |
| placeholder | 占位内容 | String               | -      |
| value       | 值       | Date                 | null   |

#### DatePicker 时间面板

| 参数                | 说明                                                                                                                                                                | 类型                             | 默认值       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| defaultTimeValue    | 时间面板的默认时间                                                                                                                                                  | Date                             | -            |
| showTime            | 是否显示时间选择器                                                                                                                                                  | Boolean                          | false        |
| showTimeCurrent     | 当`timeSelectMode`模式为 "TimePicker" 时, 是否显示时间面板的"现在"快捷按钮                                                                                          | Boolean                          | false        |
| timeSelectMode      | 带时间的日期选择中，时间面板的模式                                                                                                                                  | Enum {'TimePicker','TimeSelect'} | 'TimePicker' |
| timeSelectableRange | 当`timeSelectMode`模式为 "TimePicker" 时, 时间面板的可选时间段，例如<br>`'18:30:00 - 20:30:00'`<br>或者传入数组<br>`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | String \| Array< String >        | -            |
| timeSelectModeProps | 当`timeSelectMode`模式为 "TimeSelect" 时的参数， 具体参见组件 [TimePicker.TimeSelect API](https://nsfi.github.io/ppfish-components/#/components/timePicker)         | -                                |

### DatePicker.DateRangePicker

| 参数              | 说明                                                                                                                                  | 类型                    | 默认值     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------- |
| startPlaceholder  | 开始日期的占位内容                                                                                                                    | String                  | '开始日期' |
| endPlaceholder    | 结束日期的占位内容                                                                                                                    | String                  | '结束日期' |
| onError           | 自定义日期范围选择的错误逻辑（如最大可选择的日期范围等），当返回值为`true`时，将不会收起面板；返回值为`false`时，正常收起面板         | (value) => Boolean      | -          |
| separator         | 分隔符                                                                                                                                | String                  | ' 至 '     |
| value             | 值                                                                                                                                    | Array< Date >           | null       |
| scene             | 设置日历选择场景(根据不同的业务场景设置这个值时，面板会有较好的交互体验)                                                              | Enum {'past', 'future'} | 'future'   |
| defaultPanelMonth | 默认面板的月份，与`scene`配合使用，当`scene`为'past', 这个默认面板会展示在右边面板；当`scene`为'future', 这个默认面板会展示在左边面板 | Date                    | new Date() |

#### DateRangePicker 时间面板

| 参数                     | 说明                                                                                                                          | 类型                             | 默认值       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| showTime                 | 是否显示时间选择器                                                                                                            | Boolean                          | false        |
| showTimeCurrent          | 是否显示时间面板的"现在"快捷按钮                                                                                              | Boolean                          | false        |
| defaultStartTimeValue    | 开始时间面板的默认时间                                                                                                        | Date                             | -            |
| defaultEndTimeValue      | 结束时间面板的默认时间                                                                                                        | Date                             | -            |
| startTimeSelectableRange | 开始时间面板的可选时间段，例如<br>`'18:30:00 - 20:30:00'`<br>或者传入数组<br>`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | String \| Array< String >        | -            |
| endTimeSelectableRange   | 结束时间面板的可选时间段，例如<br>`'18:30:00 - 20:30:00'`<br>或者传入数组<br>`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | String \| Array< String >        | -            |
| startTimeSelectMode      | 带时间的日期选择中，开始时间面板的模式                                                                                        | Enum {'TimePicker','TimeSelect'} | 'TimePicker' |
| endTimeSelectMode        | 带时间的日期选择中，结束时间面板的模式                                                                                        | Enum {'TimePicker','TimeSelect'} | 'TimePicker' |
| startTimeSelectModeProps | 当`startTimeSelectMode`模式为 "TimeSelect" 时的参数， 具体参见组件 TimePicker.TimeSelect API                                  | -                                |
| endTimeSelectModeProps   | 当`endTimeSelectMode`模式为 "TimeSelect" 时的参数， 具体参见组件 TimePicker.TimeSelect API                                    | -                                |

## 方法

| 参数                  | 描述                                                              |
| --------------------- | ----------------------------------------------------------------- |
| togglePickerVisible() | 切换日历面板的展开关闭。示范见上文示例中的 `带快捷选项的日期面板` |
