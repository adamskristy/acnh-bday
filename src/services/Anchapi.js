import { useState, useEffect } from 'react';
import Villager from '../components/Villager';


function Anchapi() {
    let [villagers, setVillagers] = useState([])

    const getAllVillagers = async () => {
        const response = await fetch(`https://acnhapi.com/v1a/villagers/`)
        const data = await response.json()
        setVillagers(data)
        // console.log(data)
        // console.log(data[1])
        // console.log(data[1].id)
    }

    useEffect(() => {
        getAllVillagers()
    },[])

    return(
        <div>
            {/* mapping through villagers array and extracting singular villager item/object */}
            {villagers.map((villager) => {
                //console.log(villager)
                return(
                    <Villager key={villager.id} villager={villager} />
                    // <div key={villager.id}>
                    // <h2>name: {villager.name}</h2>
                    // </div>
                )
            })}
        </div>
    )
}

export default Anchapi;