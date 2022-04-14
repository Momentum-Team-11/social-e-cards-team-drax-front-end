// import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Profile = ({ username, token, profilePk }) => {
  console.log(profilePk);
  const [cards, setCards] = useState([]);
  const [pk, setPk] = useState("");
  const [follow, setFollow] = useState([]);
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/user-created-cards/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setCards(response.data.results);
        setPk(response.data.results[0].user_pk);
      });
  }, [token]);
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/user/${pk}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setFollow(response.data.following.length);
      });
  }, [token, pk]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://ecard-drax.herokuapp.com/api/profile/${profilePk}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setProfileData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [token, profilePk]);
  console.log(pk);
  console.log(follow);
  console.log(cards);
  const profileStyle = {
    color: "white",
    backgroundImage: `url(${profileData.banner})`,
  };
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <h2>Username: {username}</h2>
      <p>Amount of people Following: {follow} </p>
      <p>Amount of Cards Created: {cards.length}</p>
      <div className="profileExample" style={profileStyle}>
        <img src={profileData.profile_pic} alt="profile avatar"></img>
        <p>First Name: {profileData.first_name}</p>
        <p>Last Name: {profileData.last_name}</p>
        <p>About Me: {profileData.about_me}</p>
      </div>
    </div>
  );
};
