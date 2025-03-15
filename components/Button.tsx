import ButtonSvg from "../public/assets/svg/ButtonSvg";
import {  ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    px?: string;
    white?: boolean;
}

const Button = ({className, href, onClick, children, px, white}: ButtonProps) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-black" : "text-gray-200"} ${className || ""}`;
    const spanClasses = 'relative z-10 hover: text-purple-400';

    const renderButton = () => (
        <button className={classes} onClick={onClick} style={{ padding: `0 ${px}px` }}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
        </a>
    );

    return href ? renderLink() : renderButton();
}

export default Button;
