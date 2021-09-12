# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

-   当加载/渲染所有数据将花费很多时间时；
-   可切换页码浏览数据。

## 基本

```tsx
/**
 * desc: 基础分页
 */
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => <Pagination defaultCurrent={1} total={50} />;
```

## 改变

```tsx
/**
 * desc: 改变每页显示条目数
 */
import React from 'react';
import Pagination from '@stbui/za-pagination';

const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};

export default () => (
    <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
    />
);
```

## 受控

```tsx
/**
 * desc: 受控制的页码
 */
import React, { useState } from 'react';
import Pagination from '@stbui/za-pagination';

export default () => {
    const [current, setCurrent] = useState(3);

    const onChange = page => {
        console.log(page);
        setCurrent(page);
    };

    return <Pagination current={current} onChange={onChange} total={50} />;
};
```

## 上一步和下一步

```tsx
/**
 * 修改上一步和下一步为文字链接
 */
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => {
    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>上一页</a>;
        }
        if (type === 'next') {
            return <a>下一页</a>;
        }
        return originalElement;
    };

    return <Pagination total={500} itemRender={itemRender} />;
};
```

## 跳转

```tsx
/**
 * desc: 快速跳转到某一页
 */
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => {
    const onChange = pageNumber => {
        console.log('Page: ', pageNumber);
    };
    return (
        <Pagination
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
        />
    );
};
```

## 迷你

```tsx
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => {
    const showTotal = total => {
        return `共 ${total} 条数据`;
    };

    return (
        <div id="components-pagination-demo-mini">
            <Pagination size="small" total={50} style={{ marginBottom: 24 }} />
            <Pagination
                size="small"
                total={50}
                showSizeChanger
                showQuickJumper
                style={{ marginBottom: 24 }}
            />
            <Pagination size="small" total={50} showTotal={showTotal} />
        </div>
    );
};
```

## 更多

```tsx
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => <Pagination defaultCurrent={6} total={500} />;
```

## 简洁

```tsx
/**
 * desc: 简单的翻页
 */
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => <Pagination simple defaultCurrent={2} total={50} />;
```

## 总数

```tsx
/**
 * desc: 通过设置 `showTotal` 展示总共有多少数据
 */
import React from 'react';
import Pagination from '@stbui/za-pagination';

export default () => (
    <div>
        <Pagination
            total={85}
            showTotal={total => `共 ${total} 条数据`}
            pageSize={20}
            defaultCurrent={1}
        />
        <br />
        <Pagination
            total={85}
            showTotal={(total, range) =>
                `第${range[0]}-${range[1]} 条，共 ${total} 条数据`
            }
            pageSize={20}
            defaultCurrent={1}
        />
    </div>
);
```

## API

| 参数                | 说明                                         | 类型                                                                   | 默认值                   |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------- | ------------------------ |
| className           | 自定义类名                                   | String                                                                 | -                        |
| current             | 当前页数                                     | Number                                                                 | -                        |
| defaultCurrent      | 默认的当前页数                               | Number                                                                 | 1                        |
| defaultPageSize     | 默认的每页条数                               | Number                                                                 | 10                       |
| hideOnSinglePage    | 只有一页时是否隐藏分页器                     | Boolean                                                                | false                    |
| itemRender          | 用于自定义页码的结构                         | (page, type: 'page' \| 'prev' \| 'next', originalElement) => ReactNode | -                        |
| onChange            | 页码改变的回调，参数是改变后的页码及每页条数 | (page, pageSize) => Void                                               | noop                     |
| onShowSizeChange    | pageSize 变化的回调                          | (current, size) => Void                                                | noop                     |
| pageSize            | 每页条数                                     | Number                                                                 | -                        |
| pageSizeOptions     | 指定每页可以显示多少条                       | Array< String >                                                        | ['10', '20', '30', '40'] |
| showLessItems       | 是否显示更少的 Items                         | Boolean                                                                | false                    |
| showPrevNextJumpers | 是否展示>>双箭头跳转                         | Boolean                                                                | true                     |
| showQuickJumper     | 是否可以快速跳转至某页                       | Boolean                                                                | false                    |
| showSizeChanger     | 是否可以改变 pageSize                        | Boolean                                                                | false                    |
| showTotal           | 用于显示数据总量和当前数据顺序               | (total, range) => Void                                                 | -                        |
| simple              | 当添加该属性时，显示为简单分页               | Boolean                                                                | -                        |
| size                | 当为「small」时，是小尺寸分页                | String                                                                 | ""                       |
| style               | 自定义样式                                   | Object                                                                 | -                        |
| total               | 数据总数                                     | Number                                                                 | 0                        |
