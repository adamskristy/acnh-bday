import { Link, useParams } from "react-router-dom";


function Calendar({ months }) {
    const { month, days } = useParams()
        //console.log(months)

//using find method
//return an object
  const selectedMonth = months.find((m) => {
    //if month param matches month.month (both strings)
    if(month === m.month){
       return true
    } else {
        return false
    }   
})

    //console.log(selectedMonth)

    return ( 
        <div className="calendar">
            <h3>{month} Calendar</h3>
            <ul>
                {/* using selected month object */}
                {selectedMonth?.days?.map((days, index) => {
                    return(
                        <Link to={`/calendar/${month}/${days}`}>
                            <li className="calendar-day" key={index}>
                                <span>{days}</span>
                            </li>  
                        </Link>                      
                    )
                })}
            </ul>
           
        </div>
     );
}
            

export default Calendar;