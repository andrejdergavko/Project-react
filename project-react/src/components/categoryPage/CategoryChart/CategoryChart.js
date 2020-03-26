import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import "./CategoryChart.scss";

function CategoryChart(props) {
  const { currency, operationsList } = props;

  const defaultData = {
    labels: [""],
    datasets: [
      {
        data: [1],
        backgroundColor: []
      }
    ]
  };

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      }
    ]
  };

  operationsList.forEach(operation => {
    if (operation.value) {
      data.labels.push(operation.title);
      data.datasets[0].backgroundColor.push(operation.color);
      data.datasets[0].data.push(operation.value);
    }
  });

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    animation: {
      animateScale: false,
      animateRotate: true
    },
    layout: {
      padding: 50
    },
    cutoutPercentage: 83,
    circumference: 2 * Math.PI,
    showAllTooltips: true,
    tooltips: {
      enabled: false
    },

    plugins: {
      datalabels: {
        borderColor: "white",
        borderRadius: 50,
        borderWidth: 1,
        anchor: "end",
        align: "end",
        color: function(context) {
          return context.dataset.backgroundColor;
        },
        padding: 10,
        font: {
          size: "17",
          family: "Montserrat",
          weight: "400"
        },
        formatter: function(value, context) {
          const density = context.dataset.data.reduce((sum, item) => {
            return sum + item;
          }, 0);
          if (value / density < 0.05 || value === 0) return "";
          return context.chart.data.labels[context.dataIndex];
        }
      }
    }
  };

  return (
    <div className="categoryChart info-card">
      <div className="categoryChart__sum-box">
        <div className="categoryChart__label">Всего</div>
        <div className="categoryChart__sum">
          {data.datasets[0].data.reduce((sum, item) => {
            return sum + item;
          }, 0)}
        </div>
        <div className="categoryChart__currency">{currency}</div>
      </div>
      <Doughnut
        data={data.datasets[0].data.length === 0 ? defaultData : data}
        options={options}
      />
    </div>
  );
}

export default CategoryChart;
