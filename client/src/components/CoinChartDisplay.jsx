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

Chart.defaults.elements.point.radius = 2;
Chart.defaults.color = "#c9c9c7";


// console.log(price.length);



const CoinChartDisplay = (props) => {
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
        const formattedDate = date.toISOString();
        datesArray.push(formattedDate);
        date.setHours(date.getHours() + 1); // Add 1 hour for the next interval
    }

    console.log(datesArray);

    const options = {
    maintainAspectRatio: false,
    legend: {
        labels: {
        fontColor: "f00",
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
        text: "Coin price to USD (24 hr)",
        font: {
            size: 20,
        },
        },
        labels: {
        fontColor: "#ffffff",
        },
    },
    responsive: true,
    scales: {
        x: {
        ticks: {
            stepSize: 1,
            color: "#c9c9c7",
            font: {
            size: 1,
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

    const data = {
        labels,
        datasets: [
        {
        fill: false,
        data: props.data.market_data.sparkline_7d.price,
        borderColor: "rgb(130, 205, 255)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: "1",
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
                ctx.strokeStyle = "#9ccddc";
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
