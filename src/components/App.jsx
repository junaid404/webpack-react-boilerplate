import React from 'react';
import Logo from '../assets/logo.svg';
import './App.scss';

const App = () => (
  <>
    <div className="container">
      <div>
        <h1>Webpack React Boilerplate!</h1>
        <div className="logo">
          <img className="spin" src={Logo} alt="logo" />
        </div>
        <p className="bottom">
          Developed by&nbsp;&nbsp;
          <span>
            <a
              className="link"
              href="https://github.com/junaid404/"
              rel="noreferrer"
              target="_blank"
            >
              Junaid Javed
            </a>
          </span>
        </p>
      </div>
    </div>
  </>
);

export default App;
