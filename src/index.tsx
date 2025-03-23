import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus } from './const/const';
import { offers} from './mock/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      authStatus={AuthorizationStatus.Auth}
      offers={offers}
    />
  </React.StrictMode>
);
