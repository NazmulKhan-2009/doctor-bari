export const BOOK_APPOINTMENT='BOOKAPPOINTMENT';
export const CANCEL_APPOINTMENT='CANCELAPPOINTMENT';


export const bookAppointment=(id,subject)=>{
 return{
  type:BOOK_APPOINTMENT,
  id,
  subject
 }
}

export const cancelAppointment=(cartId)=>{
 return{
  type:CANCEL_APPOINTMENT,
  cartId
 }
}