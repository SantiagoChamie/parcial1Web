import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale='en'>
    <App />
  </IntlProvider>, document.getElementById("root")
);

root.render(
  <IntlProvider locale='es-ES' messages = {localeEsMessages}>
    <App />
  </IntlProvider>, document.getElementById("root")
);
