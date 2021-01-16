import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { blog } from '../../../fakeData';
import BlogCarts from './BlogCarts';

const Blog = () => {
 return (
  <Container fluid className='p-4'>
  <div className='text-center'  >
   <h5>Our Blogs</h5>
   <h1>From Our Blogs News</h1>
  </div>
 
   <Row className='p-4'>
    
<div className='d-flex justify-content-center p-5'>
   {
    blog.map((blogs,index)=><BlogCarts
     key={index}
     blogs={blogs}  
    />)
   }
   </div>
   </Row>
  </Container>

 );
};

export default Blog;