import React, { useState } from 'react';

const QuickTransfer = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = () => {
    // Handle money transfer logic here
    console.log('Transfering $' + amount + ' to ' + recipient);
  };

  return (
    <div>
      <h3>Quick Transfer</h3>
      <input
        type=
text
        placeholder=Recipient
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type=number
        placeholder=Amount
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Transfer</button>
    </div>
  );
};

export default QuickTransfer;

