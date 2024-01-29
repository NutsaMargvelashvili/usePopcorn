import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<StarRating*/}
    {/*  maxRating={5}*/}
    {/*  className={"test"}*/}
    {/*  messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}*/}
    {/*  defaultRating={4}*/}
    {/*/>*/}
    {/*<StarRating*/}
    {/*  size={24}*/}
    {/*  maxRating={5}*/}
    {/*  className={"test"}*/}
    {/*  color={"pink"}*/}
    {/*  defaultRating={3}*/}
    {/*/>*/}
  </React.StrictMode>
);
