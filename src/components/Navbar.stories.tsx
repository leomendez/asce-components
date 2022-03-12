import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './Navbar';
import NavItem from './NavItem';
import { THEME } from '../commons/constants';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    title: { control: 'text' },
  },
} as ComponentMeta<typeof Navbar>;

const items = <>
  <NavItem>Home</NavItem>
  <NavItem>About</NavItem>
  <NavItem>Contact</NavItem>
</>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: THEME,
  items: items,
  title: 'Asce components',
};
