import { motion } from "framer-motion"
import Button from "../components/Button"

export default function Hero() {
    return (
        <section className="w-full min-h-screen bg-[var(--black)] text-white px-6 py-20 flex flex-col items-center justify-center text-center gap-12">
            {/* Animated Text Block */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    WEBFLOW TEMPLATE FOR CUSTOM BUSSINESSES
                </h1>
                <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                    Built for Builders – A Robust Webflow Template for Construction Businesses
                </p>
                <Button className="px-10 py-4 text-base font-semibold">EXPLORE NOW</Button>
            </motion.div>

            {/* Image Trio */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center gap-4 mt-12 overflow-x-auto scrollbar-hide whitespace-nowrap"
            >
                <img
                    src="https://cdn.prod.website-files.com/678e142a1173ea44a6477b9f/67f3a9472870ee0dece2363c_Home%20three%20(3).webp"
                    alt="Left"
                    className="w-40 md:w-85 object-cover shrink-0"
                />
                <img
                    src="https://cdn.prod.website-files.com/678e142a1173ea44a6477b9f/67e7e865536b1d6220a8770f_Landing%20image.webp"
                    alt="Center"
                    className="w-56 md:w-[600px] object-cover shrink-0"
                />
                <img
                    src="https://cdn.prod.website-files.com/678e142a1173ea44a6477b9f/67f3a946afe6b2486b2e0df2_Home%20two%20(10)%201%20(1).webp"
                    alt="Right"
                    className="w-40 md:w-85 object-cover shrink-0"
                />
            </motion.div>
        </section>
    )
}
