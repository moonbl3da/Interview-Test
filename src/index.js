import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1024157699670-8muirelvurd97u06ufkebv1n1q6nlvog.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
