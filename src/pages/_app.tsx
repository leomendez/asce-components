import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { davysGrey } from '../commons/colors';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${davysGrey};
  }

  * {
    box-sizing: border-box;
  }
`;