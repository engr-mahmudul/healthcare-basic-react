import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    // ----------------------------------states -----------------------------------
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    //-------------------------------used providers --------------------------------
    const googleProvider = new GoogleAuthProvider();
    //---------------------------Email and Password create user--------------
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log("Registered", user)
                setError('')

                varificationMail()
                setUserName()
            }).catch((error) => {
                setError(error.message);
            })
    }
    const varificationMail = () => {

        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {
                // console.log(result)
            })
    }
    // -------------------Email /Password log in----------------------------------
    const logInUser = (emai, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            // Signed in 
            
            setError('')
            // ...
          })
          .finally(()=>setIsLoading(false))
          .catch((error) => {
            setError(error.message);
          });
      }
    // -------------------------Google Sign in Authentication-----------------------
    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);

    }
    // -----------------------------------sign out--------------------------- 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    // -------------------------state ovserber of firebase------------------ 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        });
    }, [])
    return {
        user, name, email, password, error, setName, setEmail, setPassword,setIsLogIn,setError,isLogIn, setIsLogIn, createNewUser,logInUser ,signInWithGoogle, logOut,isLoading, setIsLoading
    }

}
export default useFirebase;