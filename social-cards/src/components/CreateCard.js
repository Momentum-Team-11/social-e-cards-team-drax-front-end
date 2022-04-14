import { useState } from "react";
import axios from "axios";
import "../App.css";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import Select from "react-select";

export const CreateCard = ({
  setAuth,
  token,
  username,
  comments,
  profileImage,
}) => {
  const [error, setError] = useState("");
  const [frontDescription, setFrontDescription] = useState("");
  const [occasion, setOccasion] = useState("");
  const [backDescription, setBackDescription] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [cardBorder, setCardBorder] = useState("");
  const [hasBack, setHasBack] = useState("false");
  const [cardFont, setCardFont] = useState("");
  const [cardAlignment, setCardAlignment] = useState("");
  const [cardImageUrl, setCardImageURL] = useState("");
  const [cardFontColor, setCardFontColor] = useState("white");

  const setTheBack = (e) => {
    setBackDescription(e.target.value);
    if (e.target.value != null) {
      setHasBack("true");
    }
  };
  console.log(profileImage);
  const handleLogin = () => {
    setError("");
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/cards/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
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
        profile_pic: profileImage,
        font_color: cardFontColor,
        image: cardImageUrl,
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
  const submitDraft = () => {
    setError("");
    const options = {
      method: "POST",
      url: "https://ecard-drax.herokuapp.com/api/draft/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      data: {
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
        profile_pic: profileImage,
        font_color: cardFontColor,
        image: cardImageUrl,
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
  const selectFontColorOptions = [
    { value: "Red", label: "Red" },
    { value: "Black", label: "Black" },
    { value: "White", label: "White" },
    { value: "Yellow", label: "Yellow" },
    { value: "Gray", label: "Gray" },
    { value: "Silver", label: "Silver" },
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
  const selectCardImageUrl = [
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8h6YxhGjfJB74nxa9XrrMXl9xIEuajbQowA&usqp=CAU",
      label: "Birthday 1",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fO26OgJ-VKP_l_eshyFYtJV5OuTEyWCjew&usqp=CAU",
      label: "Birthday 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiTuV6BEvCXHsFL_EUmUd6Usj3rjVs5IEXA&usqp=CAU",
      label: "Birthday 3",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25bndbBrfViESThStL20rxYm6a-WmjK6hgNa4_Mnwomvn9MN_z6rr3TBjttjzXwlxIdk&usqp=CAU",
      label: "Anniversary 1",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTqMQYekudpYkBFn5hRq6A3l6dL55ehnZ_6uxHk8ff37LG7_s0zUoUXXRY6c0j9g88WM&usqp=CAU",
      label: "Anniversary 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGL50y7MXqHV1jXfLhZ5AC6BVZ0u0mQTBzA&usqp=CAU",
      label: "Anniversary 3",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBGwAacVKPvrP4Nm3njU2zgv1e33xW12RWw&usqp=CAU",
      label: "Congratulations 1",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9YekDOQKvH60J-FeJ-dSAQ9rsufvVGuOHQ&usqp=CAU",
      label: "Congratulations 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEC-5lYq_oc6pvkrxyU-kWPpL5tTxtfydDQ&usqp=CAU",
      label: "Congratulations 3",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnVGBTKdJlL5SAjoCeE8qWDaHyQ1aLH66JQ&usqp=CAU",
      label: "Wedding 1",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaei22KvhPI2yTZ53bAJdpgFTCs3AuIYvVgA&usqp=CAU",
      label: "Wedding 2",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJx4LoZtQHpoQg-DJlpGbNu_qQ6LAV-_6dng&usqp=CAU",
      label: "Wedding 3",
    },
    {
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE75mokiImD9yuelqlqmfuUBO6c6p4K3YF4w&usqp=CAU",
      label: "Wedding 4",
    },
  ];
  return (
    <div>
      <div className="createCard">
        <h2>Create a Card</h2>
        {error && <div className="error">{error}</div>}
        <form>
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
              id="cardBorder"
              required
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
            id="cardBorder"
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
              options={selectFontOptions}
              onChange={(e) => setCardFont(e.value)}
            />
          </div>
          <div className="field-controls">
            <label className="input-label" htmlFor="cardFont">
              Choose a Font Color. Options:
            </label>

            <Select
              styles="select"
              width="200px"
              menuColor="red"
              className="select"
              id="cardBorder"
              required
              options={selectFontColorOptions}
              onChange={(e) => setCardFontColor(e.value)}
            />
          </div>
          <div className="field-controls">
            <label className="input-label" htmlFor="cardAlignment">
              Choose a Card Alignment. Options: Start, End, Flex-Start,
              Flex-End, Center, Left, Right, Normal, Space-Between,
              Space-Around, Space-Evenly, Stretch, Safe, Unsafe
            </label>
            <Select
              styles="select"
              width="200px"
              menuColor="red"
              className="select"
              id="cardBorder"
              required
              options={selectCardAlignmentOptions}
              onChange={(e) => setCardAlignment(e.value)}
            />
          </div>
          <div className="field-controls">
            <label className="input-label" htmlFor="cardImageUrl">
              Choose a Card Image
            </label>
            <Select
              styles="select"
              width="200px"
              menuColor="red"
              className="select"
              id="cardBorder"
              required
              options={selectCardImageUrl}
              onChange={(e) => setCardImageURL(e.value)}
            />
          </div>
          <div className="field-controls">
            <Link to="/home">
              <button onClick={() => handleLogin()}>Create</button>
            </Link>

            <Link to="/home">
              <button onClick={() => submitDraft()}>Save as Draft</button>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <h2 className="feed">Card Preview</h2>
        <div>
          <Card
            className="cardPreview"
            occasion={occasion}
            frontDescription={frontDescription}
            backDescription={backDescription}
            border_style={cardBorder}
            card_color={cardColor}
            has_back={"true"}
            like=""
            card_alignment={cardAlignment}
            card_font={cardFont}
            CardImageUrl={cardImageUrl}
            card_font_color={cardFontColor}
            comments={comments}
          />
        </div>
      </div>
    </div>
  );
};
