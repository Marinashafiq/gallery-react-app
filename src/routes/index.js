import React, { lazy, Suspense } from 'react';
import { Router, Switch } from "react-router-dom";
import history from './history';
import Loader from '../components/loader/Loader';
const Home = lazy(() => import('../containers/Home/Home'));
const CollectionsPhotos = lazy(() => import('../containers/Collections/CollectionsPhotos'));
const SearchResults = lazy(() => import('../containers/SearchResults/SearchResults'));

export const Routes = (
    <Suspense fallback={<Loader />}>
        <Router history={history}>
            <Switch>
                <Home path="/" exact />
                <SearchResults path="/search/:keyword" exact />
                <SearchResults path="/photos" exact />
                <SearchResults path="/collections" exact />
                <CollectionsPhotos path="/collections/:id" exact />
                {/* <CollectionList path="/collections/:keyword" exact /> */}
            </Switch>
        </Router>
    </Suspense>
)

