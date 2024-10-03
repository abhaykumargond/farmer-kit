// src/utils/phantom.js
export const connectPhantomWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const response = await window.solana.connect();
      return response.publicKey.toString();
    } catch (err) {
      console.error("Failed to connect to Phantom wallet:", err);
      return null;
    }
  } else {
    if (isMobile()) {
      const redirectUrl = encodeURIComponent(window.location.href);
      window.location.href = `https://phantom.app/ul/browse/${redirectUrl}`;
    } else {
      alert("Phantom wallet not found. Please install it.");
    }
    return null;
  }
};

export const disconnectPhantomWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      await window.solana.disconnect();
      return true;
    } catch (err) {
      console.error("Failed to disconnect from Phantom wallet:", err);
      return false;
    }
  } else {
    alert("Phantom wallet not found. Please install it.");
    return false;
  }
};

const isMobile = () => {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
};