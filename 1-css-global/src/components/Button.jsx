import "./../styles.css"

export const Button = ({
        text,
        onClick,
        disabled = false,
        variant = 'solid'
}) => {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
}