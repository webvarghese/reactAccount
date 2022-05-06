import Login from "./components/Login";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(true);
  const logged = (log) => {
    setAuth(log);
  };
  return <>{auth ? <Main /> : <Login logged={logged} />}</>;
}

export default App;
