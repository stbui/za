---
title: 编码规范
nav:
    title: 编码规范
    order: 2
---

# 编码规范

## 内联样式


```jsx
import React from 'react';
import Button from '@stbui/za-button';

export default () => (
    <Button style={{ color: 'white', background: 'red' }}>Button</Button>
);
```

## CSS in JS


```jsx
import React from 'react';
import styled from 'styled-components';
import Button from '@stbui/za-button';

const StyledButton = styled(Button)`
    color: white;
    background: red;
    &:not([disabled]):hover {
        background: green;
    }

    &:not([disabled]):active {
        background: blue;
    }
`;

export default () => <StyledButton>Button</StyledButton>;
```
