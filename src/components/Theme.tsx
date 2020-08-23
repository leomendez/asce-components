import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../commons/constants';
import { Theme as ThemeType} from '../types/theme';

interface Props {
    children?: JSX.Element | string;
    theme?: ThemeType;
}

export default function Theme({ children, theme = THEME }: Props): JSX.Element {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
} 