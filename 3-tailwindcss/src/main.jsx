import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import "./styles.css"
import App from './App'
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
);
