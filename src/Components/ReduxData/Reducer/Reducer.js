import { bookingData } from "../../../fakeData";
import { BOOK_APPOINTMENT, CANCEL_APPOINTMENT } from "../Action/Action";

const initialData={
 info:[],
 bookingData:bookingData,
 formData:{}
}

export const ReducerSchedule=(state=initialData, action)=>{
 
switch (action.type) {
 case BOOK_APPOINTMENT:
  let createBook={id:action.id,sub:action.subject} 

   state.formData.sub=action.subject

  const bookingCart=[...state.info,createBook] 
  const sortingSl=bookingCart.map((sorting,index)=>{
    sorting.cartId=index+1
    return sorting
  })
  return {...state, info:sortingSl}
  

 case CANCEL_APPOINTMENT:

 const findschedule=state.info.filter(searchId=>searchId.cartId!==action.cartId)
  
 const finalData=findschedule.map((sortCartId,index)=>{
    sortCartId.cartId=index+1
    return sortCartId
  })
  return {...state,info:finalData}

 default:return state;
}

}