import { useNavigate } from "react-router-dom";

function Back () {
    const navigate = useNavigate()


    return ( 
        <div className="section">
            <button className="button is-primary" onClick={() => navigate(-1)}>Back</button>

        </div>
     );
}

export default Back ;