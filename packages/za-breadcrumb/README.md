# breadcrumb

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

## 何时使用

-   当系统拥有超过两级以上的层级结构时；
-   当需要告知用户『你在哪里』时；
-   当需要向上导航的功能时。

## Installation

```sh
npm install @stbui/za-checkbox
```

## Usage

```jsx
import React from 'react';
import Checkbox from '@stbui/za-breadcrumb';

export default () => <Checkbox>breadcrumb</Checkbox>;
```

## API

### Breadcrumb

| 参数       | 说明                                     | 类型                                        | 默认值 | 版本 |
| ---------- | ---------------------------------------- | ------------------------------------------- | ------ | ---- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | -      |      |
| params     | 路由的参数                               | object                                      | -      |      |
| routes     | router 的路由栈信息                      | [routes\[\]](#routes)                       | -      |      |
| separator  | 分隔符自定义                             | string \| ReactNode                         | `/`    |      |

### Breadcrumb.Item

| 参数          | 说明                     | 类型                                   | 默认值 | 版本 |
| ------------- | ------------------------ | -------------------------------------- | ------ | ---- |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown)       | -      |      |
| href          | 链接的目的地             | string                                 | -      |      |
| onClick       | 单击事件                 | (e:MouseEvent) => void                 | -      |      |
| overlay       | 下拉菜单的内容           | [Menu](/components/menu) \| () => Menu | -      |      |

### Breadcrumb.Separator

| 参数     | 说明           | 类型                | 默认值 | 版本 |
| -------- | -------------- | ------------------- | ------ | ---- |
| children | 要显示的分隔符 | string \| ReactNode | `/`    |      |

> 注意：在使用 `Breadcrumb.Separator` 时，其父组件的分隔符必须设置为 `separator=""`，否则会出现父组件默认的分隔符。
