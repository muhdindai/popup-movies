import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating max={5} color="#fcc419" size={24} /> */}
  </React.StrictMode>
);
