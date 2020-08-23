import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../commons/constants';

interface Props {
    children?: JSX.Element | string;
}

export default function Theme({ children }: Props): JSX.Element {
    return (
        <ThemeProvider theme={THEME} >{ children }</ThemeProvider>
    );
} 