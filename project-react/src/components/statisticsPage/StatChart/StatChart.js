import React from "react";
import { Bar } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";

import "./StatChart.scss";

defaults.global.defaultFontFamily = "Montserrat";

const options = {
  maintainAspectRatio: false,
  tooltips: {
    enabled: false,
    caretSize: 10,
    xPadding: 16,
    yPadding: 10,
    backgroundColor: "#62768c",
    titleFontColor: "#eee",
    bodyFontColor: "#eee",
    titleFontStyle: "normal",
    titleFontFamily: "Montserrat",
    bodyFontFamily: "Montserrat",
    titleMarginBottom: 15,
    cornerRadius: 0,
    displayColors: false
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        offset: true,
        gridLines: {
          display: false
        },
        type: "time",
        time: {
          unit: "day",
          unitStepSize: 1,
          tooltipFormat: "MM.DD h:mm",
          displayFormats: {
            day: "DD.MM"
          }
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },

        gridLines: {
          drawBorder: false,
          display: true
        }
      }
    ]
  },
  plugins: {
    datalabels: {
      display: false
    }
  }
};

function StatChart({ operations }) {
  const sortOperations = operations.sort((a, b) => b.date - a.date);
  const chartData = [];

  sortOperations.forEach(operation => {
    const currentDay = new Date(operation.date).setHours(0, 0, 0, 0);
    const index = chartData.findIndex(item => {
      return currentDay === item.x ? true : false;
    });

    if (index + 1) {
      chartData[index].y = chartData[index].y + operation.value;
    } else {
      chartData.push({ x: currentDay, y: operation.value });
    }
  });

  const data = {
    datasets: [
      {
        barPercentage: 0.2,
        backgroundColor: "#62768c",
        hoverBackgroundColor: "#768ea8",
        data: chartData
      }
    ]
  };

  return (
    <div className="statChart info-card">
      <Bar data={data} options={options} />
    </div>
  );
}

export default StatChart;
