import React, { useContext, useEffect } from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { userSignOut } from '../Authentication/LoginManager';

const Header = ({color}) => {

  const [signIn, setSignIn]= useContext(UserContext)

  const handleSignOut=()=>{
    userSignOut().then(res=>setSignIn(res))
    
  }

  const clr=color ? color : 'white'

  

  

 return (
  

  <Container fluid>
  {signIn.isSignIn ? <p style={{color:"blue",fontWeight:"bold"}}>{signIn.name} <span style={{color:'red'}} onClick={handleSignOut}> Sign Out</span></p>
  :
  <p>{signIn.signOutNotify}</p> 
  }
  
    <Navbar expand='sm' >
     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto font-weight-bold">
      <Link to="/home" className='pr-5 '>Home</Link>
      <Nav.Link href="#link" className='pr-5'>About</Nav.Link>
      <Nav.Link href="#link" className='pr-5'>Dental Srvice</Nav.Link>
      <Nav.Link href="#link" className='pr-5' style={{color:clr}}>Review</Nav.Link>
      <Link to="/dashboardtracking" className='pr-5' style={{color:clr}}>Dashboard</Link>
      <Link to="/login" className='pr-5' style={{color:clr}}>Login</Link>   
    </Nav>
    
  </Navbar.Collapse>
  
</Navbar>

  </Container>
  

 );
};

export default Header;