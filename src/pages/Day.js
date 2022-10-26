import { Link, useParams } from "react-router-dom";

function Day ({ villagers }) {
    //const bday = villagers["birthday-string"]
    const { month, day } = useParams()
    console.log(villagers)

// const findAnimals = villagers.find((v) => {
    
//     if(v["birthday-string"].includes(month) && v["birthday-string"].includes(day)){
//         return true
//     } else {
//         return false
//     }
// })
   
    return ( 
        <div>
            <h2>{month} {day}</h2>
            {/* filter through api and find birthday that matches */}
        </div>
     );
}

export default Day ;