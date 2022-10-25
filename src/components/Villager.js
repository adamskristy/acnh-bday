function Villager ({ villager }) {

    
    console.log(villager.name["name-USen"])
    
    return ( 
        <div className="villager">
            <h2>Name: {villager.name["name-USen"]}</h2>
            <h2>Species: {villager.species}</h2>
            {/* <h2>bday: {villager.birthday}</h2> */}
            <h2>Birthday: {villager["birthday-string"]}</h2>
        </div>
     );
}

export default Villager;