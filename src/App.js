import './App.css'
import React from 'react';
import WelcomePage from './welcome/WelcomePage';
import RegisterPage from './register/RegisterPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    typography: {
        fontFamily:'Lato',
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
                </Switch>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
