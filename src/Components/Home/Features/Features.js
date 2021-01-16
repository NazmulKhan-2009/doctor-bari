import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import feature from '../../../images/featured.png'
import './features.css';
const Features = () => {
 return (
  <Container className='mt-5 my_feature '>
   <Row className=''>
    <Col md={5} xs={5}>
    <div>
     <img src={feature} alt="" className='img-fluid' style={{maxHeight:'500px'}}
     />
    </div>
    </Col>

    <Col md={6} xs={5}>
    <div className='' >

    <h1>Exceptional Dental <br/> care, on Your Terms</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ad non eum autem, at odio tempora ullam, eos nam quis similique tempore est dignissimos enim molestiae quos earum iusto dolor impedit dolorum numquam molestias reiciendis nobis! Praesentium placeat, repellat hic autem quidem explicabo laborum iste minima numquam, voluptatibus modi eligendi?</p>
     <Button>Learn Details</Button>

    </div>
     
    </Col>
   </Row>
  </Container>

   
  
 );
};

export default Features;