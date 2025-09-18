import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './Global.css';
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
);
