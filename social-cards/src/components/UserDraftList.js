import { Card } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Draft } from "./Draft";

export const UserDraftList = ({ token, currentUser }) => {
  const [cards, setCards] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/draft/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setCards(response.data.results);
        setPages(response.data.next);
      });
  }, [token, cards]);
  console.log(cards);
  console.log(pages);
  cards.sort(cards.created_at).reverse();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="card-container">
        <h2 className="feed">Drafts I Created:</h2>
        {cards.map((card, key) => {
          return (
            <div key={key}>
              <Draft
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
                CardImageUrl={card.CardImageUrl}
                occasion={card.occasion}
                like={card.like}
                draftId={card.pk}
                token={token}
                userId={card.user_pk}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
