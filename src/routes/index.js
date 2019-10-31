import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './history';
const PhotosList = lazy(() => import('../containers/Photos/PhotosList'));

export const Routes = () =>{
    return(
        <Router history={history}>
            <div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Switch>
                    <PhotosList path="/" exact />
                </Switch>
            </Suspense>
            </div>
        </Router>
    )
}

 