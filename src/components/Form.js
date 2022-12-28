import SearchBday  from "./SearchBday";
import SearchName from "./SearchName";

function Form({ villagers }) {
  
  return (
    <div className="section">
      <SearchBday villagers={villagers} />
      <SearchName villagers={villagers} />

    </div>
  );
}

export default Form;
