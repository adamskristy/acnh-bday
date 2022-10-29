import { Link, useParams } from "react-router-dom";
import Back from "../components/Back";


function Calendar({ months }) {
    const { month } = useParams()
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
        <div>
            <h3>{month} Calendar</h3>
            <ul>
                {/* using selected month object, map over days array */}
                {selectedMonth?.days?.map((days, index) => {
                    return(
                        <Link key={index} to={`/calendar/${month}/${days}`}>
                            <li>
                                <span>{days}</span>
                            </li>  
                        </Link>                      
                    )
                })}
            </ul>
            <Back />   
        </div> 
     );
}
            

export default Calendar;