import HomePage from '../pages/index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('HomePage', () => {
    test('EXPECT Hello World to be in document', () => {
        render(<HomePage />);
        expect(screen.findByText(/Hello World/)).toBeInTheDocument;
    });
});