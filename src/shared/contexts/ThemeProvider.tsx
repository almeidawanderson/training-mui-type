import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {DarkTheme, LightTheme} from './../themes'
import { Box, ThemeProvider } from "@mui/material";


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const themeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
    return useContext(themeContext)
};

export const AppThemeProvider: React.FC = ({children}) => {
    const [themeName, setThemeName] = useState<'light'|'dark'>('light')

    const togleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if(themeName === 'light') return LightTheme;

        return DarkTheme;        
        
    }, [themeName])


    
    return (
        <themeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box
                width={'100vh'}
                height={'100vh'}
                bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </themeContext.Provider>
    )
}