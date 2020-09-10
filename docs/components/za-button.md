# 按钮 Button

按钮用于开始一个即时操作，响应用户点击行为，触发相应的业务逻辑。以下包含了各类形态和风格的按纽，可根据界面的风格和使用场景选择对应的类型。

## 交互规范

-   普通按钮的类型分为：主要按钮、普通按钮和链接按钮；
-   从交互状态分为：未获取焦点、获取焦点、点击、加载中及禁用；
-   线框类按钮建议文字为 2-4 字，超过 4 字且不是主要操作时，建议使用链接文字形式；
-   应使用不同颜色区分按钮的作用，例如当警告类操作时，建议使用红色等符合用户常见认知的颜色进行标明，且给予明确提示；
-   尽可能避免通用标签或误导性标签，标签应为动词，且能够明确指明用户操作后产生的相关后续，例如：删除类按钮建议标签使用删除，告知用户当前操作为何，而不建议使用确定等，能够引导用户明确，直指重点；
-   一般按钮会出现组合使用情况，例如确定及取消，当使用多个按钮组合时，可用颜色引导用户点击我们希望用户点击的按钮；
-   当用户点击按钮产生操作时，给与明确的状态反馈，当弱网状态下或提交状态下，鉴于 WEB 的特殊性，给予按钮等待提示；
-   一般在需要突出或强调的操作时，使用转牛，通常情况下，一个页面中最好只包含一个主要按钮；
-   普通按钮是当存在主要按钮后还需要突出时进行使用；
-   链接按钮是权重最低的，一般用于搭配引导用户操作时的逆向操作使用或在后台操作中进行使用的，链接按钮与链接的区别在于，链接一般是跳转页面到新的页面，按钮是触发后产生新的动作；
-   警告按钮一般颜色设置为红色，搭配二次确认使用；
-   图标按钮使用时，可配合普通按钮标签使用，也可单独使用，单独使用时，一般处于界面较为紧凑地使用；
-   图标符合用户常规认知，能够清楚明了的表明当前操作产生的步骤，不建议使用具有狭义的图标，避免产生用户操作歧义；
-   多个按钮之间存在相关的操作关联时，一般使用按钮组；
-   常见按钮组是供用户进行判断时（两个选项）或者两个选择以上，例如常见的微信登录确认，一般在处理该种按钮组时，会进行对比设置设计，将主操作按钮键或希望用户点击的按钮进行亮色处理，提高用户操作效率；

## Installation

```sh
npm install @stbui/za-button
```

## Usage

```tsx
import React from 'react';
import Button from '@stbui/za-button';

export default () => (
    <Button style={{ color: 'white', background: 'red' }}>Button</Button>
);
```

```tsx
import React from 'react';
import Button from '@stbui/za-button';

export default () => (
    <>
        <Button colors="primary" isSubmit={true}>
            Default
        </Button>
        <Button disabled>disabled</Button>
        <Button bordered>border</Button>
        <Button colors="primary" shape="round">
            round
        </Button>
    </>
);
```

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性     | 说明                                                                                                                                 | 类型                                                                          | 默认值    | 版本 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | --------- | ---- |
| block    | 将按钮宽度调整为其父宽度的选项                                                                                                       | boolean                                                                       | false     |      |
| danger   | 设置危险按钮                                                                                                                         | boolean                                                                       | false     |      |
| disabled | 按钮失效状态                                                                                                                         | boolean                                                                       | false     |      |
| ghost    | 幽灵属性，使按钮背景透明                                                                                                             | boolean                                                                       | false     |      |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致                                                                                | string                                                                        | -         |      |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                                        | `button`  |      |
| icon     | 设置按钮的图标组件                                                                                                                   | ReactNode                                                                     | -         |      |
| loading  | 设置按钮载入状态                                                                                                                     | boolean \| { delay: number }                                                  | false     |      |
| onClick  | 点击按钮时的回调                                                                                                                     | (event) => void                                                               | -         |      |
| shape    | 设置按钮形状，可选值为 `circle`、 `round` 或者不设                                                                                   | string                                                                        | -         |      |
| size     | 设置按钮大小                                                                                                                         | `large` \| `middle` \| `small`                                                | -         |      |
| target   | 相当于 a 链接的 target 属性，href 存在时生效                                                                                         | string                                                                        | -         |      |
| type     | 设置按钮类型                                                                                                                         | `primary` \| `ghost` \| `dashed` \| `danger` \| `link` \| `text` \| `default` | `default` |      |

支持原生 button 的其他所有属性。
