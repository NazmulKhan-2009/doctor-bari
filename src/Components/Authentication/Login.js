import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../App';
import loginBg from '../../images/loginBg.png';
import "./Login.css";
import { handleCreateAc, handleFacebookSignIn, handleGoogleSignIn, initializeLoginFramework, resetPassAuth, signInCustom, tok, userSignOut } from './LoginManager';



const Login = () => {
 const [newuserBtn, setNewuserBtn]=useState(false)
 const [signIn, setSignIn]= useContext(UserContext)
 const [newUser,setNewUser]=useState({})
//  const [signIn, setSignIn]=useState({})
 const [passReset, setPassReset]=useState(false)

 const history = useHistory();
 const location = useLocation();
 const { from } = location.state || { from: { pathname: "/" } };
console.log(location.state)
 
const handleResponse=(res,redirect)=>{
  setSignIn(res)
  if(redirect){
    tok().then(res=>{
      sessionStorage.setItem('token',res)
      history.replace(from)})
    
  }
 
}
 


  console.log(newUser)
  console.log(newuserBtn)

//  let history = useHistory();

 //FACEBOOK AUTH

 const handleFaceSignIn=()=>{
  handleFacebookSignIn().then((res)=>
    handleResponse(res,true)
      )
 }

initializeLoginFramework()
//GOOGLE AUTH
 const handlegooglesignIn=()=>{
  handleGoogleSignIn().then(res=>handleResponse(res,true))
}


//CUSTOM USER AUTH

const handleBlur=(e)=>{
  const formField=e.target.name
  const inputValue=e.target.value
  let validField=true;
  if(formField==='email'){
     validField=/([a-z0-9])+@(yahoo|gmail|outlook).(com|in)$/g.test(inputValue )
  }

  if(formField==='password'){
    validField=/[a-bA-B1-9]{8}$/g.test(inputValue) 
  }

  if(validField){
      const getNewUser={...newUser}
      getNewUser[formField]=inputValue
      setNewUser(getNewUser)
  }
}

const handleUser=()=>{
  setNewuserBtn(!newuserBtn)
  
}

 const handleCustomUser=(e)=>{  
 e.preventDefault()
if(!newuserBtn && newUser.email && newUser.password){

  signInCustom(newUser.email,newUser.password)
  .then(res=>handleResponse(res,true))
}

if(newuserBtn && newUser.email && newUser.password){

  handleCreateAc(newUser.email,newUser.password,newUser.name)
  .then(res=>setSignIn(res)) 
}  

if(passReset && newUser.email){

  resetPassAuth(newUser.email)
}


}

const handleSignOut=()=>{
  userSignOut().then(res=>handleResponse(res,false))
 }

const handleResetPass=()=>{
    setPassReset(true)
 }


 return ( 
  <Container >
  <span style={{color:'red'}}>{signIn.msg}</span>
  {signIn.isSignIn ?
  <div>
   <p>{`welcome  ${signIn.name} as ${signIn.email}`} <span className="text-danger font-weight-bold" style={{cursor:"pointer"}} onClick={handleSignOut}>Sign Out</span> </p>
  <img src={signIn.photo} alt=""/>
  </div>
  :
  
  <span>{signIn.signOutNotify}</span>
  }

  {signIn.isSignUp && <span>Account created Successfully</span>}
  {!signIn.isSignIn && <span>{signIn.err}</span> }
  {/* {passReset.err ? passReset.err : <p>Plaese check your email to reset password</p>} */}

      <Row >
      
        {/* signOut */}
        {/* <div className="text-center">
          {
            newuser && <button onClick={signOut} className="btn btn-danger" >Sign Out</button>
          } 
        </div> */}

        {newUser.isSignIn &&

        <Col md={4} >
        <h5>Welcome mr<span style={{color:'red'}}>{newUser.name}</span> <span>Sign Out</span></h5>

        <div className="col-md-6 d-flex flex-column text-center" >   
          <img src={newUser.photo} alt="" />  
          <button className="btn btn-dark" onClick={handleSignOut}>Sign Out</button>
          <br/><br/>
          <Link to='/home'>Back to home</Link>
        </div> 
        </Col>


        }

        {!newUser.isSignIn &&
        <Col md={4} className=' my-form pt-5'>
          
          <h6
          style={newuserBtn ? {marginTop:"0px"}:{marginTop:"60px",paddingBottom:"50px"}}
          >{newuserBtn ? "Create An Account":"Login In"}</h6>

            
             <form onSubmit={handleCustomUser}> 

             { newuserBtn &&
             <label>
                <span>Name</span>
                <input type="text" name="name" onBlur={handleBlur}/>
              </label>
             } 

             <label>
                <span>Email</span>
                <input type="email" name="email" onBlur={handleBlur}  required/>
              </label>
             {!passReset && 
              <label>
                <span>Password</span>
                <input type="password" name="password" onBlur={handleBlur}  required/>
              </label>
             }
              
              {!newuserBtn &&
              <p className="text-danger font-weight-bold text-center py-2 px-2" style={{cursor:'pointer'}} onClick={handleResetPass}>Forget Your Password?</p>
              }
              
             
        
           {/* { newuserBtn &&  
             <>
              <label>
                <span>Confirm Password</span>
                <input type="Password" name="retype"/>
              </label>
           
             
              <label>
                <span>First Name</span>
                <input type="text" name="firstname" />
              </label>
            
            
              <label>
                <span>Last Name</span>
                <input type="text" name="lastname" />
              </label>
               
              
              
              </>
           } */}
           
           { passReset ? <button className="w-100 mt-2 btn btn-primary" type="submit" >Reset your Password</button>:

           <button className="w-100 mt-2 btn btn-primary" type="submit" >{newuserBtn ? "Sign Up": "Sign In"}</button>

           
             
           }

            </form>
            
        
              
             
                
                <div className="social-btn" >
                  
                {!newuserBtn && 
                  <div className="google-btn">
                    <img src="https://i.imgur.com/P9ZVhek.png" alt="" width="40" onClick={handlegooglesignIn}/>
                    <span style={{fontSize:"20px"}}>Continue</span>
                    {/* <img src="https://i.imgur.com/oozxCkP.png" alt="" width="40"/> */}
                    <img src="https://i.imgur.com/oozxCkP.png" alt="" width="40" onClick={handleFaceSignIn}/>
                  </div>
                }

                  <p style={{textAlign:"center"}}>{newuserBtn ? "Already have An Account ? ":"Don't Have account ?"  }<span onClick={handleUser} style={{color:"#3F90FC",cursor:"pointer"}}>{newuserBtn ? " Sign In" :" Create Account"}</span></p>
              </div> 

              
          </Col>

        }
          <Col md={6} className='ml-auto mt-2'>
            <img src={loginBg} alt="" className='img-fluid'/>    
          </Col>
        </Row>
      </Container>
 );
};

export default Login;