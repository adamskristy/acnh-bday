import { Link, useParams } from "react-router-dom";
import Back from "../components/Back";

function Calendar({ months }) {
  const { month } = useParams();
  //console.log(months)

  //using find method
  //return an object
  const selectedMonth = months.find((m) => {
    //if month param matches month.month (both strings)
    if (month === m.month) {
      return true;
    } else {
      return false;
    }
  });

  //console.log(selectedMonth)

  return (
    <div className="">
      <h3 className="title is-3 ml-6 mt-6">{month} Calendar</h3>
      <div className="columns is-variable is-1 is-flex-wrap-wrap">
        {/* using selected month object, map over days array */}
        {selectedMonth?.days?.map((days, index) => {
          return (
            <Link key={index} to={`/calendar/${month}/${days}`}>
              <div className="column is-12 is-size-3 p-6 mr-6 is-flex is-justify-content-center">
                {days}
              </div>
            </Link>
          );
        })}
      </div>
      <Back />
    </div>
  );
}

export default Calendar;
