import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import config from '../server/config';

// import { qcEcom, App, storeConfig } from 'qc-ecom';
const qcEcom = require('qc-ecom/config').default;
qcEcom.setConfig(config);

const test = require('qc-ecom');
console.log(test);
const { App, storeConfig } = require('qc-ecom');

const initialData = window.__INITIAL_DATA__;
// initialData.apiHost = config.apiHost;

ReactDOM.hydrate(
  <Provider store={storeConfig(initialData)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
