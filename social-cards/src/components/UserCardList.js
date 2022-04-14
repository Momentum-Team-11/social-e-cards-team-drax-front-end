import { Card } from "./Card";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

export const UserCardList = ({ token, currentUser, comments }) => {
  const [cards, setCards] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/user-created-cards/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setCards(response.data.results);
        setPages(response.data.next);
      });
  }, [token]);
  console.log(cards);
  console.log(pages);
  cards.sort(cards.created_at).reverse();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="card-container">
        <h2 className="feed">Cards I Created:</h2>
        {cards.map((card, key) => {
          return (
            <div key={key}>
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
                ProfileImageUrl={card.profile_pic}
                CardImageUrl={card.image}
                occasion={card.occasion}
                like={card.like}
                cardId={card.pk}
                token={token}
                userId={card.user_pk}
                card_alignment={card.card_alignment}
                card_font={card.card_font}
                comments={comments}
                card_font_color={card.font_color}
              />
            </div>
          );
        })}
        <Link to="page2">
          <button className="nextButton">Next Page</button>
        </Link>
      </div>
    </>
  );
};
