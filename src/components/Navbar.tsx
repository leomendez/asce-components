import React from 'react';
import styled from 'styled-components';
import { Theme } from '../types/theme';
import { THEME } from '../commons/constants';

interface Props {
    items?: JSX.Element;
    title: JSX.Element | string;
    theme?: Theme;
}

export default function Navbar({ items, title, theme = THEME }: Props): JSX.Element {
    return (
        <>
            <Nav theme={theme}>
                <Title theme={theme}>
                    {title}
                </Title>
                <Items theme={theme}>
                    {items}
                </Items>
            </Nav>
        </>
    );
}

type StyleProps = {
    theme?: Theme;
}

const Nav = styled.nav<StyleProps>`
    background-color: ${({ theme }) => theme.colors.dark };
    font-family: ${({ theme }) => theme.fonts[0] };
    color: white;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    
`;

const Title = styled.div<StyleProps>`
    padding: 0 30px;
    font-weight: 700;
    a {
        color: white;
        text-decoration: none;
        :hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

const Items = styled.ul<StyleProps>`
    margin: 0;
    width: 70%;
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
`;