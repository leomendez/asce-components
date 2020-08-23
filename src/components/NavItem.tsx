import React from 'react';
import styled from 'styled-components';
import { Theme } from '../types/theme';
import { THEME } from '../commons/constants';

interface Props {
    theme?: Theme;
    children?: JSX.Element | string;
}

export default function NavItem({ theme = THEME, children }: Props): JSX.Element {
    return (
        <Item theme={theme}>
            {children}
        </Item>
    );
}

const Item = styled.li<Props>`
    padding-right: 30px;
    a {
        color: white;
        font-weight: 700;
        text-decoration: none;
        :hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;