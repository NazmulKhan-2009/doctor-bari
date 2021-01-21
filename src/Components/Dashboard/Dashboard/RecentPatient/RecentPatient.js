import React, { useEffect, useState } from 'react';

const RecentPatient = () => {
  const [dateWise, setDateWise]=useState([])
  
  const tarikh=new Date().toDateString()

  const matchSeen=dateWise.map(info=>{return {...info,seen:false}})
    
   
 
  let todayApp=matchSeen.filter((appInfo)=> appInfo.appointmentDate===tarikh)
  
 
  
  
  
  console.log(todayApp)
  
  // const [seen, setSeen]=useState({})

console.log(tarikh)






useEffect(()=>{
fetch("http://localhost:8000/appointments")
.then(res=>res.json())
// .then(result=>setDateWise(result))
.then(result=>{
  const tarikh=new Date().toDateString()
const matchRes=result.filter(info=>info.appointmentDate===tarikh)
setDateWise(matchRes)
}
)

},[])



const handleSeen=(ind)=>{
  dateWise.filter((info,index)=>
  index===ind ? info.seen=true:null
  )

  // const ok=dateWise.filter((info,index)=>index!==ind)
  const ok=dateWise.filter(()=>undefined!==ind) //??????????????
  // dateWise.filter(info=>console.log(info.index))
  // console.log(ok)
  setDateWise(ok)
  // setSeen({serial:ind})
  
  

}

 return (
  <div className="pt-5">
  <h6 className="pb-3">Recent Patients</h6>
   <table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Sr No</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Name</th>
        <th scope="col">Contact</th>
        <th scope="col">Prescription</th>
        <th scope="col">Treatment</th>
        <th scope="col"><input value="action" className="btn btn-primary"/></th>
      </tr>
    </thead>
    <tbody>
    {dateWise.map((info,index)=> 
    
      <tr>
        <th scope="row">{index+1}</th>
        <td>{info.appointmentDate}</td>
        <td>{info.createdDate}</td>
        <td>{info.yourname}</td>
        <td>{info.phone}</td>
        <td>{info.gender}</td>
        <td>{info.service}</td>
        <td className= {info.seen?"btn btn-primary m-1 ml-5":"btn btn-danger m-1 ml-5" } onClick={()=>handleSeen(index,info.appointmentDate)}>{info.seen?"seen":"unseen"}</td>
       
      </tr>
    )}
      
      
    </tbody>
  </table>
   
  </div>
 );
};

export default RecentPatient;