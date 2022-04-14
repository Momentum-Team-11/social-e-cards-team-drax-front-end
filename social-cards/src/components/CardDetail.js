import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

export const CardDetail = ({ token, comments }) => {
  const [card, setCard] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/cards/${params.cardId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCard(res.data);
      });
  }, [params.cardId, token]);

  return (
    <div className="card-container">
      {card && (
        <div>
          <Card
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
            link=""
            cardId={card.pk}
            card_alignment={card.card_alignment}
            card_font={card.card_font}
            comments={comments}
            card_font_color={card.font_color}
          />
        </div>
      )}
    </div>
  );
};
