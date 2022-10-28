import  months  from "../components/months";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home({ villagers }) {
    return ( 
        <div>
            
                {months.map((month) => {
                    return(
                        <Link key={month.id} to={`/calendar/${month.month}`}>
                            <h3>{month.month}</h3>
                        </Link>
                    )
                })}
            
            <Form villagers={villagers} />
        </div>
        
     );
}

export default Home;