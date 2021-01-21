import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { UserContext } from '../../../../../App';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width:'40%'
    
    
    
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function AppointmentForm({open, close,subject,formInfo,date,notify}){
// console.log(date.toDateString())
// console.log(formInfo.sub)
// console.log(new Date().toDateString())
const [user, setUser ]=useContext(UserContext)

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    data.service=formInfo.sub
    data.appointmentDate=date.toDateString()
    data.createdDate=new Date().toDateString()
    console.log(data)

    fetch("http://localhost:8000/addAppointment",{
    method: 'POST',
    headers:{"content-type":"application/json"},
    body: JSON.stringify(data)  
    })
    .then(res=>res.json())
    .then(success=>{
      if(success){
        close()
        notify({res:true,ser:formInfo.sub})

        
      }
     
    }
      )
      

    
  };

  // const onSubmit=data=>{

  //   data.service=formInfo.sub
  //   data.appointmentDate=formInfo.date
  //   data.createddate=new Date().toDateString()


  //   return data
  // }
  // console.log(onSubmit())
  // console.log(watch("example")); 
 
    return (
      <div>
       
        
        <Modal
          isOpen={open}
          
          onRequestClose={close}
          style={customStyles}
          contentLabel="Example Modal"
        >
         <FontAwesomeIcon icon={faWindowClose} onClick={close} style={{marginLeft:'95%',fontSize:'150%'}} />
         <div className='text-center p-4'>
          <h4 style={{color:'red'}}>{formInfo.sub}</h4>
          {/* <small>{formInfo.date.toDateString()}</small> */}
         </div>
         
         <form onSubmit={handleSubmit(onSubmit)}>

         <div class="form-group">
          
          <select name="gender" class="form-control"  ref={register({ required: true })}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            
          </select>
          {errors.gender && <span style={{color:'red'}}>This field is required</span>}
        </div>

         
          <div className="form-group">
            
            <input name="yourname" value={user.name} type="text" className="form-control" placeholder="Your Name" ref={register({ required: true })}/>
            {errors.yourname && <span style={{color:'red'}}>This field is required</span>}
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            
            <input name="phone"  className="form-control" placeholder="Your Phone" ref={register({ required: true })}/>
            {errors.phone && <span style={{color:'red'}}>This field is required</span>}
          </div>

          <div className="form-group">
            
            <input name="email" type="email" className="form-control" placeholder="Your email" value={user.email} ref={register({ required: true })}/>
            {errors.email && <span style={{color:'red'}}>This field is required</span>}
          </div>

          

          
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          
        </form>
        
        </Modal>

      
      </div>
    );
}
 
export default AppointmentForm