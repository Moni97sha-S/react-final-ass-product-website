import React from "react";
import "../../../styles/ChartStyles.css";
import { Pie } from "react-chartjs-2";
import { chart as chartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  return (
    <div className="chartcontainer">
      <h2>Storage Information</h2>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
