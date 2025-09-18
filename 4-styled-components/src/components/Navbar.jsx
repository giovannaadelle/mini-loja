import React from "react";
import { Button } from "./Button";
import styled, { createGlobalStyle } from "styled-components";
import { IoMdCart } from "react-icons/io";
import { useTheme } from "../contexts/ThemeContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg-color);
    font-family: 'Nunito', sans-serif;
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #d4a373;
  box-shadow: 0 4px 6px #6b5034;
  width: 100%;
  z-index: 10;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const NavbarToggle = styled.label`
  position: relative;
  display: flex;
  width: 60px;
  height: 32px;
  cursor: pointer;
  align-items: center;
`;
const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
const ToggleBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 16px;
  transition: background-color 0.3s;
`;
const ToggleHandle = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: transform 0.3s;
  transform: ${({ checked }) => checked ? 'translateX(28px)' : 'translateX(0)'};
`;

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = React.useState(theme === "dark");
  React.useEffect(() => { setChecked(theme === "dark") }, [theme]);
  const handleToggle = () => { toggleTheme(); };

  return (
    <>
      <GlobalStyle />
      <NavbarContainer>
        <h2 style={{ color: "white", fontWeight: "bold", fontSize: "1.25rem" }}>Cosmetic Store</h2>
        <RightSection>
          <NavbarToggle>
            <ToggleInput type="checkbox" checked={checked} onChange={handleToggle} />
            <ToggleBackground>
              <ToggleHandle checked={checked} />
            </ToggleBackground>
          </NavbarToggle>
          <Button variant="cart"><IoMdCart size={24} /></Button>
        </RightSection>
      </NavbarContainer>
    </>
  );
};
