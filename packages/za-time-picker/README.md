# TimePicker 时间选择器

用于选择或输入时间

## 何时使用

用于选择时间点或通过两个时间点面板控制一段时间；多用于表单输入、筛选等场景；

## Installation

```sh
npm install @stbui/za-alert
```

## 选择固定时间点

提供几个固定的时间点供用户选择。

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

## 选择固定时间点的禁用状态

## 选择任意时间点

## 带快捷操作的面板

## 选择任意时间点的禁用状态

## 时间精度

## 额外的页脚

在浮层中加入额外的页脚，以满足某些定制信息的需求

## API

### 公共参数

| 参数              | 说明                                                                                             | 类型                     | 默认值             |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------ | --- |
| allowClear        | 是否显示清除按钮                                                                                 | Boolean                  | true               |
| className         | 选择器的 className                                                                               | String                   | -                  |
| disabled          | 是否禁用                                                                                         | Boolean                  | false              |
| esc               | 是否支持按 ESC 键关闭弹窗                                                                        | Boolean                  | true               |
| format            | 时间格式化, 小时 HH，分 mm，秒 ss                                                                | String                   | 'HH:mm:ss'         |
| getPopupContainer | 弹框渲染父节点。默认渲染到 body 上，如果你遇到滚动定位问题，试试修改为滚动的区域，并相对其定位。 | () =>ReactNode           | () =>document.body |
| onBlur            | 失焦时的回调                                                                                     | (e) => Void              | -                  |
| onChange          | 确认选定的值时触发                                                                               | (value) => Void          | -                  | -   |
| onFocus           | 聚焦时的回调                                                                                     | (e) => Void              | -                  |
| onVisibleChange   | 弹出或关闭弹窗的回调                                                                             | (status:Boolean) => Void | -                  |
| placeholder       | 占位内容                                                                                         | String                   | -                  |
| showTrigger       | 是否显示前缀图标                                                                                 | Boolean                  | true               |
| style             | 选择框的样式                                                                                     | Object                   | -                  |

### TimePicker

| 参数            | 说明                                                                                                            | 类型                      | 默认值 |
| --------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------- | ------ |
| footer          | 在面板中添加额外的页脚                                                                                          | () => ReactNode           | -      |
| onValueChange   | 时、分、秒发生变化时的回调                                                                                      | (date) => Void            | -      |
| selectableRange | 可选时间段，例如<br>`'18:30:00 - 20:30:00'`<br>或者传入数组<br>`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | String \| Array< String > | -      |
| showCurrent     | 是否显示"现在"快捷按钮                                                                                          | Boolean                   | false  |
| value           | 值                                                                                                              | Date                      | -      |

### TimePicker.TimeSelect

| 参数    | 说明     | 类型   | 默认值  |
| ------- | -------- | ------ | ------- |
| end     | 结束时间 | String | '18:00' |
| maxTime | 最大时间 | String | -       |
| minTime | 最小时间 | String | -       |
| start   | 开始时间 | String | '09:00' |
| step    | 间隔时间 | String | '00:30' |
| value   | 值       | Date   | -       |
