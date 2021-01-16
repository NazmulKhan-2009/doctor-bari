import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
const BusinessDetails = ({busData}) => {



 const {name,description,icon,bg}=busData
 return (
   
    <Col md={4} xs={10} style={{background:bg, margin:'10px'}} className='d-flex pr-2 mx-auto'  >
  

    
      <div className='pt-3'>
       <FontAwesomeIcon icon={icon} className="icons" style={{fontSize:'60px',color:'white'}}/>
      </div>

      <div className='pt-3 pl-1'>
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
    
    </Col>
   
   
 );
};

export default BusinessDetails;