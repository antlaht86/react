import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Moi" />, document.getElementById('root'));
registerServiceWorker();
