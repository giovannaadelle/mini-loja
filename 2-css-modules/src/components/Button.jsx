import styles from "./Button.module.css"

export const Button = ({
    text,
    children,
    onClick,
    disabled = false,
    variant = 'solid'
}) => {
    // Aplica a classe da variação se existir
    const variantClass = styles[variant] ? styles[variant] : '';
    return (
        <button className={`${styles.btn} ${variantClass}`.trim()} onClick={onClick} disabled={disabled}>
            {children ? children : text}
        </button>
    )
}