import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const price = response.market_data.sparkline_7d.price;

console.log(price.length);

const dateString = response.last_updated;
const date = new Date(dateString);
const datesArray = [];

console.log(dateString);

// Subtract 1 hour from the date
date.setHours(date.getHours() - 1);

// Calculate the end time (1 week from the original date)
const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
const endTime = new Date(date.getTime() + oneWeek);

// Loop through the dates and times and push them to the array
while (date < endTime) {
  const formattedDate = date.toISOString();
  datesArray.push(formattedDate.slice(0, -14));
  date.setHours(date.getHours() + 1); // Add 1 hour for the next interval
}

console.log(datesArray);

Chart.defaults.elements.point.radius = 2;

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Price - Date",
      color: "#fff",
      font: {
        size: 15,
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        stepSize: 1,
        color: "#c9c9c7",
        font: {
          size: 9,
        },
      },
    },
    y: {
      ticks: {
        color: "#c9c9c7",
        font: {
          size: 12,
        },
      },
    },
  },
};

const labels = datesArray;

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: price,
      borderColor: "rgb(130, 205, 255)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: "1",
    },
  ],
};

console.log(data.datasets[0].data);

function Coinchart() {
  return (
    <div>
      <h1>HEHE</h1>
      <div className="line">
        <Line options={options} data={data} />;
      </div>
    </div>
  );
}

export default Coinchart;
