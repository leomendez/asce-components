import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Helvetica;
  }
`;

