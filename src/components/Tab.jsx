import { Link } from "react-router-dom";

function Tab() {
  return (
    <>
      <ul className="nav">
        <li className="tablet">
          <Link to="/some">Some</Link>
        </li>
        <li className="tablet">
          <Link to="/somemore">Somemore</Link>
        </li>
      </ul>
    </>
  );
}

export default Tab;
