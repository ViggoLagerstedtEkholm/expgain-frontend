import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import useLocalStorage, {STORED_VALUES} from "./Components/Hooks/useLocalStorage";

interface IThemeContext {
    dark: boolean;
    toggleDark?: () => void;
}

const defaultState = {
    dark: true,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

interface Props {
    children: JSX.Element;
}

const dark = {
    colors: {
        header: '#1d1d1d',
        button: '#bb86fc',
        body: '#121212',
        footer: '#1d1d1d',
        text: 'white',
        card: '#1f1e22',
    },
    mobile: '768px',
}

const light = {
    colors: {
        header: '#dadada',
        button: '#b475ff',
        body: '#e8e8e8',
        footer: '#d3d3d3',
        text: 'black',
        card: '#fdfdfd',
    },
    mobile: '768px',
}

export type ThemeType = typeof dark;

function AppContextProvider({children}: Props) {
    const [theme] = useLocalStorage(STORED_VALUES.THEME, defaultState.dark);
    const [isDarkTheme, setDarkTheme] = useState(theme === 'dark' ? defaultState.dark : false);

    const themeToggle = () => {
        isDarkTheme ? setDarkTheme(false) : setDarkTheme(true)
    }

    const value: IThemeContext = {
        dark: isDarkTheme,
        toggleDark: themeToggle
    }

    return (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={isDarkTheme ? dark : light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default AppContextProvider;