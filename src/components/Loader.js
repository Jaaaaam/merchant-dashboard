import React from 'react';
import '../assets/scss/loader.scss';

const Loader = (props) => {
  const { customClass } = props;

  return (
    <div className={`wm-sending ${customClass}`}>
      <svg id="wm-loading" x="0px" y="0px" viewBox="0 0 150 150">
        <circle id="loading-inner" cx="75" cy="75" r="60" />
      </svg>
    </div>
  );
};

export default Loader;
