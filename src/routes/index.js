import React, {Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import uuidv4 from 'uuid/v4';
import PrivateRoute from './PrivateRoute';
import Loader from '../components/Loader';
import { publicRoutes, privateRoutes } from '../constants/menu';

function PageRouter() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {
            publicRoutes.map(({path, component}) => (
              <Route 
                key={ uuidv4() }
                path={ path }
                component={ component }
                exact
              />
            ))
          }
          {
            privateRoutes.map(({path, component}) => (
              <PrivateRoute
                key={ uuidv4() }
                path={ path }
                component={ component }
                menu={ privateRoutes }
                exact
              />
            ))
          }
          <Redirect to="/merchants" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default PageRouter;