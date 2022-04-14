import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/auth/users/",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: `${username}`,
        password: `${password}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignUp}>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <Link to="/home">Home</Link>
    </div>
  );
};
