import  months  from "../components/months";

function Home() {
    return ( 
        <ul>
            {months.map((month) => {
                return(
                    <li key={month.id}>
                        <h3>{month.month}</h3>
                    </li>
                )
            })}
        </ul>
     );
}

export default Home;