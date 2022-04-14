import { Card } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export const FollowedCardFeedList = ({
  token,
  currentUser,
  cardId,
  comments,
}) => {
  const [cards, setCards] = useState([]);
  // let newArray = [];
  const [pages, setPages] = useState([]);
  // const [commentId, setCommentId] = useState("");
  const [currentUserPk, setCurrentUserPk] = useState("");

  console.log(comments);
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/following/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setCards(
          response.data.results.map((user, index) => {
            return user.card;
          })
        );
        setPages(response.data.next);
      });
  }, [token, cards]);
  console.log(cards);
  console.log(pages);
  cards.sort(cards.created_at).reverse();
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/user-created-cards/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setCurrentUserPk(response.data.results[0].user_pk);
        console.log(currentUserPk);
      });
  }, [token, currentUserPk]);
  if (!token) {
    return <Navigate to="/login" />;
  }
  console.log(currentUser);
  return (
    <>
      <div className="card-container">
        <h2 className="feed">Following Feed:</h2>
        {cards.map((data) => {
          return data.map((card, index) => {
            return (
              <div key={index}>
                <Card
                  currentUser={currentUser}
                  username={card.username}
                  date={card.created_at}
                  frontDescription={card.frontDescription}
                  backDescription={card.backDescription}
                  border_style={card.border}
                  card_color={card.card_color}
                  has_back={card.has_back}
                  key={card.id}
                  ProfileImageUrl={card.ProfileImageUrl}
                  CardImageUrl={card.image}
                  occasion={card.occasion}
                  like={card.like}
                  cardId={card.pk}
                  token={token}
                  userId={card.user_pk}
                  card_alignment={card.card_alignment}
                  card_font={card.card_font}
                  comments={comments}
                  currentUserPk={currentUserPk}
                  card_font_color={card}
                />
              </div>
            );
          });
        })}

        <Link to="page2">
          <button className="nextButton">Next Page</button>
        </Link>
      </div>
    </>
  );
};
