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
        π  Home
      </Link>
      <Link style={menuLink} to="/explore">
        π Explore
      </Link>
      <Link style={menuLink} to="/create">
        π§βπ³ Create Card
      </Link>
      <Link style={menuLink} to="/profile">
        π Profile
      </Link>
      {/* {profilePk ? ( */}
      <Link style={menuLink} to="/edit-profile/:profilePk">
        βοΈ Edit Profile
      </Link>
      {/* ) : ( */}
      <Link style={menuLink} to="/customize-profile">
        βοΈ Customize Profile
      </Link>
      {/* )} */}
      <Link style={menuLink} to="/search">
        πSearch by Occasion
      </Link>
      <Link style={menuLink} to="/mycards">
        ποΈ My Cards
      </Link>
      <Link style={menuLink} to="/mydrafts">
        ποΈ My Drafts
      </Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export { MenuBar };
