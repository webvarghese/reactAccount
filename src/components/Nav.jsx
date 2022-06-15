import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="nav">
      <li className="tablet">
          <Link to="/transactions">Transactions</Link>
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
        <li className="tablet">
          <Link to="/accountType">Account Type</Link>
        </li>
        <li className="tablet">
          <Link to="/prayerGroup">Prayer
          Group</Link>
        </li>
        <li className="tablet">
          <Link to="/budget">Budget</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
