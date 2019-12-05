import React, { lazy, Suspense } from 'react';
import { Router, Switch } from "react-router-dom";
import history from './history';
const Home = lazy(() => import('../containers/Home/Home'));
const CollectionsPhotos = lazy(() => import('../containers/Collections/CollectionsPhotos'));
const CollectionList = lazy(() => import('../containers/Collections/CollectionList'));
const SearchResults = lazy(() => import('../containers/SearchResults/SearchResults'));

export const Routes = () => {
    console.log(history);
    return (
        <Router history={history}>
            <div>
                <Suspense fallback={<h1>Still Loading…</h1>}>
                    <Switch>
                        <Home path="/" exact />
                        <SearchResults path="/photos/:keyword" exact />
                        <CollectionsPhotos path="/collections/:id" exact />
                        <CollectionList path="/collections/:keyword" exact />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

