import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../src/components/Navbar'

describe('Navbar', () => {
    test('EXPECT Hello World to be in document', () => {
        render(<Navbar />);
        expect(screen.findByText(/Hello World/)).toBeInTheDocument;
    });
});