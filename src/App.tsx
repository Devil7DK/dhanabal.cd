import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Desktop } from './containers';
import { Routes } from './Routes';
import { history } from './redux';

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Desktop>
        <Routes />
      </Desktop>
    </ConnectedRouter>
  );
};

export default App;
