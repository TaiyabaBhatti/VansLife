import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routing/RoutePages.jsx";

createRoot(document.getElementById("root")).render(<App />);
