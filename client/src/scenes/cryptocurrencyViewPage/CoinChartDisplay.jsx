// import response from "../dummyData/response_1682101402261";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
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
  BarElement,
} from "chart.js";
<<<<<<< HEAD
=======
import { useSelector } from "react-redux";
>>>>>>> origin/master

import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  zoomPlugin
);

Chart.defaults.elements.point.radius = 0;
<<<<<<< HEAD
Chart.defaults.color = "#c9c9c7";
=======
>>>>>>> origin/master

// console.log(price.length);

const CoinChartDisplay = (props) => {
<<<<<<< HEAD
  // const { id } = useParams();

  // const [response, setresponseData] = useState([]);

  // useEffect(() => {

  //   fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
  //   .then(response => response.json())
  //   .then(data => setresponseData([data]))
  //   .catch(error => console.log(error));

  // }, []);

  const price = props.data.market_data.sparkline_7d.price;

  console.log(props);
=======
  const mode = useSelector((state) => state.mode);
  Chart.defaults.color = `${mode === 'light' ? "#061b36" : "#c9c9c7"}`;

  const price = props.data.market_data.sparkline_7d.price;

  // console.log(props);
>>>>>>> origin/master

  const dateString = props.data.last_updated;
  const date = new Date(dateString);
  const datesArray = [];

  // Subtract 1 hour from the date
  date.setHours(date.getHours() - 1);

  // Calculate the end time (1 week from the original date)
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  const endTime = new Date(date.getTime() + oneWeek);

  // Loop through the dates and times and push them to the array
  while (date < endTime) {
<<<<<<< HEAD
    const formattedDate = date.toISOString();
=======
    const formattedDate = date?.toLocaleDateString();
>>>>>>> origin/master
    datesArray.push(formattedDate);
    date.setHours(date.getHours() + 1); // Add 1 hour for the next interval
  }

  console.log(datesArray);

  const options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
<<<<<<< HEAD
        fontColor: "f00",
=======
        fontColor: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
>>>>>>> origin/master
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Coin price to USD (1 Week)",
        font: {
          size: 20,
        },
      },
      labels: {
<<<<<<< HEAD
        fontColor: "#ffffff",
=======
        fontColor: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
>>>>>>> origin/master
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          stepSize: 1,
<<<<<<< HEAD
          color: "#c9c9c7",
=======
          color: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
>>>>>>> origin/master
          font: {
            size: 1,
          },
        },
<<<<<<< HEAD
      },
      y: {
        ticks: {
          color: "#c9c9c7",
=======
        grid: {
          color: `${mode === 'light' ? "#162a382f" : "#9bd7ff18"}`
        },
      },
      y: {
        ticks: {
          color: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
>>>>>>> origin/master
          font: {
            size: 12,
          },
        },
<<<<<<< HEAD
=======
        grid: {
          color: `${mode === 'light' ? "#162a382f" : "#9bd7ff18"}`
        },
>>>>>>> origin/master
      },
    },
  };

  const labels = datesArray;

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        data: props.data.market_data.sparkline_7d.price,
        borderColor:
          props.data.market_data.sparkline_7d.price[
            props.data.market_data.sparkline_7d.price.length - 1
          ] > props.data.market_data.sparkline_7d.price[0]
            ? "rgb(93, 212, 85)"
            : "rgb(255, 107, 107)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: "2",
<<<<<<< HEAD
=======
        
>>>>>>> origin/master
      },
    ],
  };
  return (
    <Line
      className="ml-2"
      options={options}
      plugins={[
        {
          afterDraw: (chart) => {
            if (chart.tooltip?._active?.length) {
              let x = chart.tooltip._active[0].element.x;
              let yAxis = chart.scales.y;
              let ctx = chart.ctx;
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(x, yAxis.top);
              ctx.lineTo(x, yAxis.bottom);
              ctx.lineWidth = 1;
<<<<<<< HEAD
              ctx.strokeStyle = "#9ccddc";
=======
              ctx.strokeStyle =
                props.data.market_data.sparkline_7d.price[
                  props.data.market_data.sparkline_7d.price.length - 1
                ] > props.data.market_data.sparkline_7d.price[0]
                  ? "rgb(93, 212, 85)"
                  : "rgb(255, 107, 107)";
>>>>>>> origin/master
              ctx.stroke();
              ctx.restore();
            }
          },
        },
      ]}
      data={data}
    />
  );
};

export default CoinChartDisplay;
