import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Redirect, Route } from 'react-router';

import useAuth from '../../hooks/useAuth';
//import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {user,signInUsingGoogle,setUser}= useAuth();
    console.log(user);
    const location = useLocation();
    console.log("came from",location.state?.from?.pathname);
    const redirectedPath = location.state?.from?.pathname || "/shop";
    
    return (
        <>
        < div className="form-container">
           
            <form >
                <h2 className="bg-info">login please</h2>
                <br />
                <input type="text" name="" id="name" placeholder="name"/>
                <br />
                <br />
                <input type="password" name="" id="password" placeholder="password" />
                <br />
                <br />
            
                <input type="submit" value="Submit" />
                <br />
                <p>New user? please <Link to="/register">Register</Link></p>
                <p>........or......</p>
              
            </form>
            </div>
            <div className="form-container" >
            <button className="btn-regular" onClick={signInUsingGoogle}>Sign in with Google</button>
            </div>
            {user.email &&
               //(redirectedPath?  <Redirect to={redirectedPath}/> : <Redirect to="/shop"/>)
               <Redirect to={redirectedPath}/>

            }
            
        
    </>
    );
};

export default Login;