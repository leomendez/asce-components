```jsx

import styled from 'styled-components';

const Items = styled.div`
    padding: 0 5px;
    a {
        padding: 0 5px;
    }
`;

const items = <Items>
    <a href="#">Home</a>
    <a href="#">Somewhere else</a>
</Items>;

<Navbar title="My App" items={items} />

```