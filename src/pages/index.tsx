import React from 'react';
import { Navbar, NavItem, Theme } from '../components';

export default function Home(): JSX.Element {
  const items = <>
    <NavItem onClick={() => location.assign('/docs')}>Docs</NavItem>
  </>;

  return (
    <Theme>
      <Navbar title="Asce Components 🔥" items={items} />
    </Theme>
  );
}
