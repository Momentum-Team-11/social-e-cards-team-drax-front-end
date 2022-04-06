import { testdata } from "./TestData";
import { Card } from "./Card";

export const CardList = () => {
  return (
    <>
      <div className="card-container">
        <h2>Card Feed:</h2>
        {testdata.map((data, key) => {
          return (
            <div key={key}>
              <Card
                username={data.username}
                date={data.created_at}
                frontDescription={data.frontDescription}
                backDescription={data.backDescription}
                border_color={data.border_color}
                card_color={data.card_color}
                has_back={data.has_back}
                key={data.id}
                ProfileImageUrl={data.ProfileImageUrl}
                CardImageUrl={data.CardImageUrl}
                occasion={data.occasion}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
