import { Button } from "./Button";
import { IoMdCart } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="navbar-container">
      <h2>Cosmetic Store</h2>

      <label className="navbar-toggle">
        <input type="checkbox" />
        <div className="navbar-toggle__background">
          <div className="navbar-toggle__handle" onClick={toggleTheme}></div>
        </div>
      </label>
      <Button text={<IoMdCart />} variant="cart"></Button>
    </div>
  );
};
