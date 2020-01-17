import React, { Fragment } from 'react';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Login from './pages/Login';
import './assets/scss/main.scss';

function App() {
  return (
    // <Login />
    <Fragment>
      <TopNav />
      <SideNav />
    </Fragment>
  );
}

export default App;
