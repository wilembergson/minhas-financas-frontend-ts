import React from 'react' 

type props ={
    label: string,
    htmlFor: string,
    children: JSX.Element
}

function FormGroup({label, htmlFor, children}: props){
    return(
        <div className="form-group">
            <label htmlFor={htmlFor}>{label}</label>
            {children} 
        </div>
    )
}

export default FormGroup