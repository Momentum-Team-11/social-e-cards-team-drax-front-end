import axios from "axios";
import { Link } from "react-router-dom";

export const Logout = ({ setAuth, token }) => {
  const setLogout = () => {
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/auth/token/logout/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
        token: `${token}`,
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
    localStorage.setItem("username", "");
    localStorage.setItem("token", "");
    localStorage.setItem("profilePk", "");
    localStorage.setItem("profileImage", "");
    setAuth("", "");
  };

  return (
    <div>
      <div className="field-controls">
        <button classname="Logout" onClick={() => setLogout()}>
          <Link to="/home">Log out</Link>
        </button>
      </div>
    </div>
  );
};
