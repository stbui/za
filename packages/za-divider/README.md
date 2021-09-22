# Divider 分割线

区隔内容的分割线。

## 何时使用

-   对不同章节的文本段落进行分割。
-   对行内文字/链接进行分割，例如表格的操作列。

## 水平分割线

```tsx
/**
 * desc: 默认为水平分割线，可在中间加入文字
 */
import React from 'react';
import Divider from '@stbui/za-divider';

export default () => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
        <Divider />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
        <Divider>With Text</Divider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
        <Divider dashed />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
    </div>
);
```

## 垂直分割符

```tsx
/**
 * desc: 使用 `type="split"` 设置为行内的垂直分割符。
 */
import React from 'react';
import Divider from '@stbui/za-divider';

export default () => (
    <div>
        Text
        <Divider type="split" />
        <a href="#">Link</a>
        <Divider type="split" />
        <a href="#">Link</a>
    </div>
);
```

## 标题位置

```tsx
/**
 * desc: 修改分割线标题的位置。
 */
import React from 'react';
import Divider from '@stbui/za-divider';

export default () => (
    <div>
        <Divider orientation="left">文字居左</Divider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
        <Divider>文字居中</Divider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
        <Divider orientation="right">文字居右</Divider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
            merninisti licere mihi ista probare, quae sunt a te dicta? Refert
            tamen, quo modo.
        </p>
    </div>
);
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
