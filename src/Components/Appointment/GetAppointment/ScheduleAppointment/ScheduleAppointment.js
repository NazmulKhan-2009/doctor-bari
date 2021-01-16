import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bookAppointment, cancelAppointment } from '../../../ReduxData/Action/Action';
import AppointmentForm from './AppointmentForm/AppointmentForm';




const ScheduleAppointment = ({appInfo,btnClick,logView,remAppointment,formFill,date}) => {
// console.log(formFill.sub)
//  const [value]=useContext(UserContext)
 
 const [modalIsOpen,setIsOpen] = useState(false);
 const [notify,setNotify] = useState(false);
 console.log(notify)


  function openModal() {
    setIsOpen(true);
  }
 
  
 
  function closeModal(){
    setIsOpen(false);
  }
const handleNotify=(notification)=>{
  setNotify(notification)
}



setTimeout(
  ()=>{setNotify(false)},
  3000
  )
  
 

 return (
  <Container className='pt-5 pb-5' style={{backgroundColor:'transparent'}}>
    <div className='pb-5'>
      <h2 className='text-center text-primary'>Available Appointments on {date.toDateString()}</h2>
      {/* <h2 className='text-center text-primary'>Available Appointments on </h2> */}
    </div>
    <Row>
      
        {
          appInfo.map(appointTime=>
          
          <Col md={4} xs={6} className='d-flex flex-column text-center p-2'>
            <div className='p-4 border border-info'>
              <h4>{appointTime.subject}</h4>
              <h6>{appointTime.visitingHour}</h6>
              <p>{appointTime.totalSpace} Seats are available</p>
              <div>
              <Button onClick={()=>
              {btnClick(appointTime.id,appointTime.subject )
                openModal()
              }}>{ notify.res && notify.ser===appointTime.subject ?"Booked":"BOOK APPOINTMENT"}</Button>
              <p>{appointTime.sms}</p>
              {/* <AppointmentForm
                open={modalIsOpen}
                close={closeModal}
                subject={appointTime.subject}
              /> */}
              {/* <AppointmentForm/> */}
              </div>
            </div> 
          </Col> 
           
          
          )
        }
              <AppointmentForm
                open={modalIsOpen}
                close={closeModal}
                date={date}
                notify={handleNotify}
                // subject={formFill.sub}
                // formInfo={{sub:formFill.sub,date:appDate}}
                // formInfo={{sub:formFill.sub}}
                formInfo={formFill}
                
              />
         
      <div className="mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SL#</th>
              <th scope="col">Treatment</th>
              <th scope="col">Remove</th>
              
            </tr>
          </thead>
          <tbody>
        {
          logView.map((treatment,index)=>
        

        
            <tr className='text-center'>
              <th scope="row">{treatment.cartId}</th>
              <td>{treatment.sub}</td>
              <td style={{cursor:'pointer'}} onClick={()=>remAppointment(treatment.cartId)}>X</td>
            </tr>
            
          
        
      )
      }  
      </tbody>
        </table>
      </div>    
    </Row>
  </Container>
  
 );
};



const mapStateToProps= (state) =>{
 return {
  appInfo : state.bookingData,
  logView:state.info,
  formFill:state.formData
}
}

const mapDispatchToProps={
   btnClick :bookAppointment,
   remAppointment:cancelAppointment
 }







export default connect(mapStateToProps,mapDispatchToProps)(ScheduleAppointment)

