
/**
    Author : Jyoti Kumari
    Update By : None
    Dated : 20/02/2018
    Company : Teramatrix Technologies Pvt. Ltd.
    ClassName : App
    Description : This class is rendering the Main component
*/


import React, { Component } from 'react';
import './assets/css/App.css';
import Main from './Main'

/**
 	* render is a react lifecycle method.
 	* @return {ReactElement} HTML
 	* calling Main component here in App component.
*/
class App extends Component {
  	render() {
	    return (	    		
    		<Main />		      	
	    );
  	}
}
export default App;
