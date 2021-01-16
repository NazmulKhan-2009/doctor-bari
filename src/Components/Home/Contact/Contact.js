
import React from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
 return (
  <section 
  // style={{backgroundImage: "linear-gradient(0deg, rgba(2,173,231,0.1), rgba(2,173,231,0.1)), url('../../../../src/images/appointmentBg.png')"}}
  className="contacts mt-5"
  
  >
   <Container>

   <Col md={6}  className="font-size-14 mx-auto text-center text-light pt-3 ">
    
     <h5>Conact us</h5>
     <h1>Always Contact With Us</h1>
    
   </Col>

   <Col md={8} className="mx-auto">
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {/* TEXT AREA */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
       <Form.Label>Example textarea</Form.Label>
       <Form.Control as="textarea" rows={8} cols={10}/>
     </Form.Group>

      <div className='text-center'>
       <Button variant="primary" type="submit" className="w-25 my-2">
         Submit
       </Button>
      </div>

    </Form>
    </Col> 
    
    </Container>
  </section>
 );
};

export default Contact;