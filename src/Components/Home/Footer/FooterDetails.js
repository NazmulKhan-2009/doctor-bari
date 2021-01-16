
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const FooterDetails = ({menuList,title,children}) => {
  

 return (
 <Col md={3} xs={10} >
   <h6 className='text-primary'>{title}</h6>
   <ul className="list-unstyled" style={{marginTop:title===""  ? "30px" : 0}}>
    {
      menuList.map((menues,index)=> <li key={index} className="text-secondary pt-1" style={{cursor:'pointer'}}>
       <Link to={menues.link}>
         {menues.name}
       </Link>
      </li>)
    }

    {children && children}

   </ul>
 </Col>
 );
};

export default FooterDetails;