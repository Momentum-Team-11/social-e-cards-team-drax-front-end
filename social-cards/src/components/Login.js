import { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth, token }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(username);
  console.log(password);
  const navigate = useNavigate();
  const useHandleLogin = (e) => {
    e.preventDefault();
    setError("");
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/auth/token/login",
      headers: { "Content-Type": "application/json" },
      data: { username: username, password: password },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAuth(username, response.data.auth_token);
      })
      .catch(function (error) {
        console.error(error);
      });
    navigate("/home");
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setError("");
  //   axios
  //     .post("https://ecard-drax.herokuapp.com/api/auth/token/login", {
  //       username: "fromreact",
  //       password: "chickenwings1234",
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setAuth(username, res.data.auth_token);
  //     })
  //     .catch((e) => setError(e));
  // };

  return (
    <div className="Login">
      <h2>
        <u>Log In</u>
      </h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={useHandleLogin}>
        <label className="input-label" htmlFor="username">
          UserName
        </label>
        <input
          type="text"
          id="loginUsername"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="field-controls">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="loginPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export { Login };
