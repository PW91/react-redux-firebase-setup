import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import store from "./Store";
import registerServiceWorker from './registerServiceWorker';



const root = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>,
root);

registerServiceWorker();
