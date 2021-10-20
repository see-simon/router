import React from 'react'
import { useState } from 'react'




const Hooks =()=>{

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

    return(
        
        <div className = "container">
            <h2>use state</h2>
            <h2>phone: 0769982537</h2>
            <h2>email: sea6580@gmail.com</h2>
            <h2>address: P O BOX 616
                GROOTHOEK  
                0628</h2>

                 <p>i am default value {Count}</p> 
            <button onClick={ChanceValu} > Count value </button>

            <button onClick={setItemsArray}> Array items</button>
            <ul>
                {items.map( el=> <li key={el.uid}>{el.name}</li> )}
            </ul>
            </div>  
        
    )

    }
}
export default Hooks