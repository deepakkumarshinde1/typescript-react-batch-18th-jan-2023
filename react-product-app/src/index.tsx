import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductContextProvider } from "./context/ProductContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
