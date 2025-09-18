import { useState, useEffect } from "react";
import { Button } from "./Button";
import { IoMdCart } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#d4a373] shadow-lg w-full z-10">
      <h2 className="text-xl font-bold text-white">Cosmetic Store</h2>
      <div className="flex items-center gap-4">
        <label className="relative flex items-center w-[60px] h-[32px] cursor-pointer">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0"
            checked={checked}
            onChange={handleToggle}
          />
          <div className="w-full h-full bg-gray-300 rounded-[16px] transition-colors duration-300">
            <div className={`absolute top-[3px] left-[3px] w-[26px] h-[26px] bg-white rounded-full shadow-md transition-transform duration-300 ${checked ? 'translate-x-7' : ''}`}></div>
          </div>
        </label>
        <Button variant="cart"><IoMdCart size={24} /></Button>
      </div>
    </div>
  );
}

