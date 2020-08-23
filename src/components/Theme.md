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
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    color: white;
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

const FirstRow = styled.div`
    display: flex;
     div {
        width: 100%;
        padding: 5px;
        text-align: center;
    }
    div:nth-child(1) {
        background-color: ${props => props.theme.colors.chromeYellow};
    }
    div:nth-child(2) {
        color: black;
        background-color: ${props => props.theme.colors.white};
    }
    div:nth-child(3) {
        background-color: ${props => props.theme.colors.davysGrey};
    }
    div:nth-child(4) {
        background-color: ${props => props.theme.colors.lightCoral};
    }
    div:nth-child(5) {
        background-color: ${props => props.theme.colors.pastelPink};
    }
`;

const SecondRow = styled.div`
    display: flex;
     div {
        width: 100%;
        padding: 5px;
        text-align: center;
    }
    div:nth-child(1) {
        color: black;
        background-color: ${props => props.theme.colors.cultured};
    }
`;

<Theme>
    <Container>
        <Title>Colors</Title>
        <Colors>
            <FirstRow>
                <div>chromeYellow</div>
                <div>white</div>
                <div>davysGrey</div>
                <div>lightCoral</div>
                <div>pastelPink</div>
            </FirstRow>
            <SecondRow>
                <div>cultured</div>
            </SecondRow>
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