# Breadcrumb 面包屑

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

## 何时使用

-   当系统拥有超过两级以上的层级结构时；
-   当需要告知用户『你在哪里』时；
-   当需要向上导航的功能时。

## Installation

```sh
npm install @stbui/za-breadcrumb
```

## 基本使用

```jsx
import React from 'react';
import Breadcrumb from '@stbui/za-breadcrumb';

export default () => (
    <Breadcrumb>
        <Breadcrumb.Item>Item1</Breadcrumb.Item>
        <Breadcrumb.Item>Item2</Breadcrumb.Item>
        <Breadcrumb.Item>Item3</Breadcrumb.Item>
    </Breadcrumb>
);
```

## 前方带图标

## 自定义分隔符

## API

### Breadcrumb

| 参数       | 说明                                                           | 类型                                            | 默认值                               |
| ---------- | -------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------ |
| className  | 容器类名                                                       | String                                          | -                                    |
| itemRender | 自定义链接函数，和 react-router 配置使用                       | (route, params, routes, paths) => ReactNode     | -                                    |
| maxWidth   | Breadcrumb Item 的最大宽度，超出后显示省略号。默认展示全部内容 | Number                                          | -                                    |
| params     | 路由的参数                                                     | Object                                          | -                                    |
| routes     | router 的路由栈信息                                            | Array< {path: String, breadcrumbName: String} > | -                                    |
| separator  | 自定义分隔符                                                   | String \| ReactNode                             | `<Icon type="arrow-line-regular" />` |
| size       | 自定义大小                                                     | Enum {'default', 'small'}                       | 'default'                            |
| style      | 容器样式                                                       | Object                                          | -                                    |

### Breadcrumb.Item

| 参数      | 说明         | 类型                   | 默认值 |
| --------- | ------------ | ---------------------- | ------ |
| className | 自定义类名   | String                 | -      |
| href      | 链接的目的地 | String                 | -      |
| onClick   | 单击事件     | (e:MouseEvent) => void | -      |

### 和 browserHistory 配合

和 react-router 一起使用时，默认生成的 url 路径是带有 `#` 的，如果和 browserHistory 一起使用的话，你可以使用 `itemRender` 属性定义面包屑链接。

```js
import { Link } from 'react-router';

const routes = [
    {
        path: 'index',
        breadcrumbName: '首页',
    },
    {
        path: 'first',
        breadcrumbName: '一级面包屑',
    },
    {
        path: 'second',
        breadcrumbName: '当前页面',
    },
];
function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span>{route.breadcrumbName}</span>
    ) : (
        <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
}

return <Breadcrumb itemRender={itemRender} routes={routes} />;
```
