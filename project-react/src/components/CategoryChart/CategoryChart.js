import React, { Component } from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import "./CategoryChart.scss";

class CategoryChart extends Component {
  render() {
    const data = {
      labels: ["Дом", "Досуг", "Продукты"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    const options = {
      // responsive: false,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      animation: {
        animateScale: false,
        animateRotate: true
      },
      layout : {
        padding: 90
      },
      cutoutPercentage: 80,
      circumference: 2 * Math.PI,
      // rotation: 0.65 * Math.PI,
      // circumference: 1.7 * Math.PI,
      showAllTooltips: true,
      tooltips: {
        enabled: false
      },
      
      plugins: {
        datalabels: {
          backgroundColor: function(context) {
            return context.dataset.backgroundColor;
          },
          borderColor: "white",
          borderRadius: 50,
          borderWidth: 1,
          anchor: "end",
          align: "end",
          color: "white",
          padding: 10,
          font: {
            weight: "normal",
            size: "13"
          },
          formatter: function(value, context) {
            var percentageNum = context.chart.data.labels[context.dataIndex];
            return percentageNum;
          }
        }
      }
    };

    return (
      <div className="categoryChart info-card">
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

// function mapStateToProps(store) {
//   return {

//   };
// }

// function mapDispatchToProps(store) {
//   return {

//   };
// }

export default connect()(CategoryChart);
