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
    <section className="container">
      <h3 className="title is-3 mt-6">{month} Calendar</h3>

      <div className="columns is-multiline">
        {/* using selected month object, map over days array */}
        {selectedMonth?.days?.map((days, index) => {
          return (
            <div className="column is-2">
            <Link key={index} to={`/calendar/${month}/${days}`}>
              <h3 className="column is-flex is-justify-content-center has-background-info-light py-5 is-size-5">
                {days}
              </h3>
            </Link>
            </div>
          );
        })}
      </div>
      <Back />
    </section>
  );
}

export default Calendar;
