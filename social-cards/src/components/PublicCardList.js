import { Card } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const PublicCardList = ({ token, currentUser, comments }) => {
  const [cards, setCards] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/cards/`, {
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
  cards.sort(cards.created_at);
  return (
    <>
      <div className="card-container">
        <h2 className="feed">Public Card Feed:</h2>
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
                ProfileImageUrl={card.ProfileImageUrl}
                CardImageUrl={card.CardImageUrl}
                occasion={card.occasion}
                like={card.like}
                link=""
                cardId={card.pk}
                token={token}
                userId={card.user_pk}
                card_alignment={card.card_alignment}
                card_font={card.card_font}
                comments={comments}
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
