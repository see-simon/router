import React from 'react'
import {BrowserRouter as Router, Link ,Route,Switch } from "react-router-dom"
import Profile from './Profile'
import About from './About'
import Userspage from './Userspage'
import RegisterForm from './RegisterForm'
import Home from './Home'
import Register from './Register'
import Register2 from './Register2'
import UserInfo from './UserInfo'
import '../App.css'


const Menu =()=>{

    const userInfopProps = {
        name :'simon',
        surname :'thobejane',
        location: 'madisha Ditoro',
        dec : 'am the greatest of all times',
        age : 25

    }

    return(
        <>
        <Router>
           <> 
            <nav className = "homeMenu">
                
                    <li>
                        <Link to ="./">home</Link>  
                    </li>
                    <li>
                        <Link to ="./Userspage">users</Link>  
                    </li>
                    <li>
                        <Link to ="./About">about</Link>  
                    </li>
                    <li>
                        <Link to ="./Profile">profile</Link>  
                    </li>
                    
                    <li>
                        <Link to ="./Register2">Register2</Link>  
                    </li> 
                    <li>
                        <Link to ="./UserInfo">UserInfo</Link>  
                    </li> 
                    
                
                </nav>
              <Switch>
                  <Route path = '/Profile'>
                      <Profile props={userInfopProps}/>
                </Route> 
                <Route path = '/About'>
                      <About/>
                </Route> 
                <Route path = '/Userspage'>
                      <Userspage/>
                </Route>
                
                <Route path = '/Register2'>
                      <Register2/>
                </Route> 
                <Route path = '/UsreInfo'>
                      <UserInfo/>
                </Route> 
                <Route path = '/'>
                      <Register/>
                </Route> 

              </Switch>
        </>
        
        </Router>
     </>
    )

}
export default Menu
