---
path: /docs/button/
redirect_from:
    - /components/button/
---

# Button

按钮组件通过点击执行一个具体的行为或动作。

<carbon-ad></carbon-ad>

## Installation

```sh
npm install za-button
```

## Usage

```jsx
import Button from 'za-button';

function Example() {
    return <Button>Button</Button>;
}
```

```jsx
import Button from 'za-button';

function Example() {
    return (
        <div>
            <Button colors="primary" isSubmit={true}>
                Default
            </Button>
            <Button disabled>disabled</Button>
            <Button bordered>border</Button>
            <Button colors="primary" shape="round">
                round
            </Button>
        </div>
    );
}
```
