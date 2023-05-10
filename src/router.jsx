import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';

/* Pages / Content */
import App from './_pages/App';

/* Routes Paths */
import { ROUTES } from './_constants';

/* Routes */
import PublicRoute from './_routers/PublicRoute';

class AppRouter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.props = props;
  }

  componentDidMount() {
    AOS.init({
      duration : 1000
    })
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
          <BrowserRouter>
            <Switch>
              {/* Public Routers */}
              <PublicRoute component={App} path={ROUTES.INDEX} exact={true} />

              {/* Finally, catch all unmatched routes */}
              <Route component={App} />
            </Switch>
          </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default AppRouter;
