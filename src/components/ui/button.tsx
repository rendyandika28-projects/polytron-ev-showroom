import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const variants = {
      default: "bg-accent text-white hover:bg-accent/90",
      outline: "border border-border bg-transparent hover:bg-muted",
      ghost: "hover:bg-muted",
    }
    return (
      <button
        className={`${base} ${variants[variant]} ${className ?? ""}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
