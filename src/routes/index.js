import React, { lazy, Suspense } from 'react';
import { Router, Switch } from "react-router-dom";
import history from './history';
const Home = lazy(() => import('../containers/Home/Home'));
const CollectionsPhotos = lazy(() => import('../containers/Collections/CollectionsPhotos'));


export const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <Suspense fallback={<h1>Still Loading…</h1>}>
                    <Switch>
                        <Home path="/" exact />
                        <Home path="/collections" exact />
                        <CollectionsPhotos path="/collections/:id" exact />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

