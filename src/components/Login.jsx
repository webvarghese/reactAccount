import { useState } from "react";

const Login = ({ logged }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      alert("Please enter User Name to login");
      return;
    }
    logged(true);
  };
  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>User Name</label>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-block" value="Login" />
      </form>
    </>
  );
};
export default Login;
