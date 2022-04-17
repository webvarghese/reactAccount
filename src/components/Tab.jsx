import { Link } from "react-router-dom";
import {useState} from 'react'

function Tab({onSearch}) {
  const [strSearch, setStrSearch] = useState('')
  
  return (
    <>
      <ul className="nav">
        <li className="tablet">
          <Link to="/some">Some</Link>
        </li>
        <li className="tablet">
          <Link to="/somemore">Somemore</Link>
        </li>
        <li className="tablet">
          <input
          type="text"
          placeholder="search here"
          value={strSearch}
          onChange={(e) => setStrSearch(e.target.value)}
          onKeyDown={()=>onSearch(strSearch)}
          />
        </li>
      </ul>
    </>
  );
}

export default Tab;
