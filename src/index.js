import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev--51c0mci.us.auth0.com"
  //   clientId="FxvHp6bnYPI8G2yzlMh5BtWQpa64bh2w"
  //   redirectUri="http://localhost:3000/dashboard">
  <App />,
  // </Auth0Provider>
  document.getElementById('root')
);

serviceWorker.unregister();
