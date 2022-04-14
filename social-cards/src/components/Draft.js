import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import axios from "axios";

const Draft = ({
  userId,
  username,
  date,
  frontDescription,
  backDescription,
  border_style,
  card_color,
  has_back,
  ProfileImageUrl,
  CardImageUrl,
  occasion,
  like,
  link,
  draftId,
  token,
  currentUser,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardStyle, setCardStyle] = useState();

  //   switch (border_style) {
  //       case "Beaded":
  //         return setCardStyle(Beaded);
  //       case "Chain Link":
  //         return setCardStyle(chainLink);
  //       case "Subtle Triple":
  //         return setCardStyle(subtleTriple);
  //       default:
  //         return null;
  //     }
  useEffect(() => {
    const chainLink = {
      backgroundColor: card_color,
      color: "white",
      borderTop: "2px dashed #046ca3",
      borderBottom: "1px dashed #046ca3",
      boxShadow:
        "inset 0 -1px 0 0 #046ca3, inset 0 1px 0 0 #046ca3, 0 1px 0 0 #046ca3, 0 -1px 0 0 #046ca3",
      marginBottom: "1px",
    };
    const subtleTriple = {
      backgroundColor: card_color,
      color: "white",
      border: "1px dashed #ddd",
      boxShadow:
        "0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee",
      marginBottom: "10px",
      marginTop: "10px",
    };
    const Beaded = {
      backgroundColor: card_color,
      color: "white",
      borderTop: "3px dotted #e5e5e5",
      borderBottom: "3px dotted #e5e5e5",
      boxShadow:
        "inset 0 -1px 0 0 #e5e5e5, inset 0 1px 0 0 #e5e5e5, 0 1px 0 0 #e5e5e5, 0 -1px 0 0 #e5e5e5",
      marginBottom: "1px",
    };
    switch (border_style) {
      case "Beaded":
        return setCardStyle(Beaded);
      case "Chain Link":
        return setCardStyle(chainLink);
      case "Subtle Triple":
        return setCardStyle(subtleTriple);
      default:
        return setCardStyle(cardStyle);
    }
  }, [border_style, card_color, cardStyle]);
  const addLike = () => {
    const options = {
      method: "POST",
      url: `https://ecard-drax.herokuapp.com/api/like/${draftId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
  const removeLike = () => {
    const options = {
      method: "DELETE",
      url: `https://ecard-drax.herokuapp.com/api/unlike/${draftId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
  const follow = () => {
    const options = {
      method: "POST",
      url: `https://ecard-drax.herokuapp.com/api/following/${userId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
  const unFollow = () => {
    const options = {
      method: "DELETE",
      url: `https://ecard-drax.herokuapp.com/api/unfollow/${userId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
  const deleteDraft = () => {
    const options = {
      method: "DELETE",
      url: `https://ecard-drax.herokuapp.com/api/draft/${draftId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
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
  //   {
  //     "Beaded: setCardStyle(Beaded),
  //     "Chain Link": setCardStyle(chainLink),
  //     "Subtle Triple": setCardStyle(subtleTriple),
  //   },[border_style])
  return (
    <div className="cardContainer">
      <div className="postHeaders">
        <img
          src={ProfileImageUrl}
          alt="profile pic"
          className="profilePic"
        ></img>
        <p>Posted By:{username}</p>
        <p>Posted on:{date}</p>
        <p>Occasion: {occasion}</p>
        <p>Likes: {like.length}</p>
        <Link to={`/mydrafts/$draftId}`}>{occasion}</Link>
      </div>

      {has_back === "true" ? (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            style={cardStyle}
            className="front card"
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <img src={CardImageUrl} alt="card pic"></img>
            <p>{frontDescription}</p>
          </div>
          <div
            style={cardStyle}
            className="back card"
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <p>{backDescription}</p>
          </div>
        </ReactCardFlip>
      ) : (
        <div
          style={cardStyle}
          className="front card"
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <img src={CardImageUrl} alt="card pic"></img>
          <p>{frontDescription}</p>
        </div>
      )}
      {username === currentUser ? (
        <>
          <button onClick={() => addLike()}>Like 👍 </button>
          <button onClick={() => removeLike()}>Unlike 👎 </button>
          <button onClick={() => follow()}>Follow User </button>
          <button onClick={() => unFollow()}>Unfollow User </button>
          <button onClick={() => deleteDraft()}>Delete Draft </button>
          <Link to={`/editdraft/${draftId}`}>Edit</Link>
        </>
      ) : (
        <>
          <button onClick={() => addLike()}>Like 👍 </button>
          <button onClick={() => removeLike()}>Unlike 👎 </button>
          <button onClick={() => follow()}>Follow User </button>
          <button onClick={() => unFollow()}>Unfollow User </button>
        </>
      )}
    </div>
  );
};

export { Draft };
