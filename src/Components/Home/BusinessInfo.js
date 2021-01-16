import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import BusinessDetails from './BusinessDetails/BusinessDetails';
import { Container, Row } from 'react-bootstrap';
const BusinessInfo = () => {

 const busData=[
  {
   name:'Opening Hours',
   description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, earum?',
   icon:faClock,
   bg:'#1CC7C1'
  },
  {
   name:'Visit Our Location',
   description:'Lorem, ipsum dolor sit.',
   icon:faMapMarker,
   bg:'#3A4256'
  },
  {
   name:'Contact us Now',
   description:'+885784748987',
   icon:faPhone,
   bg:'#1CC7C1'
  }

 ]

 return (
  <Container className="mt-5">
   <Row className=''>
   {
    busData.map((busData,index)=><BusinessDetails
     busData={busData}
     key={index}
    />)
   }
   </Row>
  </Container>
 );
};

export default BusinessInfo;