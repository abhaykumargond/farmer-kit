// src/components/Authentication/Authentication.js
import React, { useState, useEffect } from 'react';
import { connectPhantomWallet, disconnectPhantomWallet } from '../../utils/phantom';
import './Authentication.css';

const Authentication = ({ onAuthenticate, onDisconnect }) => {
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const publicKeyParam = urlParams.get('publicKey');
    console.log('Public Key from URL:', publicKeyParam); // Debugging log
    if (publicKeyParam) {
      setPublicKey(publicKeyParam);
      onAuthenticate(publicKeyParam);
    }
  }, [onAuthenticate]);

  const handleConnectWallet = async () => {
    console.log('Connecting to Phantom Wallet...'); // Debugging log
    const key = await connectPhantomWallet();
    console.log('Public Key:', key); // Debugging log
    if (key) {
      setPublicKey(key);
      onAuthenticate(key);
    }
  };

  const handleDisconnectWallet = async () => {
    const success = await disconnectPhantomWallet();
    if (success) {
      setPublicKey(null);
      onDisconnect();
    }
  };

  return (
    <div className="authentication">
      {publicKey ? (
        <div>
          <p>Connected with Public Key: {publicKey}</p>
          <button onClick={handleDisconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <div>
          <button onClick={handleConnectWallet}>Connect Phantom Wallet</button>
        </div>
      )}
    </div>
  );
};

export default Authentication;