// src/components/Login/Login.js
import React from 'react';
import './Login.css';
import Authentication from '../Authentication/Authentication';

const Login = ({ onAuthenticate }) => {
  return (
    <div className="login">
      <h2>Login to Farmers Kit</h2>
      <Authentication onAuthenticate={onAuthenticate} />
    </div>
  );
};

export default Login;