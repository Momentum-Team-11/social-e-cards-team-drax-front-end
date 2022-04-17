import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();
  const useHandleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setShouldRedirect(true);
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
      })
      .then();
  };
  useEffect(() => {
    if (shouldRedirect === true) {
      navigate("/home");
    }
  }, [shouldRedirect, navigate]);
  return (
    <div className="signup">
      <h2>
        <u>Sign Up</u>
      </h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={useHandleSignUp}>
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
    </div>
  );
};
