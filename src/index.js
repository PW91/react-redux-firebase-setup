import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './js/reactComponents/Home';
import Page from './js/reactComponents/Page';
import Layout from './js/reactComponents/Layout';
import store from './js/store/Store';
import registerServiceWorker from './registerServiceWorker';
import './App.css';



const root = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
	<Layout>
	<Router>
		<Switch>
			<Route exact={true} path='/' component={Home}/>
			<Route path='/page' component={Page}/>
		</Switch>
	</Router>
	</Layout>
</Provider>,
root);

registerServiceWorker();
