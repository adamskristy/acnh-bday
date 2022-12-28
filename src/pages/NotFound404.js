import { Link } from "react-router-dom";

function NotFound404() {
  return (
    <div className="box section">
      <h2 className="title p-6">Sorry, there are no matching results</h2>
      <Link to="/">
        <button className="button is-primary">Home</button>
      </Link>
    </div>
  );
}

export default NotFound404;
