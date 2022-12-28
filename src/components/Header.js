import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" hero is-primary">
      <div className="hero-body">
        <Link to="/">
          <h1 className="title is-3">
            Animal Crossing: New Horizons Birthday Database
          </h1>
          <h2 className="subtitle">
            Find out the Birthday of your favorite villager
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
