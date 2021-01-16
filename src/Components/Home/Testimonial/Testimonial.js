import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { patientsComments } from '../../../fakeData';
import quote from '../../../images/quote.png'
import PatientsReview from './PatientsReview';
const Testimonial = () => {
 return (
  <Container fluid className='mt-5 p-5'>
   <Row className=''>
    <Col md={8} className='mt-5'>
     <h4 style={{color:'#50DCDB'}}>TESTIMONIAL</h4>
     <h1>Whats our Patients <br/>Says</h1>

    </Col>
    <Col md={4} >    
     <img src={quote} alt="" width='70%'/>          
    </Col>
   </Row>

   <Row>
   <div className='d-flex justify-content-center p-5'>

 
    {
     patientsComments.map((comments,index)=><PatientsReview
      key={index}
      commentsInfo={comments}
     />)
    }
    </div>
   </Row>


  </Container>
 );
};

export default Testimonial;