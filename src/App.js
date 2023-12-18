// App.js
import React from 'react';
import WalletComponent from './WalletComponent';
import ContractInteraction from './ContractInteraction';
import TheGraphComponent from './TheGraphComponent';

const App = () => {
  return (
    <div>
      <h1>NFT Marketplace</h1>
      {/* Your components */}
      <WalletComponent />
      <ContractInteraction />
      <TheGraphComponent />
    </div>
  );
};

export default App;
