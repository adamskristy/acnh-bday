import  months  from "../components/months";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home({ villagers }) {
    return ( 
        <div className="tile is-ancestor columns is-flex-wrap-wrap">
                        
                {months.map((month) => {
                    return(
                        <div className="tile is-parent column is-one-fifth">
                            <Link key={month.id} to={`/calendar/${month.month}`}>
                                <h3 className="tile is-child box is-8 has-background-grey-lighter column ">{month.month}</h3>
                            </Link>
                        </div>
                    )
                })}
            
            <Form villagers={villagers} />
        </div>
        
     );
}

export default Home;