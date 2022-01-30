import React, {createContext, Dispatch, useReducer, useState} from 'react';
import {ThemeProvider} from "styled-components";
import useLocalStorage, {STORED_VALUES} from "./Components/Hooks/useLocalStorage";
import {
    OpenState,
    initialFilterState,
    FilterOpenReducer,
    FilterAction
} from "./Components/Shared/State/FilterOpenReducer";

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
        dropdown: '#3a3a3a'
    },
    sm: '600px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
}

const light = {
    colors: {
        header: '#dadada',
        button: '#b475ff',
        body: '#e8e8e8',
        footer: '#d3d3d3',
        text: 'black',
        card: '#fdfdfd',
        dropdown: '#adadad'
    },
    sm: '600px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
}

interface DispatchFilterOpenState {
    filterOpenState: OpenState;
    filterOpenDispatch: Dispatch<FilterAction>;
}

export const FilterOpenContext = createContext<DispatchFilterOpenState>({
    filterOpenState: initialFilterState,
    filterOpenDispatch: () => null,
});

export type ThemeType = typeof dark;

function AppContextProvider({children}: Props) {
    const [theme, setTheme] = useLocalStorage(STORED_VALUES.THEME, defaultState.dark);
    const [isDarkTheme, setDarkTheme] = useState(theme === 'dark');
    const [filterOpenState, filterOpenDispatch] = useReducer(FilterOpenReducer, initialFilterState);

    const themeToggle = () => {
        if (isDarkTheme) {
            setDarkTheme(false);
            setTheme("light");
        } else {
            setDarkTheme(true);
            setTheme("dark");
        }
    }

    const value: IThemeContext = {
        dark: isDarkTheme,
        toggleDark: themeToggle
    }

    const filterOpen = {filterOpenState, filterOpenDispatch};

    return (
        <ThemeContext.Provider value={value}>
            <FilterOpenContext.Provider value={filterOpen}>
                <ThemeProvider theme={isDarkTheme ? dark : light}>
                    {children}
                </ThemeProvider>
            </FilterOpenContext.Provider>
        </ThemeContext.Provider>
    );
}

export default AppContextProvider;