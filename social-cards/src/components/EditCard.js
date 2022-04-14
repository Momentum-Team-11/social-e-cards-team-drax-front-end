import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useParams } from "react-router-dom";

export const EditCard = ({ setAuth, token, username, comments }) => {
  const [error, setError] = useState("");
  const [frontDescription, setFrontDescription] = useState("");
  const [occasion, setOccasion] = useState("");
  const [backDescription, setBackDescription] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [cardBorder, setCardBorder] = useState("");
  const [hasBack, setHasBack] = useState("false");
  const [cardFont, setCardFont] = useState("");
  const [cardAlignment, setCardAlignment] = useState("");
  const [card, setCard] = useState(null);
  const params = useParams();
  setCard(card);
  useEffect(() => {
    axios
      .get(`https://ecard-drax.herokuapp.com/api/cards/${params.cardId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCard(res.data);
        setFrontDescription(res.data.frontDescription);
        setOccasion(res.data.occasion);
        setBackDescription(res.data.backDescription);
        setCardBorder(res.data.border);
        setCardColor(res.data.card_color);
        setHasBack(res.data.has_back);
        setCardAlignment(res.data.cardAlignment);
        setCardFont(res.data.card_font);
      });
  }, [params.cardId, token]);

  const setTheBack = (e) => {
    setBackDescription(e.target.value);
    if (e.target.value != null) {
      setHasBack("true");
    }
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setError("");
    const options = {
      method: "PUT",
      url: `https://ecard-drax.herokuapp.com/api/cards/${params.cardId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
        pk: `${params.cardId}`,
        username: username,
        occasion: occasion,
        frontDescription: frontDescription,
        backDescription: backDescription,
        like: [],
        has_back: hasBack,
        card_color: cardColor,
        border: cardBorder,
        card_font: cardFont,
        card_alignment: cardAlignment,
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
  const selectBorderOptions = [
    { value: "Chain Link", label: "Chain Link" },
    { value: "Beaded", label: "Beaded" },
    { value: "Subtle Triple", label: "Subtle Triple" },
  ];
  const selectColorOptions = [
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
    { value: "Yellow", label: "Yellow" },
    { value: "Violet", label: "Violet" },
  ];
  const selectFontOptions = [
    { value: "Roboto", label: "Roboto" },
    { value: "Open Sans", label: "Open Sans" },
    { value: "Lato", label: "Lato" },
    { value: "Oswald", label: "Oswald" },
    { value: "Concert One", label: "Concert One" },
  ];
  const selectCardAlignmentOptions = [
    { value: "Start", label: "Start" },
    { value: "End", label: "End" },
    { value: "Flex-Start", label: "Flex-Start" },
    { value: "Flex-End", label: "Flex-End" },
    { value: "Center", label: "Center" },
    { value: "Left", label: "Left" },
    { value: "Right", label: "Right" },
    { value: "Space-Between", label: "Space-Between" },
    { value: "Space-Around", label: "Space-Around" },
    { value: "Space-Evenly", label: "Space-Evenly" },
    { value: "Stretch", label: "Stretch" },
    { value: "Safe", label: "Safe" },
    { value: "Unsafe", label: "Unsafe" },
  ];
  console.log(cardColor);
  return (
    <div className="createCard">
      <h2>Create a Card</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleEdit}>
        <div className="field-controls">
          <label className="input-label" htmlFor="Occasion">
            Occasion
          </label>
          <input
            type="text"
            id="Occasion"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="frontDescription">
            Front Description
          </label>
          <input
            type="text"
            id="Front Description"
            required
            value={frontDescription}
            onChange={(e) => setFrontDescription(e.target.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="backDescription">
            Back Description(Optional)
          </label>
          <input
            type="backDescription"
            id="backDescription"
            value={backDescription}
            onChange={(e) => setTheBack(e)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="cardBorder">
            Choose a Card Border. Options: Beaded, Chain Link, Subtle Triple
          </label>

          <Select
            styles="select"
            width="200px"
            menuColor="red"
            className="select"
            value={selectBorderOptions.filter(
              (option) => option.label === cardBorder
            )}
            id="cardBorder"
            required
            defaultInputValue={cardBorder}
            options={selectBorderOptions}
            onChange={(e) => setCardBorder(e.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="cardColor">
            Choose a Card Color. Options: Red, Blue, Green, Yellow, Violet
          </label>
        </div>
        <Select
          styles="select"
          width="200px"
          menuColor="red"
          className="select"
          value={selectColorOptions.filter(
            (option) => option.label === cardColor
          )}
          id="cardColor"
          required
          options={selectColorOptions}
          onChange={(e) => setCardColor(e.value)}
        />
        <div className="field-controls">
          <label className="input-label" htmlFor="cardFont">
            Choose a Card Font. Options: Roboto, Open Sans, Lato, Oswald,
            Concert One
          </label>

          <Select
            styles="select"
            width="200px"
            menuColor="red"
            className="select"
            id="cardBorder"
            required
            value={selectFontOptions.filter(
              (option) => option.label === cardFont
            )}
            options={selectFontOptions}
            onChange={(e) => setCardFont(e.value)}
          />
        </div>
        <div className="field-controls">
          <label className="input-label" htmlFor="cardAlignment">
            Choose a Card Alignment. Options: Start, End, Flex-Start, Flex-End,
            Center, Left, Right, Normal, Space-Between, Space-Around,
            Space-Evenly, Stretch, Safe, Unsafe
          </label>
          <Select
            styles="select"
            width="200px"
            menuColor="red"
            className="select"
            id="cardBorder"
            required
            value={selectCardAlignmentOptions.filter(
              (option) => option.label === cardAlignment
            )}
            options={selectCardAlignmentOptions}
            onChange={(e) => setCardAlignment(e.value)}
          />
        </div>
        <div className="field-controls">
          <button type="submit">Submit Edit</button>
        </div>
      </form>
      <div>
        <h2>Card Preview</h2>
        <div>
          <Card
            occasion={occasion}
            frontDescription={frontDescription}
            backDescription={backDescription}
            border_style={cardBorder}
            card_color={cardColor}
            has_back={"true"}
            like=""
            card_alignment={cardAlignment}
            cardFont={cardFont}
            comments={comments}
          />
        </div>
      </div>
      <Link to="/home">Home</Link>
    </div>
  );
};
