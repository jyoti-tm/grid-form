
/**
    Author : Jyoti Kumari
    Update By : None
    Dated : 20/02/2018
    Company : Teramatrix Technologies Pvt. Ltd.
    ClassName : UserList
    Description : This class is for displaying list of users who are registered. Data will get show in the kendo grid.
*/


import React from 'react';
// import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import kendo from '@progress/kendo-ui';
import { Grid, GridColumn } from '@progress/kendo-grid-react-wrapper';

/**
    * component for displaying list of all users.
    * fetching the data from localstorage and displaying them using the Grid of Kendo UI Grid library. 
    * @param {object} props -  react properties.
    * importing data from local storage and setting it into the initial state.

*/



class UserList extends React.Component {
    constructor(props) {
        super(props);   
        var userData = [];
        userData.push(JSON.parse(localStorage.getItem('session')));
        this.state = {
        	myuserData : userData

        }
        this.dataSource = new kendo.data.DataSource({
            data: this.state.myuserData[0],
            pageSize: 5
        });
        this.handleDelete = this.handleDelete.bind(this);
        
    }
    
    handleDelete(e){
        e.preventDefault();
        console.log('The link was clicked.');

    }
    /**
        * render
        * @return {ReactElement} markup
        * view of Grid having relevant data.
    */
    render() {
        return (
            <div style={{margin: "50px 0px 0px 0px"}}>
                <Grid
                    
                    dataSource={this.dataSource}
                    filterable={true}
                    sortable={true}
                    height={320}
                    groupable={true}
                    pageable={true}
                    editable={"inline"}
                >
                    <GridColumn field="fname" title="First Name"   />
                    <GridColumn field="lname" title="Last Name"  />
                    <GridColumn field="email" title="Email Address"  />
                    <GridColumn field="country" title="Country"  />
                    <GridColumn field="region" title="Region"  />
                    <GridColumn field="hobbies[0]" title="Hobbies" />
                    <GridColumn command={ ["destroy"]} title="Action"  width="200px" />

                </Grid>
            </div>
        );
    }
}

export default UserList;

