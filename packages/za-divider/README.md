# Divider 分割线

区隔内容的分割线。

## 何时使用

-   对不同章节的文本段落进行分割。
-   对行内文字/链接进行分割，例如表格的操作列。

## Installation

```sh
npm install @stbui/za-divider
```

## Usage

```jsx
import React from 'react';
import Divider from '@stbui/za-divider';

export default () => <Divider>Divider</Divider>;
```

## API

| 参数        | 说明                                                                        | 类型                                          | 默认值       |
| ----------- | --------------------------------------------------------------------------- | --------------------------------------------- | ------------ |
| className   | 分割线样式类                                                                | String                                        | -            |
| dashed      | 是否虚线                                                                    | Boolean                                       | false        |
| orientation | 分割线标题的位置,其中`left`/`right`横向类型生效，`top`/`bottom`纵向类型生效 | Enum {'left','right','center','top','bottom'} | `center`     |
| style       | 分割线样式对象                                                              | Object                                        | -            |
| textStyle   | 文字区域的样式                                                              | Object                                        | -            |
| type        | 水平、分隔符、垂直类型                                                      | Enum: {'horizontal', 'split' , 'vertical'}    | `horizontal` |
| children    | 文本内容，竖向仅支持 String                                                 | String\| ReactNode                            | -            |
