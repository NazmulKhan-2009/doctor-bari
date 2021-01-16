import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Row } from 'react-bootstrap';
import { oralHealth, ourAddress, service, undefine } from '../../../fakeData';
import './Footer.css'
import FooterDetails from './FooterDetails';
import { faFacebook, faGooglePlusG , faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

 return (
 <footer >
  <Container className='py-5 bgfooter'>
   <Row>
    <FooterDetails menuList={undefine} title=""/>
    <FooterDetails menuList={service} title="Services"/>
    <FooterDetails menuList={oralHealth} title="Oral Health"/>
    <FooterDetails menuList={ourAddress} title="Our Address">
    
     
     
     <ul className="list-unstyled d-flex  pt-3   text-primary">
      <li><FontAwesomeIcon icon={faFacebook}  size="3x" transform="shrink-6 left-1" /></li>
      <li><FontAwesomeIcon icon={faTwitter} size="3x" transform="shrink-6 left-1" /></li>
      <li><FontAwesomeIcon icon={faGooglePlusG}  size='3x' transform="shrink-6 left-1"/></li> 
     </ul>

     <div className="pt-5">
      <p className=''>Call Now</p>
      <button className="btn btn-primary">+0258785987</button>
     </div>
    </FooterDetails>

    
   </Row>
   
  </Container>
  <div  className='text-center'>
     <p>Copy right {new Date().getFullYear()}. All Right Reserved</p>
  </div>  
 </footer> 
 );
};

export default Footer;