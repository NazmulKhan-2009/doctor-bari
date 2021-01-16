import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { trackAppointment } from '../../../fakeData';
import Sidebar from '../Sidebar/Sidebar';
import RecentPatient from './RecentPatient/RecentPatient';
import Tracking from './Tracking/Tracking';

const DashboardTracking = () => {



 return (
  
  <Container fluid>
   <Row>

     <Col md={2} style={{ height: "100vh",backgroundColor:'#11D0DB' }}>
        <Sidebar/>
     </Col>

     <Col md={10} >
     <h6>Dashboard</h6>

       <div className="d-flex justify-content-between pt-5">
        {
         trackAppointment.map((track,index)=><Tracking 
          key={index}
          track={track}
         />)
        }
       </div>  

       <div>
        
        <RecentPatient/>

       </div>
      
     </Col>

     
     
   </Row>
  </Container>

 );
};

export default DashboardTracking;