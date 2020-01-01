import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import history from './history';
import Loader from '../components/loader/Loader';
const Home = lazy(() => import('../containers/Home/Home'));
const CollectionsPhotos = lazy(() => import('../containers/Collections/CollectionsPhotos'));
const SearchResults = lazy(() => import('../containers/SearchResults/SearchResults'));

export const Routes = (
    <Suspense fallback={<Loader />}>
        {console.log("Test routes")}
        {/* <Router history={history}> */}
        <Switch>
            {console.log(process.env.PUBLIC_URL)}

            <Home path={process.env.PUBLIC_URL + '/'} exact />
            <SearchResults path={process.env.PUBLIC_URL + "/search/:keyword"} exact />
            <SearchResults path={process.env.PUBLIC_URL + "/photos"} exact />
            <SearchResults path={process.env.PUBLIC_URL + "/collections"} exact />
            <CollectionsPhotos path={process.env.PUBLIC_URL + "/collections/:id"} exact />
            {/* <CollectionList path="/collections/:keyword" exact /> */}
        </Switch>
        {/* </Router> */}
    </Suspense>
)

