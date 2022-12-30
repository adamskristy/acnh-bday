import months from "../components/months";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function Home({ villagers }) {
  return (
    <section className="container">
    <div className="columns is-multiline mt-5">
      {months.map((month) => {
        return (
          <div className="column is-3">
            <Link key={month.id} to={`/calendar/${month.month}`}>
              <h3 className="is-size-4 column py-6 is-flex is-justify-content-center has-background-info-light">
                {month.month}
              </h3>
            </Link>
          </div>
        );
      })}

      <Form villagers={villagers} />
    </div>
    </section>
  );
}

export default Home;
