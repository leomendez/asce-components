import React from 'react';
import styled from 'styled-components';

interface Props {
}

export default function Navbar({  }: Props): JSX.Element {
    return (
        <Nav>
            <div>
                Home
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    background-color: red;
`;
