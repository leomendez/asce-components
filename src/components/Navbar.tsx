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
    theme: Theme;
}

const Nav = styled.nav<StyleProps>`
    background-color: ${({ theme }) => theme.colors.davysGrey };
    font-family: ${({ theme }) => theme.fonts[0] };
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    
`;

const Title = styled.div<StyleProps>`
    font-weight: 700;
    a {
        color: white;
        text-decoration: none;
        :hover {
            color: ${({ theme }) => theme.colors.flame};
        }
    }
`;

const Items = styled.div<StyleProps>`
    a {
        color: white;
        font-weight: 700;
        text-decoration: none;
        :hover {
            color: ${({ theme }) => theme.colors.flame};
        }
    }
`;