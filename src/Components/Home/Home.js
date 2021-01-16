import React from 'react';
import Demo from '../Demo';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import BusinessInfo from './BusinessInfo';
import Contact from './Contact/Contact';
import Doctors from './DoctorsList/Doctors';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Header from './Header';
import HeaderSection from './HeaderSection';
import './Home.css'
import Blog from './OurBlog/Blog';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
 return (
  <div>
   <div className='home_container'>  
  
   <Header/>
   <HeaderSection/>
   <BusinessInfo/>
   </div>
   <Services/>
   <Features/>
   <AppointmentSection/>
   <Testimonial/>
   <Blog/>  
   <Doctors/>
   <Contact/>
   <Footer/>
   

  </div>
 );
};

export default Home;