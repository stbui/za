---
path: /docs/elevation/
redirect_from:
    - /components/elevation/
---

# Elevation

Elevation is the relative distance between two surfaces along the z-axis.

<carbon-ad></carbon-ad>

## Installation

```sh
npm install @stbui/za-elevation
```

## Usage

```jsx
import Elevation from '@stbui/za-elevation';
import styled from 'styled-components';

const DemoElevation = styled(Elevation)`
    padding: 1rem;
    margin: 1rem;
    display: inline-flex;
    width: 6rem;
    height: 6rem;
    vertical-align: top;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background-color: #fff;
`;

function Example() {
    return (
        <>
            {Array(25)
                .fill(undefined)
                .map((val, i) => (
                    <DemoElevation z={i} key={i}>
                        {i}dp
                    </DemoElevation>
                ))}
        </>
    );
}
```
