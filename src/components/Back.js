import { useNavigate, Link } from "react-router-dom";

function Back () {
    const navigate = useNavigate()


    return ( 
        <div className="back">
            <button onClick={() => navigate(-1)}>Back</button>

        </div>
     );
}

export default Back ;