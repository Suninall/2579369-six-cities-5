import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus } from './const/const';
import { offersPreview } from './mock/offers-preview';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      authStatus={AuthorizationStatus.Auth}
      offers={offersPreview}
    />
  </React.StrictMode>
);
