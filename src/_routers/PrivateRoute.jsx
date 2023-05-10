import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

/* Constants */
import { ROUTES } from '../_constants';

/* Service */
import { flowService, auth } from '../_services';

/* Routes */
import PublicRoute from './PublicRoute.jsx';

/* Component */
class PrivateRoute extends React.Component {
    /**
     * Constructor
     *
     * @param {object} props - component props
     */
    constructor(props) {
        super(props);

        this.props = props;
    }

    async componentDidMount() {
        const { user } = this.props;

        if (user && (!user.employee || !user.employee.atoms.active)) {
            await auth.logout();
            flowService.goTo(ROUTES.INDEX);
        }
    }

    /* Render */
    render() {
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            return (
                <React.Fragment>
                    <Grid container className="container" spacing={0}>
                        <Grid item xs={10} sm={10}>
                            <PublicRoute {...this.props} />
                        </Grid>
                    </Grid>
                </React.Fragment>
            );
        }

        return (
            <Redirect to={(ROUTES.INDEX + flowService.getSearch())} />
        );
    }
}

/* Export Component */
export default PrivateRoute;
