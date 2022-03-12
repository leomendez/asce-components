import React from 'react';
import Home from '../../src/pages/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('HomePage', () => {
  test('EXPECT Hello World to be in document', () => {
    render(<Home />);
    expect(screen.findByText(/Hello World/)).toBeInTheDocument;
  });
});