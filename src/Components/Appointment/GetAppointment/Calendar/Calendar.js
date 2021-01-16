
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const MyCalendar=({handleDate,value})=>{
  
  // const [value,onChang]=useContext(UserContext)
  // const [value,onChang]=useState(new Date())
  
console.log(value)
  return (
    <div>
      <Calendar
        onChange={handleDate}
        value={value}
        // minDate={new Date(2020,10,25)}
        // maxDate={new Date(2020,11,25)}
      /> 
      
    </div>
  );
}

export default MyCalendar