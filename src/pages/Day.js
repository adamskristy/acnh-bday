import { useParams, Link } from "react-router-dom";
import Back from "../components/Back";

function Day({ villagers }) {
  const { month, day } = useParams();
  //console.log(villagers)

  const filteredAnimals = villagers.filter((v) => {
    const bdayString = v["birthday-string"];
    //console.log(bdayString)
    //birthday-string "January 1st"

    const birthday = v.birthday;
    //console.log(birthday)
    //birthday "1/1"
    const newBirthday = birthday.split("/");
    //console.log(newBirthday)
    //birthday ["1", "1"]

    return bdayString.includes(month) && newBirthday[0] === day;
  });

  //console.log(filteredAnimals)

  return (
    <div className="container ">
      <h2 className="title is-3 mt-6">
        {month} {day}
      </h2>
      <div className="columns">
        {filteredAnimals?.map((animal) => {
          return (
            <div>
              {animal ? (
              <div className="column is-one-fifth">
                <Link
                  key={animal.id}
                  to={`/calendar/${month}/${day}/villager/${animal.id}`}
                >
                  {/* {console.log(animal.id)} */}
                  <div className="image is-128x128 ">
                    <img src={animal["icon_uri"]} alt="villager"></img>
                  </div>
                  <span className="is-size-4">{animal.name["name-USen"]}</span>
                </Link>
              </div>
              ) : (
                <div><h1>Sorry, there are no villagers with that birthdate.</h1></div>
              
              )}
            </div>
          );
        })}
      </div>

      <Back />
    </div>
  );
}

export default Day;
