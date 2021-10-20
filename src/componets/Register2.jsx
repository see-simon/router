import React,{useState} from 'react'
import FormData from './form'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import '../App.css'

export const validate = Yup.object({

    _name : Yup.string().required("Please enter your name"),
    _surname: Yup.string().required("Please enter your surname"),
    _location: Yup.string().required("Please enter your name") ,
    _age: Yup.number().required("please enter age")   

})

const RegisterForm2 = ()=>{

   

    const [users, setUsers ] = useState([])

  

    const AddUsers = (names,surname,locations,age)=>{
        setUsers([...users,{
            uid: users.length,
            _name: names,
            _surname: surname,
            _location: locations,
            _age: age
        }])

        
    }


    return(
        <div className ="container">
            <FormData AddUsers = {AddUsers}/>
            <div className = "output">
                <Link to ='./UserInfo'>{users.map(action => <p>{action.uid +1 } :  {action._name}  {action._surname}   {action._location}   {action._age}</p>)}
                </Link>
            </div>

            <div>
                <>


                </>
            </div>
               
        </div>
    )

}
export default RegisterForm2