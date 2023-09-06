import React, { useState, useEffect } from "react";
import "../../styles/Account.css";
import AcctList from "./AcctList";
import AcctData from "./AcctData";
function Account() {
  const [accdata, setAccdata] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    setAccdata(JSON.parse(localStorage.getItem("accountsPage")));
  }, []);

  const selectedUser = (data) => {
    setUser(data);
  };

  return (
    <div>
      <AcctList accdata={accdata} data={selectedUser} />
      <br />
      <br />
      <AcctData activeUser={user} />
    </div>
  );
}

export default Account;
