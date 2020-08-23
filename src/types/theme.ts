export type Theme = {
    colors: {
        [key: string]: string
    };
    fonts: string[],
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
}