import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Footer from '../../../Home/Footer/Footer';
import Header from '../../../Home/Header';
import GetAppointment from '../GetAppointment';
import ScheduleAppointment from '../ScheduleAppointment/ScheduleAppointment';
import './Appointment.css'



const Appointment = () => {

  const [selectDate,setSelectDate]=useState(new Date())
 // const [selectDate,setSelectDate]=useContext(UserContext)

 const handleDate=(date)=>{
  setSelectDate(date)
 }


 return (
  <div>
    <div className='app_container'>
     <Header color={"#6c757d"}/>
     <GetAppointment
        handleDate={handleDate}
        value={selectDate}
     /> 
     <div className='pt-5'>
      <ScheduleAppointment
        date={selectDate}
      />
     </div>
     
     <div className='pt-5'>
      <Footer/>
     </div>
     
      
    </div>
   
  </div>

 );
};

export default Appointment;