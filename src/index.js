import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react'
import store from "./globalStore"

ReactDOM.render(<Provider><App store={store}/></Provider>, document.getElementById('root'));
