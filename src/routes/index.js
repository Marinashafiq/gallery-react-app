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

            <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
            <Route path={process.env.PUBLIC_URL + "/search/:keyword"} component={SearchResults} exact />
            <Route path={process.env.PUBLIC_URL + "/photos"} component={SearchResults} exact />
            <Route path={process.env.PUBLIC_URL + "/collections"} exact component={SearchResults} />
            <Route path={process.env.PUBLIC_URL + "/collections/:id"} exact component={CollectionsPhotos} />
            {/* <CollectionList path="/collections/:keyword" exact /> */}
        </Switch>
        {/* </Router> */}
    </Suspense>
)

