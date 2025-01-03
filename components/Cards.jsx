import React, { useEffect, useState } from 'react';

const Cards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then(res => res.json())
      .then(data => setCardData(data));
  }, []);

  return (
    <div>
      {cardData.map((card, index) => (
        <div key={index}>
          <h3>{card.cardHolder}</h3>
          <p>Balance: {card.balance}</p>
          <p>Card Number: {card.cardNumber}</p>
          <p>Valid Thru: {card.validThru}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
