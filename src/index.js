
/**
    Author : Jyoti Kumari
    Update By : None
    Dated : 20/02/2018
    Company : Teramatrix Technologies Pvt. Ltd.
    Description : This code is rendering the App component using BrowserRouter, It will be the first component that will get loaded when the Application starts.
*/


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
