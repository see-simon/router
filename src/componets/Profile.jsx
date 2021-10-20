import React from 'react'
import { useState } from 'react'

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

const Profile =({props})=>{

    const ChanceValu =()=>{
        setCount(10)
    }
    const [Count,setCount] = useState(7)


    const [items,setItems] = useState([])
    const setItemsArray = ()=>{
        setItems([...items,{
            uid :items.length,
            name: "i am item number :" +items.length
        }])
    }
    return(
        <div className ="container">
            <h2>contact</h2>
            <h4>phone: 0769982537</h4>
            <h4>email: sea6580@gmail.com</h4>
            <h4>address: P O BOX 616
                GROOTHOEK  
                0628</h4>
           
            <p>i am default value {Count}</p> 
            <button onClick={ChanceValu} > Count value </button>

            <button onClick={setItemsArray}> Array items</button>
            <ul>
                {items.map( el=> <li key={el.uid}>{el.name}</li> )}
            </ul>
            
            <p>name||    surname||    location||   age||    </p>

            <p>
                {props.name} {props.surname}, {props.dec}, {props.age}
            </p>
                 
           
          
             
        </div> 
    )

}
export default  Profile 
