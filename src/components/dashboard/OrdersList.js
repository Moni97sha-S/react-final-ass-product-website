import React, { useState, useEffect } from "react";
import "../../styles/OrdersList.css";

function OrdersList() {
  const [dashboardorders, setDashboardOrders] = useState({});

  useEffect(() => {
    setDashboardOrders(
      JSON.parse(localStorage.getItem("dashboardPage"))["orders"]
    );
  }, []);

  let orders = Object.keys(dashboardorders).map(
    (key, index) => dashboardorders[key]
  );

  return (
    <div className="container">
      <h2>Orders List</h2>
      <table>
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Status</th>
            <th>Operators</th>
            <th>Location</th>
            <th>Distance</th>
            <th>Start Date</th>
            <th>EST Delivery Due</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i) => (
            <tr key={i}>
              <td>
                <strong>#{item.orderNo}</strong>
              </td>
              <td className="statustd}">
                <span
                  className={"status"`${
                    (item.status === "Moving" && "Moving") ||
                    (item.status === "Pending" && "Pending") ||
                    (item.status === "Cancelled" && "Cancelled") ||
                    (item.status === "Delivered" && "Delivered")
                  }`}
                ></span>
                {item.status}
              </td>
              <td>
                <strong>{item.operators}</strong>
              </td>
              <td>
                <strong>{item.location}</strong>
              </td>
              <td>
                <strong>{item.distance} km</strong>
              </td>
              <td>{item.startDate}</td>
              <td>{item.deliveryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
