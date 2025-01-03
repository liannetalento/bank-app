import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpensePieChart = () => {
  const data = {
    labels: ['Food', 'Rent', 'Entertainment', 'Others'],
    datasets: [
      {
        data: [450, 1500, 800, 200],
        backgroundColor: ['red', 'blue', 'green', 'yellow'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpensePieChart;

