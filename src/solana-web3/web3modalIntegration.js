// web3modalIntegration.js
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: 'YOUR_INFURA_ID' // Replace with your Infura ID
      }
    },
    // Other wallet provider options can be added here
  }
});

export default web3Modal;
