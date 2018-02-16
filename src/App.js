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
