import "./App.css";
import { Login } from "./components/Login";
import { MenuBar } from "./components/MenuBar";
import { PublicCardList } from "./components/PublicCardList";
import { CreateCard } from "./components/CreateCard";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Logout } from "./components/Logout";
import { SignUp } from "./components/SignUp";
import { Profile } from "./components/Profile";
import { UserCardList } from "./components/UserCardList";
import { FollowedCardFeedList } from "./components/FollowedCardFeedList";
import { CardDetail } from "./components/CardDetail";
import { EditCard } from "./components/EditCard";
import { UserDraftList } from "./components/UserDraftList";
import { EditDraft } from "./components/EditDraft";
import { OccasionSearch } from "./components/OccasionSearch";
import { CustomizeProfile } from "./components/CustomizeProfile";
import { EditProfile } from "./components/EditProfile";
import axios from "axios";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [darkMode, setDarkMode] = useState(true);
  const [bodyText, setBodyText] = useState(true);
  const [profilePk, setProfilePk] = useState(localStorage.getItem("profilePk"));
  const [comments, setComments] = useState([]);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage")
  );
  const setAuth = (username, token) => {
    setToken(token);
    setUsername(username);
  };
  const isLoggedIn = username && token;

  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/comment/list/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setComments(response.data.results);
      });
  }, [token]);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  useEffect(() => {
    console.log(token);
    localStorage.setItem("token", token);
  }, [token]);
  console.log(username);
  useEffect(() => {
    localStorage.setItem("profilePk", profilePk);
  }, [profilePk]);
  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  console.log(profilePk);
  document.body.style.background = `${darkMode ? "white" : "black"}`;
  document.body.style.color = `${darkMode ? "black" : "white"}`;
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setBodyText(!bodyText);
  };

  return (
    <BrowserRouter>
      <button className="darkMode" onClick={() => toggleDarkMode()}>
        Toggle Dark Mode
      </button>
      <br></br>

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="login"
          element={
            <header>
              {isLoggedIn ? (
                <Navigate to="/home" />
              ) : (
                <div className="mainPage">
                  <MenuBar
                    setAuth={setAuth}
                    token={token}
                    profilePk={profilePk}
                  />
                  <PublicCardList token={token} />
                </div>
              )}
              <Login setAuth={setAuth} setProfilePk={setProfilePk} />
              <h2 className="feed">Or:</h2>
              <SignUp />
            </header>
          }
        />
        <Route
          path="logout"
          element={
            <header>
              <Logout setAuth={setAuth} token={token} />
            </header>
          }
        />
        <Route
          path="signup"
          element={
            <header>
              <SignUp />
            </header>
          }
        />
        <Route
          path="explore"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <PublicCardList
                setComments={setComments}
                comments={comments}
                currentUser={username}
                token={token}
              />
            </div>
          }
        />
        <Route
          path="search"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <OccasionSearch
                currentUser={username}
                token={token}
                comments={comments}
              />
            </div>
          }
        />
        <Route
          path="create"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <CreateCard
                profileImage={profileImage}
                comments={comments}
                token={token}
                username={username}
              />
            </div>
          }
        />
        <Route
          path="mycards"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <UserCardList
                comments={comments}
                currentUser={username}
                token={token}
              />
            </div>
          }
        />
        <Route
          path="mydrafts"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <UserDraftList
                currentUser={username}
                token={token}
                comments={comments}
              />
            </div>
          }
        />
        <Route
          path="home"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <FollowedCardFeedList
                comments={comments}
                currentUser={username}
                token={token}
              />
            </div>
          }
        />
        <Route
          path="profile"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <Profile
                token={token}
                username={username}
                profilePk={profilePk}
              />{" "}
            </div>
          }
        />
        <Route
          path="customize-profile"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <CustomizeProfile
                token={token}
                username={username}
                profilePk={profilePk}
                setProfilePk={setProfilePk}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
              />{" "}
            </div>
          }
        />
        <Route
          path="edit-profile/:profilePk"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <EditProfile
                token={token}
                username={username}
                profilePk={profilePk}
                setProfilePk={setProfilePk}
              />{" "}
            </div>
          }
        />
        <Route
          path="cards/:cardId"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <CardDetail comments={comments} token={token} />
            </div>
          }
        />
        <Route
          path="edit/:cardId"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <EditCard token={token} comments={comments} />
            </div>
          }
        />
        <Route
          path="editdraft/:draftId"
          element={
            <div className="mainPage">
              <MenuBar setAuth={setAuth} token={token} profilePk={profilePk} />
              <EditDraft token={token} username={username} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
