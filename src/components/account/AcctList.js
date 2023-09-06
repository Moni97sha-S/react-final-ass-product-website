import React from "react";
import "../../styles/AcctList.css";

function AcctList(props) {
  const data = Object.keys(props.accdata);
  return (
    <div className="accountlistcontainer">
      <h2>List of Accounts</h2>
      <label>Accounts</label>
      <br />
      <select onChange={(e) => props.data(e.target.value)}>
        <option value="select account">Select Account</option>
        {data.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
export default AcctList;
