import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Navigation.css'
import navLogo from '../../images/navlogo.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const userIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg={'info'} variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand >
                        <img src={navLogo} style={{ height: "40px", width: "50px" }} alt="" />
                        <span style={{ color: "white", fontWeight: "800", marginLeft: "20px" }}>Care Hospital</span>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={HashLink} to="/home" >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>

                        {user?.email ?
                            <Nav className='ml-4'>
                                
                                <span> <Button onClick={logOut} className='bg-info mr-2' style={{border:'none',outline:'none',fontSize:'larger'}}>  {userIcon} </Button> <span style={{color:'yellow', fontWeight:'700'}}>{user.displayName}</span></span>
                            </Nav> :
                            <Nav.Link as={HashLink} to="/login">Log in</Nav.Link>}


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Navigation;