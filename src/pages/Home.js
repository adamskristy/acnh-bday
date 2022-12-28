import months from "../components/months";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home({ villagers }) {
  return (
    <div className="box columns is-flex-wrap-wrap">
      {months.map((month) => {
        return (
          <div className="column is-one-fifth">
            <Link key={month.id} to={`/calendar/${month.month}`}>
              <h3 className="is-size-4 column py-6 is-flex is-justify-content-center">
                {month.month}
              </h3>
            </Link>
          </div>
        );
      })}

      <Form villagers={villagers} />
    </div>
  );
}

export default Home;
