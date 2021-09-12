# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `Modal.confirm()` 等方法。

## Installation

```sh
npm install @stbui/za-modal
```

## Usage

```jsx | pure
import React from 'react';
import Modal from '@stbui/za-modal';

export default () => <Modal>Modal</Modal>;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | (e) => Void | - |
| bodyStyle | Modal body 样式 | Object | {} |
| cancelButtonDisabled | 取消按钮是否禁用 | Boolean | false |
| cancelText | 取消按钮文字 | String | 取消 |
| closable | 是否显示右上角的关闭按钮 | Boolean | true |
| confirmLoading | 确定按钮 loading | Boolean | - |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | Boolean | false |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | String \| ReactNode | 确定取消按钮 |
| getContainer | 指定 Modal 挂载的 HTML 节点 | (instance) => HTMLElement | () => document.body |
| esc | 是否支持键盘esc关闭 | Boolean | false |
| mask | 是否展示遮罩 | Boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | false |
| maskStyle | 遮罩样式 | Object | {} |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | (e) => Void | - |
| onOk | 点击确定回调 | (e) => Void | - |
| okButtonDisabled | 确认按钮是否禁用 | Boolean | false |
| okText | 确认按钮文字 | String | 确定 |
| okType | 确认按钮类型 | String | primary |
| style | 可用于设置浮层的样式，调整浮层位置等 | Object | - |
| title | 标题 | String \| ReactNode | - |
| visible | 对话框是否可见 | Boolean | - |
| width | 宽度 | String \| Number | 520 |
| wrapClassName | 对话框外层容器的类名 | String | - |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |

#### 注意

> `<Modal />` 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnClose`。

### Modal.method()

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上均为一个函数，参数为 Object，具体属性如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cancelText | 取消按钮文字 | String | '取消' |
| className | 容器类名 | String | - |
| content | 内容 | String \| ReactNode | - |
| draggable	| 模态框是否支持拖动	 | Boolean | false |
| iconType | 图标 Icon 类型 | String | 'hints-descriptions' |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | false |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | (e) => Void | - |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | (e) => Void | - |
| okText | 确认按钮文字 | String | '确定' |
| okType | 确认按钮类型 | Enum {'default', 'primary', 'ghost', 'dashed', 'danger'} | 'primary' |
| title | 标题 | String \| ReactNode | - |
| width | 宽度 | String \| Number | 416 |
| zIndex | 设置 Modal 的 `z-index` | Number | 1000 |

以上函数调用后，会返回一个引用，可以通过该引用关闭弹窗。

```js
const ref = Modal.info();
ref.destroy();
```
