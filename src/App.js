import './App.css'
import React from 'react';
import WelcomePage from './welcome/WelcomePage';
import RegisterPage from './register/RegisterPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <WelcomePage/>
                </Route>
                <Route path="/test">
                    <RegisterPage/>
                </Route>
            </Switch>
        </BrowserRouter>


    );
}

export default App;
