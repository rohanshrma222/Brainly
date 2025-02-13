import { ReactElement } from "react";

    type Variants = "primary" | "secondary"
    
    interface ButtonProps {
    variant : Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
}

const variantStyles = {
    "primary"   : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"   
}

const sizeStyle = {
    "sm" : "py-1 px-1",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

const  defaultStyles = "flex rounded-md font-strong px-3 py-4  items-center"

export const Button = (props : ButtonProps) =>{
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]}`}>
                 {props.startIcon}{props.text}
           </button>
}

