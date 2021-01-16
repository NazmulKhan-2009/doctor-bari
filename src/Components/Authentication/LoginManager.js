import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";





export const initializeLoginFramework=() => {

 if(firebase.apps.length===0){
   firebase.initializeApp(firebaseConfig)
 }
 
};

export const handleGoogleSignIn=()=>{
 const provider = new firebase.auth.GoogleAuthProvider();

 return firebase.auth().signInWithPopup(provider).then((result)=>{
 
 const {displayName,email}=result.user

 const user={
  name:displayName,
  email,
  isSignIn:true
 }
  
 return user
  
 }).catch((error)=>{
  console.log(error)
 
 });

}



export const handleFacebookSignIn=()=>{
  const faceBookProvider = new firebase.auth.FacebookAuthProvider();

 return firebase.auth().signInWithPopup(faceBookProvider).then(function(result) {
    const {displayName,email}=result.user

 const user={
  name:displayName,
  email,
  isSignIn:true
 }
 return user
    
  }).catch(function(error) {
    console.log(error)
    
  });
}



export const userSignOut=()=>{
 return firebase.auth().signOut()
 .then(()=>{
   const signOut={
    name:"",
    email:"",
    photo:"",
    isSignIn:false,
    onlySignOut:true,
    signOutNotify:"You Have successfully Signed Out"
    
   }
  
  return signOut
}).catch(function(error) {
 const err={
   error
 }
 return err
});
}

//custom email submit
export const handleCreateAc=(email,password,name)=>{
  
 return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
    
    const userInfo={
      
      email:user.user.email,
      isSignUp:true    
    }
    updateUserName(name)
    emailVerification()
    return userInfo 
   
  })

  .catch((error) => {
    
    const errorSignUp={
      msg:error.message,
      isSignUp:false
    }
    return errorSignUp  
  });
}
export const signInCustom=(email, password)=>{
return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    const userInfo={
      name:user.user.displayName,
      email:user.user.email,
      isSignIn:true
    }
    return userInfo
  })
  .catch((error) => {
    // console.log(error)
    const errorSignIn={
      err:error.message,
      isSignIn:false
    }
    return errorSignIn
    
    
  });
}


// khan123456780@gmail.com

 const updateUserName=name=>{
  const user = firebase.auth().currentUser;

return user.updateProfile({
  displayName: name
})
.then(()=>{

  return `Account Updated Succesfully`
 
}).catch((error)=>{

  return error
});
}

const emailVerification=()=>{
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  console.log('pls verify the email') 
}).catch(function(error) {
return error
});
}

//reset password

export const resetPassAuth=(email)=>{

var auth = firebase.auth();
// var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(email).then(function() {
console.log("email sent to reset your password")
// console.log(okay)



}).catch(function(error) {
  // console.log(error)
  // return error
  
});

}


export const tok=()=>{

 return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    return idToken
  }).catch(function(error) {
    console.log(error)
  });
  
}





























