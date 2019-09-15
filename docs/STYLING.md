---
path: /docs/styling/
redirect_from:
    - /guide/styling/
    - /guide/theming/
---

# Styling

Reakit doesn't depend on any CSS library. Components are unstyled by default. So you're free to use whatever approach you want. Each component returns a single HTML element that accepts all HTML props, including `className` and `style`.

<carbon-ad></carbon-ad>

## Inline styles

Just use the `style` prop.

```jsx
import Button from 'za-button';

function Example() {
    return (
        <Button style={{ color: 'white', background: 'red' }}>Button</Button>
    );
}
```

## CSS in JS

Example with styled-components

```jsx
import Button from 'za-button';
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
