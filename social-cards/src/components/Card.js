import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({
  username,
  date,
  frontDescription,
  backDescription,
  border_color,
  card_color,
  has_back,
  ProfileImageUrl,
  CardImageUrl,
  occasion,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardStyle = {
    color: "white",
    backgroundColor: card_color,
    border: `solid ${border_color} 2px`,
  };
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
        <p>Occasion:{occasion}</p>
      </div>
      {has_back === true ? (
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
    </div>
  );
};

export { Card };
