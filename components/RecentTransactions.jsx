import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    { title: 'Deposit from my Card', date: '28 January 2021', amount: '-' },
    { title: 'Deposit Paypal', date: '25 January 2021', amount: '+,500' },
    { title: 'Jemi Wilson', date: '21 January 2021', amount: '+,400' },
  ];

  return (
    <div>
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>{transaction.title}</span>
            <span>{transaction.date}</span>
            <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;

