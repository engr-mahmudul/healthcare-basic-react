import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from '../../images/authbanner.png'
import './Login.css'


const LogIn = () => {
  const { user, email, password, error, signInWithGoogle, setName, setEmail, setPassword, setIsLogIn, createNewUser, logInUser, setError, isLogIn, logOut } = useAuth();
  const location = useLocation();
  const history = useHistory()
  const SubmitHandler = (e) => {
    e.preventDefault()

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Email Formation is not Correct')
      return
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z\d@$!%*?&,.]{8,}$/.test(password)) {
      setError('Password must have 8 characters including Uppercase, Lowercase,Number and Special Character[@$!%*?&,.]')
      return
    }
    else {
      setError('')
    }
    isLogIn ? logInUser(email, password) : createNewUser(email, password)

  }
  const nameHandler = (event) => {
    setName(event.target.value)
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }
  const checkBoxHandler = (event) => {
    setIsLogIn(event.target.checked)
  }
  //----------------------------------signin with google-------------------
  const redirect_url = location.state?.from || '/';
  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then((result) => {
        console.log(result.user)
        history.push(redirect_url);
    })
}
  return (
    <Container>
      <Row className="parent-div">
        <Col lg={6} md={6} sm={12} xs={12} className='left-div'>
          <img src={image} alt="" />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="right-div">

          <h2 style={{ marginTop: '30px', fontWeight: '800', color: "#018B97" }}> User Authentication</h2>
          <div className='form-div'>
            <div>
              {/* Here Toggle is working For Log in or Register  */}
              <h4 style={{ color: "#018B97", fontWeight: "700" }}>Please {isLogIn ? "Log In" : "Register"}</h4>
              {/* Toggle completed  */}
              <form onSubmit={SubmitHandler}>
                {
                  !isLogIn && <div>
                    <input onBlur={nameHandler} type="text" placeholder="Name" />
                  </div>
                }
                <input onBlur={emailHandler} type="text" placeholder="Email" />
                <input onBlur={passwordHandler} type="password" placeholder="Password" />
                <div className='error-div'>
                  {
                    error.length > 0 && <div className='error-message'>
                      <p >{error}</p>
                    </div>
                  }

                </div>
                <input style={{ marginTop: '10px', backgroundColor: '#018B97', color: 'white' }} type="submit" value={isLogIn ? 'Log In' : 'Register'} />
                <div className='mt-4 text-info fw-bold'>
                  <div className="form-check">
                    <input onChange={checkBoxHandler} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Click Here For Log In
                    </label>

                  </div>
                </div>

              </form>

              {/* <button className='btn' onClick={passwordResetMail}>Forgot password?</button> */}

            </div>
          </div>
          {/*------------------------- Google Sign In part------------ */}
          <div className='pb-4'>
          <button className='btn px-5' style={{ backgroundColor: '#1B92AA', color: 'white', fontWeight: "700" }}
                onClick={handleGoogleSignIn}
              >Click here for Google Sign in</button>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export default LogIn;