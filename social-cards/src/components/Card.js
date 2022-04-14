import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from "@reach/disclosure";
const Card = ({
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
  cardId,
  token,
  currentUser,
  card_alignment,
  card_font,
  card_font_color,
  comments,
  currentUserPk,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardStyle, setCardStyle] = useState();
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");
  // const [commentId, setCommentId] = useState("");
  // const blankCommentId = useId();
  const [showEditBox, setShowEditBox] = useState(false);

  useEffect(() => {
    const chainLink = {
      backgroundColor: card_color,
      color: card_font_color,
      borderTop: "2px dashed #046ca3",
      borderBottom: "1px dashed #046ca3",
      boxShadow:
        "inset 0 -1px 0 0 #046ca3, inset 0 1px 0 0 #046ca3, 0 1px 0 0 #046ca3, 0 -1px 0 0 #046ca3",
      marginBottom: "1px",
      justifyContent: card_alignment,
      fontFamily: card_font,
      display: "grid",
      borderRadius: ".5rem",
      fontSize: "30px",
    };
    const subtleTriple = {
      backgroundColor: card_color,
      color: card_font_color,
      border: "1px dashed #ddd",
      boxShadow:
        "0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee",
      marginBottom: "10px",
      marginTop: "10px",
      justifyContent: card_alignment,
      fontFamily: card_font,
      display: "grid",
      borderRadius: ".5rem",
      fontSize: "30px",
    };
    const Beaded = {
      backgroundColor: card_color,
      color: card_font_color,
      borderTop: "3px dotted #e5e5e5",
      borderBottom: "3px dotted #e5e5e5",
      boxShadow:
        "inset 0 -1px 0 0 #e5e5e5, inset 0 1px 0 0 #e5e5e5, 0 1px 0 0 #e5e5e5, 0 -1px 0 0 #e5e5e5",
      marginBottom: "1px",
      justifyContent: card_alignment,
      fontFamily: card_font,
      display: "grid",
      borderRadius: ".5rem",
      fontSize: "30px",
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
  }, [
    border_style,
    card_alignment,
    card_font,
    card_font_color,
    card_color,
    cardStyle,
  ]);
  const addLike = () => {
    const options = {
      method: "POST",
      url: `https://ecard-drax.herokuapp.com/api/like/${cardId}/`,
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
      url: `https://ecard-drax.herokuapp.com/api/unlike/${cardId}/`,
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
  const addComment = () => {
    setError(error);
    setError("");
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/comment/list/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
        user: currentUserPk,
        card: cardId,
        text: commentText,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(currentUserPk);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const editComment = (pk) => {
    setError(error);
    setError("");
    const options = {
      method: "PUT",
      url: `https://ecard-drax.herokuapp.com/api/comment/${pk}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
        user: currentUserPk,
        card: cardId,
        text: commentText,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(currentUserPk);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const deleteComment = (pk) => {
    const options = {
      method: "DELETE",
      url: `https://ecard-drax.herokuapp.com/api/comment/${pk}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(currentUserPk);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const showTheEditBox = () => {
    setShowEditBox(!showEditBox);
  };

  return (
    <div className="cardContainer">
      <div className="postHeaders">
        <img
          src={
            ProfileImageUrl ||
            "https://static.toiimg.com/thumb/msid-82940668,width-1200,height-900,resizemode-4/.jpg"
          }
          alt="profile pic"
          className="profilePic"
        ></img>
        <p>
          <b>Posted By:</b>
          {username}
        </p>
        <p>
          <b>Posted on:</b>
          {date}
        </p>
        <p>
          <b>Occasion:</b> {occasion}
        </p>
        <p>
          <b>Likes 👍:</b> {like.length}
        </p>
        <button class="cardButton">
          <Link to={`/cards/${cardId}`}>Card Detail</Link>
        </button>
      </div>

      {has_back === "true" ? (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            style={cardStyle}
            className="frontCard"
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <img
              src={
                CardImageUrl ||
                "https://static.toiimg.com/thumb/msid-82940668,width-1200,height-900,resizemode-4/.jpg"
              }
              alt="card pic"
            ></img>
            <p>{frontDescription}</p>
          </div>
          <div
            style={cardStyle}
            className="backCard"
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <p>{backDescription}</p>
          </div>
        </ReactCardFlip>
      ) : (
        <div
          style={cardStyle}
          className="frontCard"
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          <img
            src={
              CardImageUrl ||
              "https://static.toiimg.com/thumb/msid-82940668,width-1200,height-900,resizemode-4/.jpg"
            }
            alt="card pic"
          ></img>
          <p>{frontDescription}</p>
        </div>
      )}
      {username === currentUser ? (
        <div className="buttonList">
          {like.includes(currentUserPk) ? (
            <button onClick={() => removeLike()}>Unlike 👎 </button>
          ) : (
            <button onClick={() => addLike()}>Like 👍 </button>
          )}
          <button onClick={() => follow()}>Follow User </button>
          <button onClick={() => unFollow()}>Unfollow User </button>
          <Link to={`/edit/${cardId}`}>Edit</Link>
        </div>
      ) : (
        <div className="buttonList">
          {like.includes(currentUserPk) ? (
            <button onClick={() => removeLike()}>Unlike 👎 </button>
          ) : (
            <button onClick={() => addLike()}>Like 👍 </button>
          )}
          <button onClick={() => follow()}>Follow User </button>
          <button onClick={() => unFollow()}>Unfollow User </button>
        </div>
      )}
      <div>
        Comments:
        <Disclosure>
          <DisclosureButton class="disclosure">View Comments</DisclosureButton>

          <DisclosurePanel class="disclosure-panel">
            {comments.map((comment, key) => {
              if (comment.card === cardId)
                return (
                  <div key={key}>
                    {" "}
                    <p key={comment.username}>{comment.username}</p>
                    <p key={comment.text}>{comment.text}</p>
                    <button
                      key={comment.pk}
                      onClick={() => {
                        deleteComment(comment.pk);
                        console.log(comment.pk);
                      }}
                    >
                      Delete Comment
                    </button>
                    <button onClick={showTheEditBox}>Edit Comment</button>
                    {showEditBox && (
                      <div>
                        <input
                          type="text"
                          id="comment Text"
                          required
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button
                          onClick={() => {
                            editComment(comment.pk);
                          }}
                        >
                          Submit Edit
                        </button>
                      </div>
                    )}
                  </div>
                );
              else return null;
            })}
          </DisclosurePanel>
        </Disclosure>
        <form>
          {" "}
          <div className="field-controls">
            <label className="input-label" htmlFor="commentText">
              Add Comment:
            </label>
            <input
              type="text"
              id="comment Text"
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
          <div className="field-controls">
            <Link to="/home">
              <button onClick={() => addComment()}>Submit Comment</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Card };
