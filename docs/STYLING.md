---
path: /docs/styling/
redirect_from:
    - /guide/styling/
    - /guide/theming/
---

# Styling

## Inline styles

Just use the `style` prop.

```jsx
import React from 'react';
import Button from '@stbui/za-button';

export default () => (
    <Button style={{ color: 'white', background: 'red' }}>Button</Button>
);
```

## CSS in JS

Example with styled-components

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
