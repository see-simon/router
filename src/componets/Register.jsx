import React from 'react'
import { Formik, Form } from 'formik';
import RegisterForm from './RegisterForm';

const Register = ()=>{

  
    return(
        <>
            <Formik

                initialValues={{
                    _name :'',
                    surname:'',
                    location:'' ,
                    age:''   
                }}
            >
                
                {Formik =>(
                    <>

                    {console.log(Formik.values)}
                        <Form>
                            <RegisterForm label=" name: " name ="name: " type="text" placeholder ="enter your name" />
                            <RegisterForm label=" surname: " surname ="surname: " type="text" placeholder ="enter your surname"/>
                            <RegisterForm label=" location: " name ="location: " type="text" placeholder ="enter your location"/>
                            <RegisterForm label=" age: " name ="age: " type="number" placeholder ="enter your age"/>
                            <button type=" submit ">get velues</button>
                        </Form>
                    </>
                )}
            </Formik>

        </>
    );
}
export default Register