import { useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Login = ({ setAuth, token }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    axios
      .post("https://ecard-drax.herokuapp.com/api/auth/token/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setAuth(username, res.data.auth_token);
      })
      .catch((e) => setError(e.message));
  };

  return (
    <div className="Login">
      <h2>Log In</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <label className="input-label" htmlFor="username">
          UserName
        </label>
        <input
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="field-controls">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <button type="submit">
            <Link to="/home">Log In</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
