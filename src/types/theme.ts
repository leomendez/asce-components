export type Theme = {
    colors: {
        dark: string;
        light: string;
        primary: string;
        secondary: string;
    };
    fonts: string[],
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
}