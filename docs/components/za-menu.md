# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## Installation

```sh
npm install @stbui/za-menu
```

## Usage

```jsx
import React from 'react';
import Menu from '@stbui/za-menu';
import Divider from '@stbui/za-divider';

export default () => (
    <Menu>
        <Menu.Item>MenuItem 1</Menu.Item>
        <Menu.Item>MenuItem 2</Menu.Item>
        <Divider />
        <Menu.Item disabled>MenuItem 3</Menu.Item>
        <Menu.Item active>MenuItem 4</Menu.Item>
        <Divider />
        <Menu.Item>MenuItem 5</Menu.Item>
        <Menu.Item>MenuItem 6</Menu.Item>
    </Menu>
);
```

## 水平菜单

水平的顶部导航菜单。

## 垂直菜单

子菜单是弹出的形式。

## 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

## 缩起内嵌菜单

内嵌菜单可以被缩起/展开。

## 只展开当前父级菜单

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

## 切换菜单模式和主题

展示动态切换菜单模式和主题。

## API

```html
<menu>
    <Menu.Item>菜单项</Menu.Item>
    <SubMenu title="子菜单">
        <Menu.Item>子菜单项</Menu.Item>
    </SubMenu>
</menu>
```

### Menu

| 参数                | 说明                                   | 类型                                                                         | 默认值     |
| ------------------- | -------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| className           | 容器类名                               | String                                                                       | -          |
| defaultOpenKeys     | 初始展开的 SubMenu 菜单项 key 数组     | Array< String >                                                              | -          |
| defaultSelectedKeys | 初始选中的菜单项 key 数组              | Array< String >                                                              | -          |
| forceSubMenuRender  | 在子菜单展示之前就渲染进 DOM           | Boolean                                                                      | false      |
| inlineCollapsed     | inline 时菜单是否收起状态              | Boolean                                                                      | -          |
| inlineIndent        | inline 模式的菜单缩进宽度              | Number                                                                       | 24         |
| mode                | 菜单类型                               | Enum {'vertical', 'vertical-left', 'vertical-right', 'horizontal', 'inline'} | 'vertical' |
| multiple            | 是否允许多选                           | Boolean                                                                      | false      |
| openKeys            | 当前展开的 SubMenu 菜单项 key 数组     | Array< String >                                                              | -          |
| selectable          | 是否允许选中                           | Boolean                                                                      | true       |
| selectedKeys        | 当前选中的菜单项 key 数组              | Array< String >                                                              | -          |
| style               | 根节点样式                             | Object                                                                       | -          |
| subMenuCloseDelay   | 用户鼠标离开子菜单后关闭延时，单位：秒 | Number                                                                       | 0.1        |
| subMenuOpenDelay    | 用户鼠标进入子菜单后开启延时，单位：秒 | Number                                                                       | 0          |
| theme               | 主题颜色                               | Enum {'light', 'dark'}                                                       | 'light'    |
| onClick             | 点击 MenuItem 调用此函数               | ({ item, key, keyPath }) => Void                                             | -          |
| onDeselect          | 取消选中时调用，仅在 multiple 生效     | ({ item, key, selectedKeys }) => Void                                        | -          |
| onOpenChange        | SubMenu 展开/关闭的回调                | (openKeys: Array< String >) => Void                                          | -          |
| onSelect            | 被选中时调用                           | ({ item, key, selectedKeys }) => Void                                        | -          |

### Menu.Item

| 参数      | 说明            | 类型    | 默认值 |
| --------- | --------------- | ------- | ------ |
| className | 容器类名        | String  | -      |
| disabled  | 是否禁用        | Boolean | false  |
| key       | item 的唯一标志 | String  | -      |

### Menu.SubMenu

| 参数         | 说明           | 类型                         | 默认值 |
| ------------ | -------------- | ---------------------------- | ------ |
| children     | 子菜单的菜单项 | Array< MenuItem \| SubMenu > | -      |
| className    | 容器类名       | String                       | -      |
| disabled     | 是否禁用       | Boolean                      | false  |
| key          | 唯一标志       | String                       | -      |
| title        | 子菜单项值     | String \| ReactNode          | -      |
| onTitleClick | 点击子菜单标题 | ({ key, domEvent }) => Void  | -      |

### Menu.ItemGroup

| 参数      | 说明         | 类型                | 默认值 |
| --------- | ------------ | ------------------- | ------ |
| children  | 分组的菜单项 | Array< MenuItem >   | -      |
| className | 容器类名     | String              | -      |
| title     | 分组标题     | String \| ReactNode | -      |

### Menu.Divider

菜单项分割线，只用在弹出菜单内。
