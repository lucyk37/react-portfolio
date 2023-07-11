import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
    <App />
);
