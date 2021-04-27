import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GreenCorner from '../../pages/GreenCorner';
import Shops from '../../pages/Shops';
import Recycling from '../../pages/Recycling';
import EcoFriendly from '../../pages/EcoFriendly';

export default function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
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
                    <Redirect to={'/green-corner'}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
