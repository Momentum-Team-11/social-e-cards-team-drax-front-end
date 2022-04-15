import axios from "axios";
import { useState, useRef } from "react";
import { Card } from "./Card";

export const OccasionSearch = ({ token, currentUser, comments }) => {
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
  console.log(searchResults);
  // console.log(searchTerm.current.value);
  return (
    <div>
      {" "}
      <form className="feed" onSubmit={handleSubmit}>
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
      <div className="card-container">
        <h2 className="feed">Search Results:</h2>
        {searchResults &&
          searchResults.map((card, key) => (
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
                draftId={card.pk}
                token={token}
                userId={card.user_pk}
                card_alignment={card.card_alignment}
                card_font={card.card_font}
                comments={comments}
                card_font_color={card.font_color}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
