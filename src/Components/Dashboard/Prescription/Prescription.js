import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Prescription = () => {
 return (
  <Container fluid>
   <Row>
      <Col md={2} style={{ height: "100vh",backgroundColor:'#11D0DB' }}>
        <Sidebar/>
      </Col>

      <Col className="offset-1">
      <h4>The Presciption page is underconstruction</h4>
     </Col>
   </Row>
  </Container>
 );
};

export default Prescription;