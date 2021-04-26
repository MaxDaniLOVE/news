import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import MainPage from '../../pages/MainPage';

export default function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
                    <Route path={'/login'}>
                        <LoginPage />
                    </Route>
                    <Route path={'/'}>
                        <MainPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
