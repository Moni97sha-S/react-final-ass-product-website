import React, { useState, useEffect } from "react";
import "../../styles/NotificationList.css";

function NotificationList() {
  let [notifications, setNotifications] = useState({});

  useEffect(() => {
    setNotifications(
      JSON.parse(localStorage.getItem("dashboardPage"))["notifications"]
    );
  }, []);

  let notificationsarr = Object.keys(notifications).map(
    (key, index) => notifications[key]
  );

  return (
    <div className="container">
      <h2>NotificationList</h2>
      {notificationsarr.map((item, i) => (
        <div className="notificationcontainer" key={i}>
          <img src={item.pic} alt={i} />
          <p>
            {item.message}.
            <br />
            <span> {item.time}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default NotificationList;
