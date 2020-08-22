import React from 'react';
import styled from 'styled-components';

interface Props {
    children: JSX.Element | string;
}

export default function Navbar({ children }: Props): JSX.Element {
    return (
        <>
            <Nav>
                <div>
                    Home
                    {children}
                </div>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    background-color: red;
`;
