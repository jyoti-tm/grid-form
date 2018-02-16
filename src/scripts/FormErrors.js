import React from 'react';

/**
    * it is a stateless component which simply iterates through all the form validations errors and displays them.
*/
export const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )        
            } else {
                return '';
            }
        })}
    </div>