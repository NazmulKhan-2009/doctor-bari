import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import PatientsData from '../PatientsData/PatientsData';

const AllPatients = () => {
 return (
  <Container fluid>

   <Row>
    <Col md={2} style={{ height: "100vh",backgroundColor:'#11D0DB' }}>
     <Sidebar/>
    </Col>

    <Col md={10}>
     <div>
      <h6 className='pb-5'>Patients</h6>
     </div>
     <PatientsData/>
    </Col>

   </Row>

  </Container>
   
  
 );
};

export default AllPatients;