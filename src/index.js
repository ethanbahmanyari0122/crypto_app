import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import 'antd/dist/antd.css';
import store from './app/store'

ReactDom.render(<Router>
    <Provider store={store}>
        <App/>
    </Provider>
</Router>, document.getElementById('root'));
