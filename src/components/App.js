import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import TodoPage from "./todo/TodoPage";

import '../'

function App() {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/todo" component={TodoPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default App;