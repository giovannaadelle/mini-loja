import { useState } from "react";
import { Button } from "./Button";
import { IoMdCart } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");

  const handleToggle = () => {
    setChecked((prev) => !prev);
    toggleTheme();
  };

  return (
    <div className={styles.container}>
      <h2>Cosmetic Store</h2>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <div className={styles.toggleBackground}>
          <div className={styles.toggleHandle}></div>
        </div>
      </label>
      <Button variant="cart"><IoMdCart /></Button>
    </div>
  );
}

export default Navbar;
