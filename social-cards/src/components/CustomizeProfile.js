import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import Select from "react-select";

export const CustomizeProfile = ({
  setAuth,
  token,
  username,
  setProfilePk,
  setProfileImage,
}) => {
  const [error, setError] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [pk, setPk] = useState("");
  const [banner, setBanner] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphqiOJ4cXtydv0_mNghDjRHoRsG7OVMEDvw&usqp=CAU"
  );
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/user-created-cards/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setPk(response.data.results[0].user_pk);
      });
  }, [token]);
  const handleLogin = () => {
    setError("");
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/profile/list/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
        user: pk,
        profile_pic: profilePic,
        first_name: firstName,
        last_name: lastName,
        about_me: aboutMe,
        banner: banner,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setProfilePk(response.data.pk);
        setProfileImage(response.data.profile_pic);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const selectProfilePicOptions = [
    {
      value:
        "https://blogs-images.forbes.com/erikkain/files/2017/05/yondu-groot.jpg",
      label: "Yondu",
    },
    {
      value:
        "https://www.nme.com/wp-content/uploads/2017/05/maxresdefault-14-696x442.jpg",
      label: "Groot",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLOsTKAP5F7RDD0H-xwUAcmHFP_007q99kg&usqp=CAU",
      label: "Star Lord",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrRlCogu2MeRyoeTFATWEZwKHGqYXK7Cw8Q&usqp=CAU",
      label: "Gamora",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeEpZLPjaCH0Sv4jZZncJxvviyAulmsv1Qw&usqp=CAU",
      label: "Rocket",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqRue2JM5ewevgcziY1Ly3e_HiHE7l79bWA&usqp=CAU",
      label: "Nebula",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhRxddIsG-HN0II3pPpj-JqWnE-KUYXM59A&usqp=CAU",
      label: "Drax",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIxAL5HwVkoSQnGVgB39nQ5ytY_Y_v4-lPg&usqp=CAU",
      label: "Groot 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCvWB_nT61kSikTMq1CP_4QJtnzlONv2CwQ&usqp=CAU",
      label: "Nebula 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4Zli2-liWkP3ImrOAmqBVCjWY9rcOoDGVQ&usqp=CAU",
      label: "Thanos",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJu3x0CoIBX-otnZUWbQTJ8AQfd9eChklNA&usqp=CAU",
      label: "Thanos 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAEhHPrENWsm0WLOhe0XktQBKiyRE_Tiplw&usqp=CAU",
      label: "Thor",
    },
  ];
  const selectBannerOptions = [
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphqiOJ4cXtydv0_mNghDjRHoRsG7OVMEDvw&usqp=CAU",
      label: "Banner 1",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1toFWU2VbpxnKoSCPqtd7sr1mE1PxkzUoDA&usqp=CAU",
      label: "Banner 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0Hj7-YpZjJ-uk1ZgwmGbeV-j7axvjEIFpA&usqp=CAU",
      label: "Banner 3",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjmyqkTf3GxDN1JncBVOYgVcdPBzB1xW3og&usqp=CAU",
      label: "Banner 4",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYpAp7BGXNlkqgaciNQSxwOKSCSp2F9HQPg&usqp=CAU",
      label: "Banner 5",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZKUe_iuEv7zofyOWHNNXYIFGhdCCjllQdA&usqp=CAU",
      label: "Banner 6",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkNKi5gsm2YiZ-S-dqKeNDZZ-a2IAS5rXWw&usqp=CAU",
      label: "Banner 7",
    },
  ];
  const profileStyle = {
    color: "white",
    backgroundImage: `url(${banner})`,
  };
  return (
    <div className="createCard">
      <h2>Customize Your Profile</h2>
      {error && <div className="error">{error}</div>}
      <form>
        <div className="field-controls">
          <label className="input-label" htmlFor="profilePic">
            Choose a Profile Avatar:
          </label>

          <Select
            styles="select"
            width="200px"
            menuColor="red"
            className="select"
            id="profilePic"
            required
            options={selectProfilePicOptions}
            onChange={(e) => setProfilePic(e.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="banner">
            Choose a Banner:
          </label>

          <Select
            styles="select"
            width="200px"
            menuColor="red"
            className="select"
            id="profilePic"
            required
            options={selectBannerOptions}
            onChange={(e) => setBanner(e.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="Front Description"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="aboutMe">
            About Me:
          </label>
          <input
            type="backDescription"
            id="backDescription"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <Link to="/home">
            <button onClick={() => handleLogin()}>Submit Profile</button>
          </Link>
        </div>
      </form>
      <div>
        <h2>Profile Preview</h2>
        <div className="profileExample" style={profileStyle}>
          <img src={profilePic} alt="profile avatar"></img>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>About Me: {aboutMe}</p>
        </div>
      </div>
      <Link to="/home">Home</Link>
    </div>
  );
};
