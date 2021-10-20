import React from 'react'
import { useField } from 'formik'

const RegisterForm = ({label, ...props})=>{

    const {field, meta} = useField(props)

    return(
        <>
            <label>{label}</label>
            <input>
                
            </input>
            
        </>
    )

}
export default RegisterForm 