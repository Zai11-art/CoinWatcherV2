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
import { useSelector } from "react-redux";

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

// console.log(price.length);

const CoinChartDisplay = (props) => {
  const mode = useSelector((state) => state.mode);
  Chart.defaults.color = `${mode === 'light' ? "#061b36" : "#c9c9c7"}`;

  const price = props.data.market_data.sparkline_7d.price;

  // console.log(props);

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
    const formattedDate = date?.toLocaleDateString();
    datesArray.push(formattedDate);
    date.setHours(date.getHours() + 1); // Add 1 hour for the next interval
  }

  console.log(datesArray);

  const options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
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
        fontColor: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          stepSize: 1,
          color: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
          font: {
            size: 1,
          },
        },
        grid: {
          color: `${mode === 'light' ? "#162a382f" : "#9bd7ff18"}`
        },
      },
      y: {
        ticks: {
          color: `${mode === 'light' ? "#061b36" : "#c9c9c7"}`,
          font: {
            size: 12,
          },
        },
        grid: {
          color: `${mode === 'light' ? "#162a382f" : "#9bd7ff18"}`
        },
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
              ctx.strokeStyle =
                props.data.market_data.sparkline_7d.price[
                  props.data.market_data.sparkline_7d.price.length - 1
                ] > props.data.market_data.sparkline_7d.price[0]
                  ? "rgb(93, 212, 85)"
                  : "rgb(255, 107, 107)";
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
