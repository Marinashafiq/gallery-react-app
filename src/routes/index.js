import React, { lazy, Suspense } from 'react';
import { Router, Switch } from "react-router-dom";
import history from './history';
const Home = lazy(() => import('../containers/Home/Home'));
<<<<<<< HEAD
const CollectionPhotos = lazy(() => import('../containers/Collections/CollectionPhotos'));
=======
const CollectionsPhotos = lazy(() => import('../containers/Collections/CollectionsPhotos'));
>>>>>>> a381fd5e6eaad9875cace99bee475bf43f7af55b


export const Routes = () =>{
    return(
        <Router history={history}>
            <div>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Switch>
                    <Home path="/" exact />
                    <CollectionsPhotos path="/collections/:id" exact/>
                </Switch>
            </Suspense>
            </div>
        </Router>
    )
}

 