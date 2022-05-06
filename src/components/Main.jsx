import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";

function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Main;
