import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './js/reactComponents/General/Layout';
import Home from './js/reactComponents/HomePage/Home';
import Files from './js/reactComponents/FilesPage/Files';
import Stats from './js/reactComponents/StatsPage/Stats';
import store from './js/store/Store';
import registerServiceWorker from './registerServiceWorker';
import './App.css';



const root = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
	<Router>
		<Switch>
			<Layout>
				<Route exact={true} path='/' component={Home}/>
				<Route path='/files' component={Files}/>
				<Route path='/stats' component={Stats}/>
			</Layout>
		</Switch>
	</Router>
</Provider>,
root);

registerServiceWorker();
