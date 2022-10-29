import { useNavigate } from "react-router-dom";

function Back () {
    const navigate = useNavigate()


    return ( 
        <div>
            <button className="button" onClick={() => navigate(-1)}>Back</button>

        </div>
     );
}

export default Back ;