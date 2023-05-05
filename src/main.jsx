import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routers/FrontPageRouter/App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Routers/FrontPageRouter/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>
);
