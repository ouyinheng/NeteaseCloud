import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterList />, document.getElementById('root'));
registerServiceWorker();
