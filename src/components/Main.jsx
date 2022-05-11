import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Person from './Person/Person'
import Nav from "./Nav";

function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/person/*" element={<Person />} />
      </Routes>
    </>
  );
}

export default Main;
