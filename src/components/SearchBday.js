import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBday({ villagers }) {
  const navigate = useNavigate();

  //set state
  const [bdayData, setBdayData] = useState("");

  const handleChangeBday = (e) => {
    //track whats in form input
    setBdayData(e.target.value);
  };

  const handleSubmitByDate = (e) => {
    //prevent refresh of page on form submission
    e.preventDefault();

    //if data matches whats in search return true
    const findByBirthday = villagers.find((v) => {
      if (bdayData === v.birthday) {
        return true;
      } else {
        navigate("/notfound");
        return false;
      }
    });
    //console.log(findByBirthday)
    let matchedAnimal = findByBirthday;
    //console.log(matchedAnimal)

    const bdayString = matchedAnimal["birthday-string"];
    //console.log(bdayString);
    const newBdayString = bdayString.split(" ");
    const month = newBdayString[0];

    const birthday = matchedAnimal.birthday;
    const newBirthday = birthday.split("/");
    const day = newBirthday[0];

    navigate(`/calendar/${month}/${day}`);

    //clear form after submission
    setBdayData("");
  };

  return (
    <div>
      <form className="block" onSubmit={handleSubmitByDate}>
        <label className="label" name="search">
          Search by Birthday
        </label>
        <p className="help"> Please enter date without any extra zeros.</p>
        <div className="field is-grouped control has-icons-left">
          <input
            className="input control"
            name="search"
            type="text"
            placeholder="Day/Month"
            //connect with state to keep track
            value={bdayData}
            //updates state when user types
            onChange={handleChangeBday}
          />
          <span className="icon is-small is-left">
            <i className="fa-solid fa-cake-candles"></i>
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

export default SearchBday;
