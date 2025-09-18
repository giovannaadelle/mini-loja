import styled, { css } from "styled-components";

const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border 0.3s;
    box-shadow: 0 2px 10px #6b5034;
    border: none;


    ${(props) =>
        props.variant === "brown" && css`
            background-color: #d4a373;
            color: white;
            box-shadow: 0 2px 10px #6b5034;
            border: none;
            &:hover { background-color: #b88a5a; }
        `}
    ${(props) =>
        props.variant === "cart" && css`
            background-color: #7f7434;
            color: white;
            box-shadow: 0 2px 10px #6b5034;
            border: none;
            &:hover { background-color: #5c5225; }
        `}
    ${(props) =>
        props.variant === "solid" && css`
            background-color: #7f7434;
            color: white;
            box-shadow: 0 2px 10px #6b5034;
            border: none;
        `}
    ${(props) =>
        props.variant === "outline" && css`
            background-color: #7f7434;
            color: white;
            box-shadow: 0 2px 10px #6b5034;
            border: 2px solid #faedcd;
        `}
    ${(props) =>
        props.variant === "ghost" && css`
            background-color: transparent;
            color: white;
            box-shadow: 0 2px 10px #6b5034;
            border: 1px solid black;
        `}
`;

export const Button = ({ text, children, onClick, disabled = false, variant = "solid" }) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
            {children ? children : text}
        </StyledButton>
    );
};