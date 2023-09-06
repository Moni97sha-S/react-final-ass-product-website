import React, { useState } from "react";
import { useToggle } from "../App.js";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const [show, setShow] = useState(false);
  const [visible, setVisibility] = useState(false);

  //!Assigning Location variable
  const location = useLocation();

  //TODO: Destructuring pathname key from location
  const { pathname } = location;

  //? Javascript split method used to get the name of the path in array
  const splitLocation = pathname.split("/");
  console.log(splitLocation);

  return (
    <div>
      <header className="header">
        <h1>
          <Link to="/">PRODUCT ADMIN</Link>
        </h1>
        <nav>
          <ul className="nav-items">
            <li className={splitLocation[1] === "dashboard" ? "active" : ""}>
              {/* <li className="active"> */}
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/dashboard"
                    : "/"
                }
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-tachometer-alt"
                  style={{
                    transition: "all 0.3s ease",
                    color: "#e7e8e9",
                    fontSize: "26px",
                  }}
                />
                <br />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={
                show ? "nav-item drop-down shown" : "nav-item drop-down"
              }
              onClick={() => setShow((show) => !show)}
            >
              <Link to="/" className="nav-link dropdown-toggle">
                <FontAwesomeIcon
                  icon="fa-regular fa-file-lines"
                  style={{
                    transition: "all 0.3s ease",
                    color: "#eaeaec",
                    fontSize: "26px",
                    textAlign: "center",
                    marginRight: "40px",
                  }}
                />
                <br />
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginInline: "4px",
                  }}
                >
                  Reports
                  <FontAwesomeIcon
                    icon="fa-solid fa-angle-down"
                    style={{ color: "#ffffff", fontSize: "12px" }}
                  />
                </span>
              </Link>
              <div className={show ? "dropdown-menu shown" : "dropdown-menu"}>
                <Link to="/" className="dropdown-item">
                  Daily Report
                </Link>
                <Link to="/" className="dropdown-item">
                  Weekly Report
                </Link>
                <Link to="/" className="dropdown-item">
                  Yearly Report
                </Link>
              </div>
            </li>
            <li className={splitLocation[1] === "products" ? "active" : ""}>
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/products"
                    : "/"
                }
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  style={{
                    transition: "all 0.3s ease",
                    color: "#ededed",
                    fontSize: "26px",
                  }}
                />
                <br />
                <span>Products</span>
              </Link>
            </li>
            <li className={splitLocation[1] === "account" ? "active" : ""}>
              <Link
                to={
                  JSON.parse(localStorage.getItem("loginStatus")) === true
                    ? "/account"
                    : "/"
                }
              >
                <FontAwesomeIcon
                  icon="fa-regular fa-user"
                  style={{
                    transition: "all 0.3s ease",
                    color: "#ffffff",
                    fontSize: "26px",
                  }}
                />
                <br />
                <span>Accounts</span>
              </Link>
            </li>
            <li
              className={
                visible ? "nav-item drop-down shown" : "nav-item drop-down"
              }
              onClick={() => setVisibility((visible) => !visible)}
            >
              <Link to="/" className="nav-link dropdown-toggle">
                <FontAwesomeIcon
                  icon="fa-solid fa-gear"
                  style={{
                    transition: "all 0.3s ease",
                    color: "#ffffff",
                    fontSize: "26px",
                    marginRight: "40px",
                  }}
                />
                <br />
                <span>
                  Settings
                  <FontAwesomeIcon
                    icon="fa-solid fa-angle-down"
                    style={{ color: "#ffffff", fontSize: "12px" }}
                  />
                </span>
              </Link>
              <div
                className={visible ? "dropdown-menu shown" : "dropdown-menu"}
              >
                <Link to="/" className="dropdown-item">
                  Profile
                </Link>
                <Link to="/" className="dropdown-item">
                  Billing
                </Link>
                <Link to="/" className="dropdown-item">
                  Customize
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className="logout">
          <Link to="/">
            Admin, <b>Logout</b>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
