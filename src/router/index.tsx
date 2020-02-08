import React, { Component, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../redux/store';
import Fallback from '../components/common/fallback';

const HomePage = React.lazy(() => import('../pages/home'));

export default class MainRouter extends Component {

    render() {
        return (
            <Router history={history}>
                <Suspense fallback={<Fallback />}>
                    <Switch>
                        <Route path="/" component={HomePage} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}