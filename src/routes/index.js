import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from './history';
const Home = lazy(() => import('../containers/Home/Home'));
const CollectionPhotos = lazy(() => import('../containers/Collections/CollectionPhotos'));


export const Routes = () =>{
    return(
        <Router history={history}>
            <div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Switch>
                    <Home path="/" exact />
                    <CollectionPhotos path="/collection/:id" exact />
                </Switch>
            </Suspense>
            </div>
        </Router>
    )
}

 