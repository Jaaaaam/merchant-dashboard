import React, { useState, useContext } from 'react';
import { faChevronRight, faUserCog, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown';
import UserImage from '../assets/images/user-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {AuthContext} from '../contexts/Auth';
import { withRouter } from 'react-router-dom';
import '../assets/scss/topnav.scss';

function Topnav(props) {
  const { dispatch } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem('hris-user');
    localStorage.removeItem('hris-is-authenticated');
    dispatch({type: 'logout'});
    props.history.push('/');
  }

  return (
    <div className="topnav">
        <div className="breadcrumb-container">
          <div className="breadcrumb">
            <div className="breadcrumb-entry">Home
              <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-icon" />
            </div>
            <div className="breadcrumb-entry active">Dashboard</div>
          </div>
        </div>
        <div className="user-nav">
          <div className="user-details">
            <img src={UserImage} className="user-image" />
            <div className="user-name pointer-cursor">
              <Dropdown
               label="Starry Mae Gelvezon"
               icon={faChevronDown}
              >
                <div>
                  Settings
                </div>
                <div onClick={logout}>
                  Logout
                </div>
              </Dropdown>
            </div>
            <div className="user-settings">
              <FontAwesomeIcon icon={faUserCog} className="settings-icon"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(Topnav);