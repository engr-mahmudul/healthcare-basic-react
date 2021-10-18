import React from 'react';
import useAuth from '../../hooks/useAuth';
import image from '../../images/authentication.png'
import './Login.css'


const LogIn = () => {
    const { user, signInWithGoogle, logOut } = useAuth();
    return (
        <div>
            <h1>This is login Page</h1>
            {/* ----------------------Email password part ----------------- */}
           
                {/*------------------------- Google Sign In part------------ */}
            <div>
                {user.displayName ? <div>
                    <p>{user.displayName} </p>
                    <p>{user.email}</p>
                    <button className='btn btn-danger' onClick={logOut}>Log out</button>
                </div> :
                    <button className='btn btn-warning' 
                    onClick={signInWithGoogle} 
                    >Google Sign in</button>
                }
            </div>
        </div>
    );
};

export default LogIn;