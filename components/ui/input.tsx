import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type = "text", className, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn("flex \n" +
            "h-10 \n" +
            "w-full \n" +
            "rounded-md \n" +
            "border \n" +
            "border-gray-200 \n" +
            "bg-white \n" +
            "px-3 \n" +
            "py-2 \n" +
            "text-sm \n" +
            "ring-offset-white \n" +
            "file:border-0 \n" +
            "file:bg-transparent \n" +
            "file:text-sm \n" +
            "file:font-medium \n" +
            "placeholder:text-gray-500 \n" +
            "focus-visible:outline-none \n" +
            "focus-visible:ring-2 \n" +
            "focus-visible:ring-gray-950 \n" +
            "focus-visible:ring-offset-2 \n" +
            "disabled:cursor-not-allowed \n" +
            "disabled:opacity-50 \n",
            className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export default Input;
