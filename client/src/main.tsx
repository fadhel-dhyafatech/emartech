import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/landingPage.tsx";
import React from "react";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>
);
