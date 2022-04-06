import { useState } from "react";
import { requestLogin } from "../AjaxRequests";
import "../App.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    requestLogin(username, password)
      .then((res) => setToken(res.auth_token))
      .catch((e) => setError(e.message));
    console.log(username);
    console.log(password);
    console.log(token);
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
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export { Login };
