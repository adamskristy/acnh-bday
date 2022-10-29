
import { Link } from "react-router-dom";


function Header () {
    return ( 
        <div>
            <Link to='/' > 
                <h1 className="section title is-1 is-family-primary">Animal Crossing: New Horizons Birthday Directory</h1>
            </Link>
        </div>
     );
}

export default Header;