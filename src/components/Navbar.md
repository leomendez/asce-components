```jsx
import styled from 'styled-components';
import NavItem from './NavItem';

const items = <>
    <NavItem>Home</NavItem>
    <NavItem>About</NavItem>
    <NavItem>Contact</NavItem>
</>;

<Navbar title="My App" items={items} />
```