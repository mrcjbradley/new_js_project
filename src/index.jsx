import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import "./styles/app.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("Development Mode Ahoy!");
}

ReactDOM.render(<Layout />, document.getElementById("app"));
