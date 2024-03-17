import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const browserLanguage = navigator.language || navigator.userLanguage;
const languageWithoutRegionCode = browserLanguage.toLowerCase().split(/[_-]+/)[0];

let messages;
let locale;

if (languageWithoutRegionCode === "es") {
  messages = localeEsMessages;
  locale = "es";
} else {
  messages = localeEnMessages;
  locale = "en";
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
);