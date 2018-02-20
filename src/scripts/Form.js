/**
    Author : Jyoti Kumari
    Update By : None
    Dated : 20/02/2018
    Company : Teramatrix Technologies Pvt. Ltd.
    ClassName : Form
    Description : This class is for  user to register himself/herself, the details of user will get store in localstorage
*/

/*eslint-disable*/
import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import '../assets/css/Form.css';
import { BrowserRouter as Redirect } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Modal as ReactOverlayModal } from 'react-overlays';
// import { DropDownList, MultiSelect } from '@progress/kendo-react-dropdowns';
import Modal from 'react-modal';
import kendo from '@progress/kendo-ui';
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-dropdowns-react-wrapper';
/**
    * input form commponent for user registration
*/
class Form extends Component {
    /**
        * constructor
        * @param {object} props -  react properties.
        * adding properties to our initial state.
        * saving any validation errors and the validity status of the form in the state.
        * adding a property called formErrors which will be an object with the input field names as keys and any validation errors as their values. The initial value for each key is an empty string.
        * we will have multiple boolean props(emailValid, fnameValid, passwordValid etc., which will use to enable or disable the form submit button, based on our validation results. Setting their intial values to false. )
    */
    constructor (props) {
        super(props);
        this.state = {
            fname:'',
            lname : '',
            mobile_no : '',
            email: '',
            password: '',
            cpassword :'',
            formErrors: { fname:'', lname : '',mobile_no : '',email: '', password: '', cpassword :''},
            fnameValid: false,
            lnameValid: false,
            mobile_noValid: false,
            emailValid: false,
            passwordValid: false,
            cpasswordValid: false,
            formValid: false,
            country : '',
            region :'',             
            hobbies : ["reading","cricket","football"],
            modalIsOpen: false
            // fireRedirect: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
        *function to select and pass the country value
    */
    selectCountry (val) {
        this.setState({ country: val });
    }
    /**
        *select the state and pass the value of particular country
    */
    
    selectRegion (val) {
        this.setState({ region: val });
    }
    /**
        * handle change event at input form
        * @param {SytheticEvent} e - jquery event
        * this function will get call when user types in the field
        * setState method takes a callback function as  second argument, so passing a validation function to it.
    */
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    /**
        * defining the validation function
        * setting validations for all the input fields in the for when user enters the entries in the fields
        * checking the validation, when the field doesn't pass the check, setting an error message for it and set its validity to false.
    */
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let fnameValid = this.state.fnameValid;
        let lnameValid = this.state.lnameValid;
        let mobile_noValid = this.state.mobile_noValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let cpasswordValid = this.state.cpasswordValid;
        
            switch(fieldName) {
                case 'email':
                   let eml = value.split(',');
                    for (var i in eml) {
                        emailValid = eml[i].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                        if(!emailValid){
                            break;
                        }
                    }
                   break;
                case 'password':
                    passwordValid = value.length >= 6;
                    fieldValidationErrors.password = passwordValid ? '': ' is too short';
                    break;
                case 'fname':
                    fnameValid = value.length >= 2;
                    fieldValidationErrors.fname = fnameValid ? '': ' is too short';
                    break;
                case 'lname':
                    lnameValid = value.length >= 2;
                    fieldValidationErrors.lname = lnameValid ? '': ' is too short';
                    break;
                case 'mobile_no':
                    mobile_noValid = value.length == 10;
                    fieldValidationErrors.mobile_no = mobile_noValid ? '': 'is too short';
                    break;
                case 'cpassword':
                    cpasswordValid = value.length >= 6;
                    fieldValidationErrors.cpassword = 'Password' ? '': ' is too short';
                    break;
                default:
                    break;
            }        
        /**
            * setting the new state for all react properties
            * calling setState to update the formErros  and the field validity and we pass the validateForm callback to set the value of formValid.
        */  
        this.setState({
            formErrors: fieldValidationErrors,
            fnameValid: fnameValid,
            lnameValid: lnameValid,
            mobile_noValid: mobile_noValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            cpasswordValid: cpasswordValid,
        }, this.validateForm);
    }

    /**
        * setting new state for all react properties
    */
    validateForm() {
        this.setState({formValid: this.state.fnameValid && this.state.lnameValid && this.state.mobile_noValid && this.state.emailValid && this.state.passwordValid && this.state.cpasswordValid});
        // console.log(this.state);
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }
    /**
        * handle submit form event
        * @param {SytheticEvent} e
        * storing the data in the local storage
    */
    onSubmit = (e) => {
        e.preventDefault();

        if( this.state.password !== this.state.cpassword ){
            alert("passwords do not match !");
        }else{            
            var data = [];    
            // const { fname, lname, email, password } = this.state;
            /**
                Parse the serialized data back into an aray of objects
            */
            data = JSON.parse(localStorage.getItem('session')  || "[]");
            /**
                Push the new data (whether it be an object or anything else) onto the array
            */ 
            data.push(this.state);
            /**
                Alert the array value
            */ 
            // alert(data);  /** Should be something like [Object array] */ 
            alert("success")
            /**
                Re-serialize the array back into a string and store it in localStorage
            */
            localStorage.setItem('session', JSON.stringify(data));
        }
        /**
            setting state for modal variable
        */
        this.setState({modalIsOpen: true});           
        
    }
    /**
        * render
        * @return {ReactElement} markup
        * all fields are there in the form and submission will be done with simple validations
        * adding FormErrors component for displaying any errors from the validations of the form.
        * setting the disabled attribute of the submit button based on the value of the formValid state property.
    */
    render () {        
        return (           
            <div className="row example-wrapper">
                <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                    <div className="card">
                        <div className="card-block">
                            <form className=" demoForm k-form " onSubmit={this.onSubmit} >
                                <div className="panel panel-default">
                                   <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <fieldset>
                                    <legend>User Registration Form</legend>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.fname)}`}>
                                        <label className="k-form-field">
                                            <span>First Name <span className="k-required">*</span></span>
                                            <input className="k-textbox "  required placeholder="Your First Name" name="fname" value={this.state.fname}   onChange={this.handleUserInput}/>
                                        </label>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.lname)}`}>
                                        <label className="k-form-field">
                                            <span>Last Name <span className="k-required">*</span></span>
                                            <input className="k-textbox"  required placeholder="Your Last Name" name="lname" value={this.state.lname}  onChange={this.handleUserInput}/>
                                        </label>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.mobile_no)}`}>
                                        <label className="k-form-field">
                                            <span>Mobile Number<span className="k-required">*</span></span>
                                            <input type="number" className="k-textbox"  required placeholder="Your Mobile Number" name="mobile_no" value={this.state.mobile_no}  onChange={this.handleUserInput}/>
                                        </label>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                        <label htmlFor="email" className="k-form-field">
                                            <span >Email <span className="k-required">*</span></span>
                                            <input type="text" className="k-textbox"   required name="email" placeholder="Email" value={this.state.email} onChange={this.handleUserInput} />
                                        </label>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                        <label className="k-form-field" htmlFor="password">
                                            <span>Password <span className="k-required">*</span></span>
                                            <input type="password" className="k-textbox"  required name="password" placeholder="Password" value={this.state.password} onChange={this.handleUserInput}  />
                                        </label>
                                    </div>
                                    <div className={`form-group ${this.errorClass(this.state.formErrors.cpassword)}`}>
                                        <label className="k-form-field" >
                                            <span>Confirm Password <span className="k-required">*</span></span>
                                            <input type="password" className="k-textbox" required placeholder="Confirm Password" name="cpassword"  value={this.state.cpassword} onChange={this.handleUserInput}/>
                                        </label>
                                    </div>
                                    <div>
                                        <span>Select Hobbies<span className="k-required">*</span></span> 
                                        <MultiSelect dataSource={this.state.hobbies}  placeholder="Select hobbies" value={this.state.hobbies}/>
                                    </div>
                                    
                                    <label className="k-form-field" >
                                        <span>Select Country<span className="k-required">*</span></span>                                        
                                        <CountryDropdown className="form-control" value={this.state.country} onChange={(val) => this.selectCountry(val)} />
                                    </label>
                                    
                                    <label className="k-form-field" >
                                        <span>Select Region<span className="k-required">*</span></span>
                                        <RegionDropdown className="form-control" country={this.state.country} value={this.state.region} placeholder="Select Region" onChange={(val) => this.selectRegion(val)} />
                                    </label>
                                                             
                                </fieldset>                                    
                                <div className="text-right">
                                    <button type="button" type="submit" className="k-button k-primary" disabled={!this.state.formValid} >Submit</button>
                                    {/*
                                        <Modal isOpen={this.state.modalIsOpen} contentLabel="Example Modal" > 
                                            <div>
                                                <p>Success</p>
                                            </div>
                                        </Modal>
                                    */}
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;


