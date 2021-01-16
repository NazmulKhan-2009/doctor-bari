import jwtDecode from 'jwt-decode';
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../App';
const PrivateRoute = ({children, ...rest}) => {

  
 const [signIn, setSignIn]= useContext(UserContext)


 const tokenVerify=()=>{
   const token=sessionStorage.getItem('token')
   if(!token || signIn.onlySignOut){
      return false
   }
   const decodeToken= jwtDecode(token)
   const currentTime=new Date().getTime()/1000
   return decodeToken.exp > currentTime
 }
 
 
 return (
  <Route
      {...rest}
      render={({ location }) =>
        (signIn.email || tokenVerify())  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
 );
};

export default PrivateRoute;
