```jsx
import styled from 'styled-components';
import NavItem from './NavItem';

const items = <>
    <NavItem><a href="#">Home</a></NavItem>
    <NavItem><a href="#">About</a></NavItem>
    <NavItem><a href="#">Contact</a></NavItem>
</>;

<Navbar title="My App" items={items} />
```