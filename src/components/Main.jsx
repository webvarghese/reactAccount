import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Person from './Person/Person'
import AccountHead from './AccountHeads/AccountHead' 
import Schedule from './Schedules/Schedule'
import Nav from "./Nav";

function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/person/*" element={<Person />} />
        <Route path ="/accountHead/*" element={<AccountHead/>}/>
        <Route path ="/schedule" element ={<Schedule/>}/>
      </Routes>
    </>
  );
}

export default Main;
