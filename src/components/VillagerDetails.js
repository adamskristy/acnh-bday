import { useParams } from "react-router-dom";


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
        <div className="villager">
            <h3>{villager.personality}</h3>
        </div>
     );
}

export default VillagerDetails;