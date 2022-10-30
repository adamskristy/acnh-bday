import { useParams, Link } from "react-router-dom";
import Back from "../components/Back";


function Day ({ villagers }) {
   
    const { month, day } = useParams()
    //console.log(villagers)

    const findAnimals = villagers.find((v) => {
        const bdayString = v["birthday-string"]
        //console.log(bdayString)
            //birthday-string "January 1st"

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
        <div className="box">
            <h2 className="title is-4 ml-6">{month} {day}</h2>
            {/* {console.log(findAnimals)} */}
            {/* {console.log(Object.values(findAnimals))} */}

            <ul>
                {animalsArr?.map((animal) => {
                    return(
                        animal && (
                        <Link key={animal.id} to={`/calendar/${month}/${day}/villager/${animal.id}`}>
                            <li >
                                {/* {console.log(animal.id)} */}
                                <span className="is-size-3 p-6 mr-4">{animal.name['name-USen']}</span>
                            </li>
                        </Link> )
                    )
                })}
            </ul>
            <Back />
        </div>
     );
}

export default Day ;