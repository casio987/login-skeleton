import React, { FunctionComponent } from 'react';
import { HashRouter } from "react-router-dom";
import Routes from './Routes';
import SiteLayout from './components/siteLayout/SiteLayout';

const App: FunctionComponent = () => {
  return (
    <HashRouter>
      <SiteLayout>
        <Routes />
      </SiteLayout>
    </HashRouter> 
  );
}

export default App;
