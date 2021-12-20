// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { MsalProvider } from '@azure/msal-react'
import { IPublicClientApplication } from '@azure/msal-browser';

import ProvideAppContext from './AppContext';
import Welcome from './Welcome';

import 'bootstrap/dist/css/bootstrap.css';

// <AppPropsSnippet>
type AppProps= {
  pca: IPublicClientApplication
};
// </AppPropsSnippet>

export default function App({ pca }: AppProps) {
  // <ReturnSnippet>
  return(
    <MsalProvider instance={ pca }>
      <ProvideAppContext>
        
        

                <Welcome/>
      </ProvideAppContext>
    </MsalProvider>
  );
  // </ReturnSnippet>
}
