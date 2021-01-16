import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { UserContext } from '../../../App';

const BlogCarts = ({blogs}) => {
  
const {img,name,date,title,details}=blogs



const styleBlog={
 border:'1px solid lightgray',
}
 return (
  
  

 
  <Col md={4} xs={10} style={styleBlog} className='ml-3 p-3' >
  
    <div className='p-2'>
     <div className='d-flex'>
      <img src={img} alt=""  />
       <div className='p-3'>
        <h6>{name}</h6>
        <h6>{date}</h6>
       </div>
     </div>
     <div>
      <h5>{title}</h5>
      <p>{details}</p>
     
     </div> 
    </div>
   
  </Col>
  
 
  
  
 
 );
};

export default BlogCarts;