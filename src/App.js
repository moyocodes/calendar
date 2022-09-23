import React from "react"
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';



function App() {

  const disableDates = [
    new Date('August 19, 2022 23:15:30'), // Jan, 2nd
    new Date('August 20, 2022 23:15:30'),
    new Date('August 21, 2022 23:15:30'),
    new Date('August 22, 2022 23:15:30'), // Aug, 7th
 ]
 
 const base = Array.from({length: 32}, (v, i) => i)

 const excluded_dates = base.filter((dg) => dg != 20 && dg != 21 && dg != 22)
 
  // const disableDates = new Date('Sep 20 2022 00:00:00 GMT+0100');
  // const date1=disableDates.getDate();
return(
<div className="calendar">
<Calendar
 tileDisabled={({date}) => {
  return excluded_dates.find(element => date.getDate() === element)
 }  
 }
/>
</div>
)
}


export default App;
