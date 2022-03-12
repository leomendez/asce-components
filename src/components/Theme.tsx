import React from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../commons/constants';
import { Theme as ThemeType} from '../types/theme';

export type ThemeProps = {
    children?: React.ReactNode;
    theme?: ThemeType;
}

export default function Theme({ children, theme = THEME }: ThemeProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
} 