import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../src/components/Navbar';

describe('Navbar', () => {
    test('EXPECT title to be in document', async () => {
        render(<Navbar title="my title" />);
        expect(await screen.findByText(/my title/)).toBeInTheDocument;
    });
    test('EXPECT items to be in document WHEN items are passed', async () => {
        const items = <><div>Hello</div><div>World</div></>;
        render(<Navbar title="my title" items={items} />);
        expect(await screen.findByText(/Hello/)).toBeInTheDocument;
        expect(await screen.findByText(/World/)).toBeInTheDocument;
    });
});