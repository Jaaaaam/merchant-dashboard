import React, { useContext, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { AuthContext } from '../contexts/Auth';
import usePersistStorage from '../hooks/usePersistStorage';

import Topnav from '../components/TopNav';
import Sidenav from '../components/SideNav';

function PrivateRoute({ menu, component: Component, ...rest }) {
  const { authState } = useContext(AuthContext)
  const [persistedValue] = usePersistStorage('merch-dash-is-authenticated');

  return (
    <Route 
      { ...rest }
      render=
      { 
        props => authState.isAuthenticated || persistedValue ? 
      (
        <Fragment>
          <ReactCSSTransitionGroup
            transitionName="fade-in"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Topnav />
          </ReactCSSTransitionGroup>
          <Sidenav menu={ menu } />
          <div className="content">
            <Component { ...props } />
          </div>
        </Fragment>
      ) :
      <Redirect to={{
        pathname:'/login',
        state: { from: props.location }
      }}
      />
    }
    >
    </Route>
  )
}

export default PrivateRoute;