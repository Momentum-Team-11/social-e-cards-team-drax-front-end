import axios from "axios";
import { useState, useRef } from "react";
import { Card } from "./Card";

export const OccasionSearch = ({ token, currentUser }) => {
  const searchTerm = useRef(null);
  const [searchResults, setSearchResults] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://ecard-drax.herokuapp.com/api/search?occasion=${searchTerm.current.value}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => setSearchResults(res.data.results));
  };
  return (
    <div>
      {" "}
      <form className="section" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="search">
            search
          </label>
          <div>
            <input
              type="text"
              id="search"
              className="input is-medium"
              required
              name="search"
              ref={searchTerm}
            />
          </div>
        </div>
        <div>
          <div>
            <button type="submit" className="button is-link">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="book-list container-box">
        {searchResults &&
          searchResults.map((card, key) => (
            <div key={key}>
              Search Results:
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
                cardId={card.pk}
                token={token}
                userId={card.user_pk}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
