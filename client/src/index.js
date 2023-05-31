import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';


import { App } from './App/App';
import './App/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={setupStore()}>
        <App />
    </Provider>
    // <React.StrictMode>

    // </React.StrictMode>

);