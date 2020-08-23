import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavItem from '../../src/components/NavItem';

describe('NavItem', () => {
    test('EXPECT children to be in document', async () => {
        render(<NavItem>Hello World</NavItem>);
        expect(await screen.findByText(/Hello World/)).toBeInTheDocument;
    });
});