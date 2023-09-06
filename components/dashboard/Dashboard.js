import React, { useState } from "react";
import "../../styles/Dashboard.css";
import LineChart from "./charts/LineChart.js";
import HorizontalChart from "./charts/HorizontalChart.js";
import PieChart from "./charts/PieChart.js";
import OrdersList from "./OrdersList.js";
import NotificationList from "./NotificationList";
import Header from "../Header.js";
import Footer from "../Footer.js";

function Dashboard() {
  let localPerformance = JSON.parse(localStorage.getItem("dashboardPage"))[
    "storage"
  ];
  const [userData, setUserData] = useState({
    labels: [
      `Available (${localPerformance.available}GB)`,
      `System (${localPerformance.system}GB)`,
      `Used (${localPerformance.used}GB)`,
    ],

    datasets: [
      {
        data: [
          localPerformance.available,
          localPerformance.system,
          localPerformance.used,
        ],

        backgroundColor: ["#f7604c", "#a8d582", "#4ed6b8"],
        fontColor: "#fff",
      },
    ],
  });
  return (
    <>
      <Header />
      <div>
        <div className="flexdiv">
          <div>
            <LineChart />
          </div>
          <div>
            <HorizontalChart />
          </div>
        </div>

        <div className="flexdiv">
          <div>
            <PieChart chartData={userData} />
          </div>
          <div>
            <NotificationList />
          </div>
        </div>
        <OrdersList />
      </div>
      {/* <div>
        <h1>DASHBOARD</h1>
        <button onClick={handleClick}></button>
      </div> */}
      <Footer />
    </>
  );
}

export default Dashboard;
