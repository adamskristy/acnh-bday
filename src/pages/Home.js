import  months  from "../components/months";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home() {
    return ( 
        <div className="home-container">
            
                {months.map((month) => {
                    return(
                        <Link key={month.id} to={`/calendar/${month.month}`}>
                            <h3 className="home-month">{month.month}</h3>
                        </Link>
                    )
                })}
            
            <Form />
        </div>
        
     );
}

export default Home;