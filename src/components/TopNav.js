import React, { useContext, useEffect, useState, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { faChevronRight, faUserCog, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown/Dropdown';
import UserImage from '../assets/images/user-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {AuthContext} from '../contexts/Auth';
import uuid from 'uuid/v4';
import usePersistStorage from '../hooks/usePersistStorage';
import useWindowSize from '../hooks/useWindowSize';
import { pathnameToString } from '../helpers/utilities';
import '../assets/scss/topnav.scss';

function Topnav({ menu, history, location, ...rest }) {
  const windowSize = useWindowSize();
  const [persistedValue] = usePersistStorage('merch-dash-user');
  const [isMobile, setIsMobile] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const { pathname } = location;

  const logout = () => {
    localStorage.removeItem('merch-dash-user');
    localStorage.removeItem('merch-dash-is-authenticated');
    dispatch({type: 'logout'});
    history.push('/');
  }

  const renderMobileMenu = () => {
    return menu.map(({ path, name, icon, showInMenu, customClass }) => (
      (showInMenu) ?
        <div key={uuid()} className="dropdown-item">
          <Link to={ path }>
            { name }
          </Link>
        </div>
    : ''
    ))
  
  }

  useEffect(() => {
    const { width } = windowSize;
    if (width < 736) {
      setIsMobile(true)

      return
    }
    setIsMobile(false)

  },[windowSize])
  return (
    <div className="topnav">
      {isMobile ? (
        <Dropdown
          icon={faBars}
        >
          { renderMobileMenu() }
          <div className="dropdown-item" onClick={logout}>
            Logout
          </div>
        </Dropdown>
      ) :
      <Fragment>
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <div className="breadcrumb-entry">Home
            <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-icon" />
          </div>
      <div className="breadcrumb-entry active">{ pathnameToString(pathname) }</div>
        </div>
      </div>
      <div className="user-nav">
        <div className="user-details">
          <img src={UserImage} className="user-image" />
          <div className="user-name pointer-cursor">
            <Dropdown
              label={persistedValue.name}
              icon={faChevronDown}
            >
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item" onClick={logout}>
                Logout
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      </Fragment>
    }    
</div>
  )
}

export default withRouter(Topnav);