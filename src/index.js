import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/css/color.scss'
import './common/reset.css'
import './common/common.scss'
import IRouter from './router';
import { Provider } from 'react-redux'
import configStore from './redux/store'
const store = configStore();
ReactDOM.render(
    <Provider store={store}>
        <IRouter />
    </Provider>, document.getElementById('root'));
