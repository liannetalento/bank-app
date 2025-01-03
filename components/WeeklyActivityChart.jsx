import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const WeeklyActivityChart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch weekly activity data from the backend (dummy data or real data)
    fetch("http://localhost:3001/weekly-activity")
      .then(res => res.json())
      .then(data => {
        setData({
          labels: data.labels,
          datasets: [{
            label: 'Weekly Activity',
            data: data.activity,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }]
        });
      });
  }, []);

  return <Bar data={data} />;
};

export default WeeklyActivityChart;
