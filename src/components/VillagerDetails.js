import { useParams } from "react-router-dom";
import Back from "./Back";


function VillagerDetails ({ villagers }) {
    const { id } = useParams()
    //console.log(id)
    
    const findAnimalById = villagers.find((v) => {
        if(id == v.id){
            return true
        } else {
            return false
        }
    })

    //console.log(findAnimalById)

    const villager = findAnimalById
    
    return ( 
        villager && (
        <div>
            <div className="card">
                <h2 className="card-header-title">Name: {villager.name['name-USen']}</h2>
                    <div className="card-content">
                        <h3 className="">Birthday: {villager["birthday-string"]}</h3> 
                        <h3>Species: {villager.species}</h3>
                        <h3>Personality: {villager.personality}</h3>
                        <h3>Saying: {villager.saying} </h3>
                    </div>
            </div>
          <Back />
        </div>
        )
     );
}

export default VillagerDetails;