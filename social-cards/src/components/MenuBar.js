import { Link } from "react-router-dom";
// import { Logout } from "./Logout";

const MenuBar = (profilePk, setAuth, token) => {
  const menuLink = {
    fontSize: "30px",
  };
  return (
    <div className="menuBar">
      <img
        className="siteLogo"
        src={require("./drax_logo.png")}
        alt="This a placeholder"
      ></img>
      <br></br>
      <Link style={menuLink} to="/home">
        {" "}
        🏠 Home
      </Link>
      <Link style={menuLink} to="/explore">
        🌎 Explore
      </Link>
      <Link style={menuLink} to="/create">
        🧑‍🍳 Create Card
      </Link>
      <Link style={menuLink} to="/profile">
        😀 Profile
      </Link>
      {/* {profilePk ? ( */}
      <Link style={menuLink} to="/edit-profile/:profilePk">
        ✍️ Edit Profile
      </Link>
      {/* ) : ( */}
      <Link style={menuLink} to="/customize-profile">
        ✍️ Customize Profile
      </Link>
      {/* )} */}
      <Link style={menuLink} to="/search">
        🔎Search by Occasion
      </Link>
      <Link style={menuLink} to="/mycards">
        🗃️ My Cards
      </Link>
      <Link style={menuLink} to="/mydrafts">
        🗂️ My Drafts
      </Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export { MenuBar };
