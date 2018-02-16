import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
	it tests that the App React component can render without dying miserably. If we run npm start in the terminal we can see that our single test pass. FOr more information : https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-4-9f843c8c1ccc
*/

it('renders without crashing', () => {
  	const div = document.createElement('div');
  	ReactDOM.render(<App />, div);
  	ReactDOM.unmountComponentAtNode(div);
});
