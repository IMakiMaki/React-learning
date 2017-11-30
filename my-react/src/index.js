import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Product from './Product';

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();
