import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="nav">
        <li className="tablet">
          <Link to="/">Home</Link>
        </li>
        <li className="tablet">
          <Link to="/about">About</Link>
        </li>
        <li className="tablet">
          <Link to="/person">Person</Link>
        </li>
        <li className="tablet">
          <Link to="/accountHead">Account Head</Link>
        </li>
        <li className="tablet">
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
