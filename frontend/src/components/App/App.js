import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import MainPage from '../../pages/MainPage';
import GreenCorner from '../../pages/GreenCorner';
import Shops from '../../pages/Shops';
import Recycling from '../../pages/Recycling';
import EcoFriendly from '../../pages/EcoFriendly';

export default function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
                    {/* <Route path={'/login'}>
                        <LoginPage />
                    </Route>
                    <Route path={'/'}>
                        <MainPage />
                    </Route> */}
                    <Route path={'/green-corner'}>
                        <GreenCorner />
                    </Route>
                    <Route path={'/shops'}>
                        <Shops />
                    </Route>
                    <Route path={'/recycling'}>
                        <Recycling />
                    </Route>
                    <Route path={'/eco-friendly'}>
                        <EcoFriendly />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
