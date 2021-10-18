import React from 'react';

import useFirebase from '../hooks/useFirebase';

const LogIn = () => {
    const { user, signInWithGoogle, logOut } = useFirebase();
    return (
        <div>
            <h1>This is login Page</h1>

            {user.displayName ? <div>
                <p>{user.displayName} and {user.email}</p>
                <button className='btn btn-danger' onClick={logOut}>Log out</button>
            </div> : <button className='btn btn-warning' onClick={signInWithGoogle}>Google Sign in</button>
            }
        </div>
    );
};

export default LogIn;