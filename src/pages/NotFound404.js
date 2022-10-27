import { Link } from "react-router-dom";

function NotFound404 () {
    return ( 
        <div>
            <h2>Sorry, there are no matching results</h2>
            <Link to='/'>Home</Link>
            
        </div>
     );
}

export default NotFound404 ;