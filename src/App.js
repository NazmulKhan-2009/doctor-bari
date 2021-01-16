import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Appointment from './Components/Appointment/GetAppointment/Appintment/Appointment';
import Dashboard from './Components/Dashboard/Dashboard/AppointmentDashboard';
import AllPatients from './Components/Dashboard/AppointmentPatient/AllPatients/AllPatients';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import Login from './Components/Authentication/Login';
import DashboardTracking from './Components/Dashboard/Dashboard/DashboardTracking';
import Prescription from './Components/Dashboard/Prescription/Prescription';
import Setting from './Components/Dashboard/Setting/Setting';
import PrivateRoute from './PrivateRoute/PrivateRoute';


export const UserContext=createContext()


function App() {

  // const [selectDate,setSelectDate ] = useState(new Date())
  const [user, setUser ] = useState({})
  const [signIn, setSignIn]=useState({})

  return (
    <UserContext.Provider
      value={[
        // selectDate,
        // setSelectDate,
        user,
        setUser,
        signIn, 
        setSignIn   
        ]}
    >

    
    <Router>
      <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <PrivateRoute path="/dashboardtracking">
            <DashboardTracking/>
          </PrivateRoute>

          <Route path="/appointment">
            <Appointment/>
          </Route>

          <Route path="/AppointmentDashboard">
            <Dashboard/>
          </Route>

          <Route path="/allpatients">
            <AllPatients/>
          </Route>     

          <Route path="/adddoctor">
            <AddDoctor/>
          </Route> 

          <Route path="/prescription">
            <Prescription/>
          </Route> 

          <Route path="/setting">
            <Setting/>
          </Route> 

          <Route path="/login">
            <Login/>
          </Route> 

          <Route path="*">
            <h2>NOT FOUND ANYTHING</h2>
          </Route>

          
          
        </Switch>
    </Router>

    </UserContext.Provider> 
  );
}

export default App;
