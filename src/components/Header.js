
import { Link } from "react-router-dom";
function Header () {
    return ( 
        <div>
         <Link className="header-link" to='/' > <h1>Animal Crossing: New Horizons Birthday Directory</h1></Link>
        </div>
     );
}

export default Header;