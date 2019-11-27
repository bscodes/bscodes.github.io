import React from 'react';
// eslint-disable-next-line
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/DarkMode/useDarkMode';
import { lightTheme, darkTheme } from './components/DarkMode/theme';
import { GlobalStyles } from './components/DarkMode/global';
import Toggle from './components/DarkMode/Toggle';
import Home from './pages/Home';
import './App.scss';

function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
    if (!componentMounted) {
      return <div />
    };
    return (
        <ThemeProvider theme={themeMode}>
            <>
                <div className="App title-font">
                    <GlobalStyles />
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                    <HashRouter basename="/">
                        <Switch>
                            <Route exact path = {'/'} component = {Home}/>    
                        </Switch>
                    </HashRouter>  
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;
