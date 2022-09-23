import React from "react"
import Calendar from 'react-calendar'



function App() {

//   const disableDates = [
//     new Date('August 19, 2022 23:15:30'), // Jan, 2nd
//     new Date('August 20, 2022 23:15:30'), // Aug, 7th
//  ]
  const disableDates = new Date('August 19, 2022 23:15:30');
  const date1=disableDates.getDate();
return(
<div className="calendar">
<Calendar
 tileDisabled={({date}) => date.getDate()===date1}
/>
</div>
)
}


export default App;
