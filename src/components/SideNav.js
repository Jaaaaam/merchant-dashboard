import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/logo.png';
import uuidv4 from 'uuid/v4';
import '../assets/scss/sidenav.scss';

function Sidenav({ menu, location, ...rest }) {
  return (
    <div className="sidenav">
        <div className="sidenav-content">
          <div className="sidenav-header">
          <div className="sidenav-header">
            <img src={Logo} /> 
          </div>
          </div>
          <div className="sidenav-menu">
                {
                  menu.map(({ path, name, icon, showInMenu, customClass }) => (
                  
                  (showInMenu) ?
                  <div className="sidenav-menu-list" key={ uuidv4() }>
                    <Link to={ path }>
                      <div className={`sidenav-menu-item ${customClass} ${location.pathname === path && 'active'}`}>
                        <FontAwesomeIcon icon={icon} className="menu-icon" />
                        { name }
                      </div>
                    </Link>
                  </div>
                  :
                  ''
                  ))
                }
              </div>
        </div>
      </div>
  )
}

export default withRouter(Sidenav);