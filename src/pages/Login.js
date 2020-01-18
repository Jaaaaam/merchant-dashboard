import React, { useState, useContext } from 'react';

import { Redirect } from 'react-router-dom';
import {AuthContext} from '../contexts/Auth'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
import heroImage from '../assets/images/login-hero-image.jpeg';
import logo from '../assets/images/logo-white.png';
import '../assets/scss/login.scss';

function Login(props) {
  const [ redirectToReferrer, setRedirectToReferrer ] = useState(false)
  const [form, setForm] = useState({});
  const { authState, dispatch } = useContext(AuthContext);
  const { isAuthenticated } = authState;
  let { from } = props.location.state || { from: { pathname: "/" } };

  const login = () => {
    dispatch({ type: 'login', payload: form });
    setRedirectToReferrer(true);
    props.history.push("/dashboard");
  }

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value  
    })
  }

  if (redirectToReferrer) return (
    <Redirect to={from} />
  )

  return (
      <div className="login">
        <div
          className="login-hero-image-container"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="hero-image-overlay">
            <div className="login-heading">
              <ReactCSSTransitionGroup
                transitionName="fade-in"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={500} 
                >
                <div className="login-main-header">
                  <img src={logo}/>
                </div>
                <div className="login-sub-header">A sample text to describe the site</div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
        <div className="login-form-container">
        <ReactCSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={500}
          >
        <form className="login-form" onSubmit={login}>
            <div className="login-header">Welcome Back!</div>
              <div>
                <FontAwesomeIcon icon={faAt} className="input-icon" />
                <input
                  text="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleFormChange}
                  />
              </div>
              <div>
                <FontAwesomeIcon icon={faKey} className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleFormChange}
                   />
              </div>
              <button className="submit-button" type="submit">Login</button>
              <div className="forgot-password">Forgot password? Click here.</div>
          </form>
        </ReactCSSTransitionGroup>
        </div>
      </div>
    );
}

export default Login;