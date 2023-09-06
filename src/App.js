import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.js";
import Pages from "./pages/Pages.js";
import Footer from "./components/Footer.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="padding-class">
          <Pages />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far);

// Hook
// export const useToggle = (initialState = false) => {
//   const [show, setShow] = useState(initialState);
//   const toggle = () => setShow((prev) => !prev);
//   const setToggleStatus = (value) => setShow(Boolean(value));
//   return [show, toggle, setToggleStatus];
// };
