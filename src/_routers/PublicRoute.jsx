/* Packages */
import React from 'react';
import { Route } from 'react-router';

/* Function */
import renderMergedProps from './renderMergedProps.js';

/* Filter */
import {deepMerge} from '../_filters'

/* Public Route */
const PublicRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, deepMerge(routeProps, rest));
        }}/>
    );
}

/* Export */
export default PublicRoute;
