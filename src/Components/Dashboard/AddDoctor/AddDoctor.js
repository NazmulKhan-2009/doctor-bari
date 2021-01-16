import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {

  const[info,setInfo]=useState({})
  const[file,setFile]= useState("")
console.log(info)
console.log(file)
  const handlBlur=(e)=>{
   setInfo({...info,[e.target.name]:e.target.value})
  }
  
  const handleFileUpload=(e)=>{
    setFile(e.target.files[0])
  }


  const handleSubmit=()=>{
    const formData=new FormData()
    formData.append('name',info.name);
    formData.append('email',info.email);
    formData.append('file',file);
    
    fetch("http://localhost:8000/addadoctor",{
      method: 'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(info=>console.log(info))
    .catch(err=>console.error(err))
 

  }




 return (
  <Container fluid>
    <Row>
     <Col md={2} style={{ height: "100vh",backgroundColor:'#11D0DB' }}>
       <Sidebar/>
     </Col>

     <Col md={5} className='offset-md-1 pt-5 '>
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input onBlur={handlBlur} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div className="form-group">
         <label for="exampleInputPassword1">Name</label>
         <input onBlur={handlBlur} type="text" name="name" className="form-control" id="exampleInputPassword1"/>
       </div>
       <div className="form-group">
         <label for="exampleFormControlFile1">Example file input</label>
         <input onChange={handleFileUpload} type="file" className="form-control-file" id="exampleFormControlFile1"/>
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
     </form>
     </Col>
    </Row>
  </Container>
 );
};

export default AddDoctor;