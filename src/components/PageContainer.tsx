import { motion } from "framer-motion"

type PageContainerProps = {
    imageSrc: string
    text: string
    className?: string
    hoverBg?: string // optional, default to var(--orange)
    padding?: string // optional, default to p-6
    width?: string   // optional, default to w-full max-w-md
    height?: string  // optional, default to h-[500px]
}

export default function PageContainer({
    imageSrc,
    text,
    className = "",
    hoverBg = "var(--orange)",
    padding = "p-6",
    width = "w-full max-w-md",
    height = "h-[500px]",
}: PageContainerProps) {
    return (
        <motion.div
            whileHover={{ backgroundColor: hoverBg }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl bg-transparent flex flex-col items-center justify-center text-center ${padding} ${width} ${height} transition-colors duration-300 ${className}`}
        >
            <img src={imageSrc} alt={text} className="w-auto max-h-60 object-contain mb-4" />
            <p className="text-lg font-semibold">{text}</p>
        </motion.div>
    )
}
