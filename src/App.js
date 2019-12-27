import './App.css'
import React from 'react';
import WelcomePage from './ui/welcome/WelcomePage';
import RegisterPage from './ui/register/RegisterPage';
import InitialPage from './ui/initial/InitialPage';
import WhichList from './ui/list/WhichList';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    typography: {
        fontFamily:'Lato',
        color: '#686868',
        caption: {
            fontWeight: 700,
            color: '#333'
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage/>
                    </Route>
                    <Route path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route path="/initial">
                        <InitialPage/>
                    </Route>
                    <Route path="/list">
                        <WhichList/>
                    </Route>
                    <Route path="/add">
                        <WelcomePage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
