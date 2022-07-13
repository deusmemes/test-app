import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, disabled, onClick }: Props) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            { children }
        </button>
    )
}

export default Button
