import { useParams } from "react-router-dom";
import Back from "./Back";

function VillagerDetails({ villagers }) {
  const { id } = useParams();
  //console.log(id)

  const findAnimalById = villagers.find((v) => {
    if (id.toString() === v.id.toString()) {
      return true;
    } else {
      return false;
    }
  });

  //console.log(findAnimalById)

  const villager = findAnimalById;

  return (
    villager && (
      <div className="box">
        <div className="is-flex is-justify-content-space-evenly pt-6 ">
          <div className="image">
            <img src={villager["image_uri"]} alt="villager"></img>
          </div>
          <div className="">
            <h2 className="is-size-2">Name: {villager.name["name-USen"]}</h2>
            <h3 className="is-size-2">
              Birthday: {villager["birthday-string"]}
            </h3>
            <h3 className="is-size-2">Species: {villager.species}</h3>
            <h3 className="is-size-2">Personality: {villager.personality}</h3>
            <h3 className="is-size-2">
              Saying: "<span className="is-italic">{villager.saying}</span>"{" "}
            </h3>
          </div>
        </div>
        <Back />
      </div>
    )
  );
}

export default VillagerDetails;
