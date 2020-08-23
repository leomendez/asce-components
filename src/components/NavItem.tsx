import React from 'react';
import styled from 'styled-components';
import { Theme } from '../types/theme';
import { THEME } from '../commons/constants';

export type NavItemProps = {
    theme?: Theme;
    children?: JSX.Element | string;
    onClick?: () => void;
}

export default function NavItem({ theme = THEME, children, onClick }: NavItemProps): JSX.Element {
    return (
        <Item theme={theme} onClick={onClick}>
            {children}
        </Item>
    );
}

const Item = styled.li<NavItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    color: white;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    :hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;