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
  // const disableDates = new Date('August 20, 2022 23:15:30');
  // const date1=disableDates.getDate();
return(
<div className="calendar">
<Calendar
 tileDisabled={({date}) => {
  
  return disableDates.find(element => date.getDate() === element.getDate() );}}
/>
</div>
)
}


export default App;
