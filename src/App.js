import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
import heroImage from './assets/images/login-hero-image.jpeg';
import logo from './assets/images/logo-white.png';
import './assets/scss/main.scss';
import './assets/scss/login.scss';
import './App.css';

function App() {
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
            <div className="login-main-header">
              <img src={logo}/>
            </div>
            <div className="login-sub-header">A sample text to describe the site</div>
          </div>
        </div>
      </div>
      <div className="login-form-container">
      <form className="login-form">
          <div className="login-header">Welcome Back!</div>
            <div>
              <FontAwesomeIcon icon={faAt} className="input-icon" />
              <input
                text="email"
                name="email"
                placeholder="Email"
                />
            </div>
            <div>
              <FontAwesomeIcon icon={faKey} className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                 />
            </div>
            <button className="submit-button" type="submit">Login</button>
            <div className="forgot-password">Forgot password? Click here.</div>
        </form>
      </div>
    </div>
  );
}

export default App;
