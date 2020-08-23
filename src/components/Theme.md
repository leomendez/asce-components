```jsx
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    font-family: ${({ theme }) => theme.fonts[0]};
    color: ${({ theme }) => theme.colors.dark};
    * {
        box-sizing: border-box;
    }
`;

const Title = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
    width: 100%;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const Colors = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${({ theme }) => theme.colors.light};
    padding: 20px;
    div {
        width: 100%;
        text-align: center;
        padding: 10px;
        font-weight: 700;
    }
`;

const Dark = styled.div`
    background-color: ${({ theme }) => theme.colors.dark};
`;

const Light = styled.div`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
`;

const Primary = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
`;

const Secondary = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
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
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
    div:nth-child(2) {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
    div:nth-child(3) {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`;

<Theme>
    <Container>
        <Title>Colors</Title>
        <Colors>
            <Dark>Dark</Dark>
            <Light>Light</Light>
            <Primary>Primary</Primary>
            <Secondary>Secondary</Secondary>
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