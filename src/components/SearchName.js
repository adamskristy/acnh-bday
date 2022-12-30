import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchName({ villagers }) {
  const navigate = useNavigate();

  //set state for search by name form
  const [nameData, setNameData] = useState("");

  const handleChangeName = (e) => {
    setNameData(e.target.value);
  };

  //search by name form
  const handleSubmitByName = (e) => {
    //prevent refresh of page on form submission
    e.preventDefault();

    //if data matches whats in search return true
    const findByName = villagers.find((v) => {
      //need to fix search by uppercase
      if (nameData === v.name["name-USen"].toLowerCase()) {
        return true;
      } else {
        navigate("/notfound");
        return false;
      }
    });
    //console.log(findByBirthday)
    let matchedAnimal = findByName;
    //console.log(matchedAnimal)

    const bdayString = matchedAnimal["birthday-string"];
    console.log(bdayString);
    const newBdayString = bdayString.split(" ");
    const month = newBdayString[0];

    const birthday = matchedAnimal.birthday;
    const newBirthday = birthday.split("/");
    const day = newBirthday[0];

    navigate(`/calendar/${month}/${day}/villager/${matchedAnimal.id}`);

    //clear form after submission
    setNameData("");
  };

  return (
    <div>
      <form className="mt-2" onSubmit={handleSubmitByName}>
        <label className="label" name="search">
          Search by Name
        </label>
        <p className="help"> Please enter the name in lowercase.</p>
        <div className="field is-grouped control has-icons-left">
          <input
            className="input control"
            name="search"
            type="text"
            placeholder="Name"
            //connect with state to keep track
            value={nameData}
            //updates state when user types
            onChange={handleChangeName}
          />
          <span className="icon is-small is-left">
            <i class="fa-solid fa-cake-candles"></i>
          </span>
          <input
            className="button is-primary"
            type="submit"
            value="Submit"
            name="search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchName;
