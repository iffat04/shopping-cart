import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const{ signInUsingGoogle} = useAuth();
    return (
        <>
        < div className="form-container">
           
        <form >
            <h2 className="bg-info">Create account</h2>
            <br />
            <input type="text" name=""  placeholder="name"/>
            <br />
            <br />
            <input type="text" name=""  placeholder="email"/>
            <br />
            <br />
            <input type="password" name=""  placeholder="password" />
            <br />
            <br />
            <input type="password" name=""  placeholder="Re-enter password" />
            <br />
            <br />
            <input type="submit" value="Submit" />
            <br />
            <p>Already Registered? please <Link to="/login">LogIn</Link></p>
            <p>........or......</p>
           
          
        </form>
        </div>
        <div className="form-container">
        <button onClick={signInUsingGoogle}>Sign in with Google</button>
        </div>
    </>
    
    );
};

export default Register;