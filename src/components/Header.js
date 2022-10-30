
import { Link } from "react-router-dom";


function Header () {
    return ( 
        <div className=" hero is-primary">
            <div className="hero-body">
                <Link to='/' > 
                    <h1 className="title is-3">Animal Crossing: New Horizons Birthday's</h1>
                    <h2 className="subtitle">A directory of the birthdays of ACNH</h2>
                </Link>
            </div>
        </div>
     );
}

export default Header;