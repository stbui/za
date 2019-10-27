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
import Button from '@stbui/za-button';

function Example() {
    return (
        <Button style={{ color: 'white', background: 'red' }}>Button</Button>
    );
}
```

## CSS in JS

Example with styled-components

```jsx
import Button from '@stbui/za-button';
import styled from 'styled-components';

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

function Example() {
    return <StyledButton>Button</StyledButton>;
}
```
