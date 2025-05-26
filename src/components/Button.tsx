import { motion } from "framer-motion"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "#ffffff"}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      type={type}
      className={`bg-[var(--orange)] text-black font-semibold px-6 py-3 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  )
}
