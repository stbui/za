# ImageLoader 图片加载器

加载图片组件

## 何时使用

图片处于准备、加载中状态时，使用合适的预加载占位图有助于缓解用户的焦虑。图片加载失败后使用组件预置的加载失败占位图替代浏览器提供的默认失败图。

## Installation

```sh
npm install @stbui/za-checkbox
```

## Usage

```jsx
import React from 'react';
import Checkbox from '@stbui/za-checkbox';

export default () => <Checkbox>Checkbox</Checkbox>;
```

## API

| 属性            | 说明                                                                                                                                  | 类型                                       | 默认值    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------- |
| className       | 图片外层容器 class                                                                                                                    | String                                     | -         |
| src             | 图片地址                                                                                                                              | String                                     | —         |
| imgProps        | 除图片地址以外的其他图片属性，同原生 image 标签的属性，见：[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)       | Object                                     | —         |
| placeholderSize | 占位图尺寸，预置了三种大小，'large'代表 240\*160、'default'代表 150\*100、'small'代表 90\*60，也可以自定义成{width: 200, height: 200} | Enum {'large', 'default', 'small'}\|Object | 'default' |
| onError         | 图片加载失败的回调                                                                                                                    | (e) => Void                                | -         |
| onLoad          | 图片加载成功的回调                                                                                                                    | (e) => Void                                | -         |
| preLoader       | 自定义请求中占位图                                                                                                                    | ReactNode\|() => ReactNode                 | -         |
| failedLoader    | 自定义加载失败占位图                                                                                                                  | ReactNode\|() => ReactNode                 | -         |
| style           | 图片外层容器样式对象                                                                                                                  | Object                                     | —         |
