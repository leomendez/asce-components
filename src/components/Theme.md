```jsx

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    font-family: ${props => props.theme.fonts[0]};
`;

const Title = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.medium};
`;

const Colors = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: white;
    div {
        width: 100%;
        padding: 5px;
        text-align: center;
    }
    div:nth-child(1) {
        background-color: ${props => props.theme.colors.goldCrayola};
    }
    div:nth-child(2) {
        background-color: ${props => props.theme.colors.lightSteelBlue};
    }
    div:nth-child(3) {
        background-color: ${props => props.theme.colors.davysGrey};
    }
    div:nth-child(4) {
        background-color: ${props => props.theme.colors.tartOrange};
    }
    div:nth-child(5) {
        background-color: ${props => props.theme.colors.flame};
    }
`;

const FontSizes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div {
        width: 100%;
        padding: 5px;
        text-align: center;
    }
    div:nth-child(1) {
        font-size: ${props => props.theme.fontSizes.small};
    }
    div:nth-child(2) {
        font-size: ${props => props.theme.fontSizes.medium};
    }
    div:nth-child(3) {
        font-size: ${props => props.theme.fontSizes.large};
    }
`;

<Theme>
    <Container>
        <Title>Colors</Title>
        <Colors>
            <div>goldCrayola</div>
            <div>lightSteelBlue</div>
            <div>davysGrey</div>
            <div>tartOrange</div>
            <div>flame</div>
        </Colors>
        <Title>Font Sizes</Title>
        <FontSizes>
            <div>SMALL</div>
            <div>MEDIUM</div>
            <div>LARGE</div>
        </FontSizes>
    </Container>
</Theme>

```