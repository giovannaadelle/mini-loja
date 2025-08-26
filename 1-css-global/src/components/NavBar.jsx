import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <h2>Shop</h2>

      <div className="btn-container">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>

        <button>🛒</button>
      </div>
    </div>
  );
}

export default NavBar;
