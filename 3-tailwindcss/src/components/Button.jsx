

export const Button = ({
    text,
    children,
    onClick,
    disabled = false,
    variant = 'solid'
}) => {
    // Tailwind classes baseadas no styles.css
    const base = "px-5 py-2 rounded-[14px] flex items-center justify-center transition-colors duration-300 cursor-pointer";
    const variants = {
        brown: "bg-[#d4a373] text-white shadow-md border-none hover:bg-[#b88a5a]",
        cart: "bg-[#7f7434] text-white shadow-md border-none hover:bg-[#5c5225]",
        solid: "bg-[#7f7434] text-white shadow-md border-none",
        outline: "bg-[#7f7434] text-white shadow-md border-2 border-[#faedcd]",
        ghost: "bg-transparent text-white shadow-md border border-black"
    };
    return (
        <button className={`${base} ${variants[variant] || variants.solid}`} onClick={onClick} disabled={disabled}>
            {children ? children : text}
        </button>
    )
}