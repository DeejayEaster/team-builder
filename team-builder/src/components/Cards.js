import React from "react";

const Cards = props => {
  return (
    <>
      <div className="memberCard">
        {props.cards.map(card => {
          return (
            <>
              <h2>{card.name}</h2>
              <h4>{card.email}</h4>
              <h4>{card.role}</h4>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
