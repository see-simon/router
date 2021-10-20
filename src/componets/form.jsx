import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import { validate } from './Register2'
import * as Yup from 'yup'

const FormData =({AddUsers})=>{

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [location, setLocation ] = useState('');
    const [age, setAge] = useState('');

    const sumitData = ( el ) =>{

        el.preventDefault()
        AddUsers(name, surname,location,age)

    }
        return(
    <>
        <form onSubmit= {sumitData}>
            
            <input type="text" value={name} onChange={(el) =>setName(el.target.value)} placeholder="enter your name" autoFocus></input>
            <input type="text"value={surname} onChange={(el) => setSurname(el.target.value)} placeholder="enter your surname" autoFocus></input>
            <input type="text" value={location} onChange={(el) => setLocation(el.target.value)} placeholder="enter your location"autoFocus></input>
            <input type="text" value={age} onChange={(el)=> setAge(el.target.value)} placeholder="enter your age"autoFocus></input>
            
            <button type="submit">add User</button>

        </form>
    </>
)

}
export default FormData