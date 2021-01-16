import { faCalendar, faCog, faFileAlt, faGripHorizontal, faHome, faHospitalUser, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';
import {handleSignOut, userSignOut} from '../../Authentication/LoginManager'

const Sidebar = () => {

 const [signIn, setSignIn]= useContext(UserContext)

 // const handlesignOut=()=>{
 //  handleSignOut().then(res=>setUser(res))
  
 // }

 const handleLogOut=()=>{
  userSignOut().then(res=>setSignIn(res))
 }
 

 return (
  <div className='d-flex flex-column justify-content-between p-3 sidebar' style={{ height: "80vh",backgroundColor:'#11D0DB' }}>
   <ul className='list-unstyled d-flex flex-column justify-content-between text-light text-decoration-none' style={{height:"50vh"}}>
    <li>
     <Link to="/" className="text-decoration-none">
      <FontAwesomeIcon icon={faHome}/><span>Home</span> 
     </Link>
    </li> 

    <li>
     <Link to="/dashboardtracking" className="text-decoration-none">
      <FontAwesomeIcon icon={faGripHorizontal}/> <span>Dashboard</span>
     </Link>
    </li> 

    <li>
     <Link to="/AppointmentDashboard" className="text-decoration-none">
      <FontAwesomeIcon icon={faCalendar}/> <span>Appointment</span>
     </Link>
    </li> 

    <li>
     <Link to="/allpatients" className="text-decoration-none">
      <FontAwesomeIcon icon={faHospitalUser}/> <span>Patients</span>
     </Link>
    </li>

    <li>
     <Link to="/prescription" className="text-decoration-none">
      <FontAwesomeIcon icon={faFileAlt}/> <span>presciptions</span>
     </Link>
    </li>  

    <li> 
     <Link to="/adddoctor" className="text-decoration-none">
      <FontAwesomeIcon icon={faUserPlus}/> <span>Add Doctor</span>
     </Link>
    </li>

    <li> 
     <Link to="/setting" className="text-decoration-none">
      <FontAwesomeIcon icon={faCog}/> <span>Setting</span>
     </Link>
    </li>    
   </ul>

  

   <div>
   <span style={{color:'red'}}></span><br/>
    <button className="text-light text-decoration-none">
    <FontAwesomeIcon icon={faSignOutAlt}/> <span onClick={handleLogOut}>Log Out</span>
    </button>
   </div>
   
  </div>
   
 );
};

export default Sidebar;