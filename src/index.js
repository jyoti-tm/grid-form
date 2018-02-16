import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

/**
 	* render is a react lifecycle method.
*/
ReactDOM.render((
		<BrowserRouter>
			<App />
		</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
