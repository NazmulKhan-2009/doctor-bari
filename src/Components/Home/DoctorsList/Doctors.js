import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { doctor } from '../../../fakeData';
import DoctorsList from './DoctorsList';

const Doctors = () => {
 return (
  <Container>
   <Row>
     {/* {
      doctor.map((doctors,index)=><DoctorsList
       doctors={doctors}
       key={index}
      />)
     } */}
     <DoctorsList/>
   </Row>
  </Container>
 );
};

export default Doctors;