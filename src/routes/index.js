import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './history';
const Home = lazy(() => import('../containers/Home/Home'));

export const Routes = () =>{
    return(
        <Router history={history}>
            <div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Switch>
                    <Home path="/" exact />
                </Switch>
            </Suspense>
            </div>
        </Router>
    )
}

 