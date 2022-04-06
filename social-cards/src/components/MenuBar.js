const MenuBar = () => {
  return (
    <div className="menuBar">
      <img
        src={require("./logo-placeholder.png")}
        alt="This a placeholder"
      ></img>
      <br></br>
      <a href="home">Home</a>
      <a href="explore">Explore</a>
      <a href="create-card">Create Card</a>
      <a href="profile">Your Profile</a>
    </div>
  );
};

export { MenuBar };
