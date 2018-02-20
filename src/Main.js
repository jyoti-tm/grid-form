
/**
    Author : Jyoti Kumari
    Update By : None
    Dated : 20/02/2018
    Company : Teramatrix Technologies Pvt. Ltd.
    ClassName : Main
    Description : This class is for routing, on click of a buttons in the header, it will route to the respective views.
*/



import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Form from './scripts/Form'
import UserList from './scripts/UsersList'
/**
	* The Main component renders one of the two provided
	* Routes (provided that one matches). Both the /
	* and /UserList routes will match any pathname that starts
	* with / or /UserList. The / route will only match
	* when the pathname is exactly the string "/"
*/
const Main = () => (
  	<main>
  		&nbsp;	<button type="button" className="k-button k-success"> <Link to="/UserList">UserList</Link></button> &nbsp;	
  		<button type="button" className="k-button k-success" ><Link to="/">User Registration</Link></button>	
	    <Switch>
	      	<Route exact path='/' component={Form}/>
	      	<Route exact path='/UserList' component={UserList}/>
	    </Switch>
  	</main>
)
export default Main
