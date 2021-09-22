# PicturePreview 图片查看器

预览图片，对图片进行等比缩放、全屏显示、放大、缩小、旋转 90 度、保存等操作。

## 何时使用

当图片因大小比例、展示角度等原因不适合观看或想连续观看一组图片时，可以使用图片查看器调整或观看。

## 基本使用

```tsx
import React, { useState } from 'react';
import PicturePreview from '@stbui/za-picture-preview';

const source = [
    {
        name: '1',
        src: 'https://ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
    },
    {
        name: '2',
        src: 'https://ysf.qiyukf.net/080b89be8a980ab9951a1b0de643d939',
    },
    {
        name: '3',
        src: 'https://ysf.qiyukf.net/260c0731b07b2933fe04f1a4d629450c',
    },
];

export default () => {
    return (
        <PicturePreview source={source}>
            {({ onClose, onShowAndActiveIndex, isShow, source }) => {
                return (
                    <div>
                        {source.map((item, index) => (
                            <div key={'demo_pic_' + index}>
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    width="60px"
                                    height="60px"
                                    onClick={() => onShowAndActiveIndex(index)}
                                />
                                <div className="name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                );
            }}
        </PicturePreview>
    );
};
```

## 展示工具栏

```tsx
import React, { useState } from 'react';
import PicturePreview from '@stbui/za-picture-preview';

const source = [
    {
        name: '1',
        src: 'https://ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
    },
    {
        name: '2',
        src: 'https://ysf.qiyukf.net/080b89be8a980ab9951a1b0de643d939',
    },
    {
        name: '3',
        src: 'https://ysf.qiyukf.net/260c0731b07b2933fe04f1a4d629450c',
    },
];

export default () => {
    return (
        <PicturePreview source={source} toolbar={true}>
            {({ onClose, onShowAndActiveIndex, isShow, source }) => {
                return (
                    <div>
                        {source.map((item, index) => (
                            <div key={'demo_pic_' + index}>
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    width="60px"
                                    height="60px"
                                    onClick={() => onShowAndActiveIndex(index)}
                                />
                                <div className="name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                );
            }}
        </PicturePreview>
    );
};
```

## 支持拖动

```tsx
import React, { useState } from 'react';
import PicturePreview from '@stbui/za-picture-preview';

const source = [
    {
        name: '1',
        src: 'https://ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
    },
    {
        name: '2',
        src: 'https://ysf.qiyukf.net/080b89be8a980ab9951a1b0de643d939',
    },
    {
        name: '3',
        src: 'https://ysf.qiyukf.net/260c0731b07b2933fe04f1a4d629450c',
    },
];

export default () => {
    return (
        <PicturePreview source={source} toolbar={true} draggable={true}>
            {({ onClose, onShowAndActiveIndex, isShow, source }) => {
                return (
                    <div>
                        {source.map((item, index) => (
                            <div key={'demo_pic_' + index}>
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    width="60px"
                                    height="60px"
                                    onClick={() => onShowAndActiveIndex(index)}
                                />
                                <div className="name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                );
            }}
        </PicturePreview>
    );
};
```

## 隐藏遮罩层

```tsx
import React, { useState } from 'react';
import PicturePreview from '@stbui/za-picture-preview';

const source = [
    {
        name: '1',
        src: 'https://ysf.qiyukf.net/3df2280d2319678a091138b0bbba82fe',
    },
    {
        name: '2',
        src: 'https://ysf.qiyukf.net/080b89be8a980ab9951a1b0de643d939',
    },
    {
        name: '3',
        src: 'https://ysf.qiyukf.net/260c0731b07b2933fe04f1a4d629450c',
    },
];

export default () => {
    return (
        <PicturePreview source={source} toolbar={true} draggable={true}>
            {({ onClose, onShowAndActiveIndex, isShow, source }) => {
                return (
                    <div>
                        {source.map((item, index) => (
                            <div key={'demo_pic_' + index}>
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    width="60px"
                                    height="60px"
                                    onClick={() => onShowAndActiveIndex(index)}
                                />
                                <div className="name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                );
            }}
        </PicturePreview>
    );
};
```

## API

| 属性        | 说明                                                                                                                                                                                   | 类型       | 默认值 |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- | :----- |
| activeIndex | 当前展示第几张图片                                                                                                                                                                     | Number     | 0      |
| className   | 图片容器类名                                                                                                                                                                           | String     | -      |
| draggable   | 是否可拖动                                                                                                                                                                             | Boolean    | false  |
| esc         | 是否允许通过按 ESC 键关闭                                                                                                                                                              | Boolean    | true   |
| mask        | 是否展示遮罩层                                                                                                                                                                         | Boolean    | true   |
| onClose     | 关闭后的回调函数                                                                                                                                                                       | () => Void | -      |
| progress    | 是否展示图片总数和当前进度                                                                                                                                                             | Boolean    | false  |
| source      | 设置图片的源数据，可选，格式为 `[{src: ""[, name: ""]}]`。当不设置 source 时可以手动构造子节点，子节点需是 `img` 标签，且包含 `src` 属性。若 source 与子节点同时存在，子节点将被忽略。 | Array      | []     |
| style       | 图片容器样式                                                                                                                                                                           | Object     | -      |
| toolbar     | 是否展示工具栏                                                                                                                                                                         | Boolean    | false  |
