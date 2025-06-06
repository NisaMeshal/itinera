import { createTheme } from "@mantine/core";

const colorTheme = {
    oceanBlue: [ 
        '#0a504d', '#086c6c', '#047c7c', '#038c8e', '#03999c',
        '#27a9ae', '#4fb8be', '#82ccd2', '#b4e0e4', '#e1f2f4'
    ] as const,
    turquoise: [
       '#004a34', '#00664e', '#00755c', '#00856b', '#009277',
       '#1aa38a', '#47b39e', '#7cc9b9', '#b0ded4', '#dff2ee'
    ] as const,
    lightBlue: [
        '#0d565c', '#167987', '#1b8c9f', '#1fa1b8', '#22b0cb',
        '#36bcd3', '#56c7db', '#86d7e5', '#b6e6ef', '#e1f5f9'
    ] as const,
    green: [
        '#025d08', '#1d7c1c', '#2a8d27', '#379f32', '#40ae3a',
        '#5eba59', '#7bc677', '#a2d59e', '#c6e6c4', '#e7f5e7'
    ] as const,
};

export const theme = createTheme({
    colors: colorTheme,
    primaryColor: 'turquoise', 
    primaryShade: { light: 4, dark: 6},
    fontFamily: 'Roboto, sans-serif',
    headings: {
        fontFamily: 'Bree Serif, serif'
    }
})