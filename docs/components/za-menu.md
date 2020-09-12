# 菜单 Menu

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
