import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Theme from '../../src/components/Theme';

describe('Navbar', () => {
  test('EXPECT Hello World to be in document WHEN passed as child', async () => {
    render(<Theme>Hello World</Theme>);
    expect(await screen.findByText(/Hello World/)).toBeInTheDocument;
  });
}); 