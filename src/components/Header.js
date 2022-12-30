import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" hero is-primary">
      <div className="hero-body">
        <Link to="/">
          <div className="container">
          <h1 className="title is-3">
            Animal Crossing: New Horizons Villager Database
          </h1>
          <h2 className="subtitle">
            Find your favorite villager by their birthday!
          </h2>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
