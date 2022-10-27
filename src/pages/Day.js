import { useParams, Link } from "react-router-dom";
import VillagerDetails from "../components/VillagerDetails";

function Day ({ villagers }) {
   
    const { month, day, id } = useParams()
    //console.log(villagers)

    const findAnimals = villagers.find((v) => {
        const bdayString = v["birthday-string"]

        const birthday = v.birthday
        //console.log(birthday)
            //birthday "1/1"
        const newBirthday = birthday.split('/')
        //console.log(newBirthday)
            //birthday ["1", "1"]
        
        if(bdayString.includes(month) && newBirthday[0] === day){
            return true
        } else {
            return false
        }
    })

    let animalsArr = []
    // console.log(animalsArr)
    //console.log(findAnimals)
    animalsArr.push(findAnimals)
    //console.log(animalsArr)
    


    return ( 
        <div>
            <h2>{month} {day}</h2>
            {/* {console.log(findAnimals)} */}
            {/* {console.log(Object.values(findAnimals))} */}

            <ul>
                {animalsArr?.map((animal) => {
                    return(
                        <Link to={`/calendar/${month}/${day}/villager/${animal.id}`}>
                            <li key={animal.id}>
                                <span>{animal.name['name-USen']}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>

        </div>
     );
}

export default Day ;