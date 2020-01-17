import React from 'react';
import { Link } from 'react-router-dom';
import { faUserFriends, faColumns, faFileAlt, faMoneyBillWave, faInfo, faCogs, faProjectDiagram, faKeyboard } from '@fortawesome/free-solid-svg-icons'
// import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuidv4 from 'uuid/v4';
import Logo from '../assets/images/logo.png';
import '../assets/scss/sidenav.scss';

function Sidenav({ menu, location, ...rest }) {
  return (
    <div className="sidenav">
        <div className="sidenav-content">
          <div className="sidenav-header">
            <img src={Logo} /> 
          </div>
          <div className="sidenav-menu">
                {/* {
                  menu.map(({ path, name, icon, customClass }) => (
                  <div className="sidenav-menu-list" key={ uuidv4() }>
                    // <Link to={ path }>
                      <div className={`sidenav-menu-item ${customClass} ${location.pathname === path && 'active'}`}>
                        <FontAwesomeIcon icon={icon} className="menu-icon" />
                        { name }
                      // </div>
                    </Link>
                    </div>
                  ))
                } */}
                {/* <Link to="/dashboard"> */}
                  <div className="sidenav-menu-item active">
                    <FontAwesomeIcon icon={faColumns  } className="menu-icon" />
                    Dashboard
                  </div>
                {/* </Link> */}
                {/* <Link to="/employees"> */}
                  <div className="sidenav-menu-item">
                    <FontAwesomeIcon icon={faUserFriends} className="menu-icon" />
                    Employees
                  </div>
                {/* </Link> */}
                <div className="sidenav-menu-item">
                  <FontAwesomeIcon icon={faFileAlt} className="menu-icon" />
                  Attendance
                </div>
                <div className="sidenav-menu-item">
                  <FontAwesomeIcon icon={faProjectDiagram} className="menu-icon" />
                  Projects
                </div>
                <div className="sidenav-menu-item">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="menu-icon" />
                  Payroll
                </div>
                <div className="sidenav-menu-item">
                  <FontAwesomeIcon icon={faInfo} className="menu-icon" />
                  Information
                </div>
                <div className="sidenav-menu-item last">
                  <FontAwesomeIcon icon={faCogs} className="menu-icon" />
                  Settings
                </div>
                <div className="sidenav-menu-item">
                  <FontAwesomeIcon icon={faKeyboard} className="menu-icon" />
                  Permissions
                </div>
              </div>
        </div>
      </div>
  )
}

export default Sidenav;