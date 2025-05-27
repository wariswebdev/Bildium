import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="w-full bg-white text-black px-6 py-24 flex flex-col items-center text-center gap-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-medium max-w-5xl leading-snug uppercase"
      >
        Maximize Your Web Experience With Optimized Features
      </motion.h2>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-x-10 md:gap-x-16 text-center uppercase"
      >
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center gap-1 h-[140px]">
          <div className="text-7xl md:text-8xl font-medium">03</div>
          <p className="text-base md:text-lg tracking-wide">Home Pages</p>
        </div>

        {/* Divider */}
        <div className="h-[140px] w-px bg-black/20" />

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center gap-1 h-[140px]">
          <div className="text-7xl md:text-8xl font-medium">15+</div>
          <p className="text-base md:text-lg tracking-wide">Awesome Inner Pages</p>
        </div>

        {/* Divider */}
        <div className="h-[140px] w-px bg-black/20" />

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center gap-1 h-[140px]">
          <div className="text-7xl md:text-8xl font-medium">20</div>
          <p className="text-base md:text-lg tracking-wide">Unique Design Selection</p>
        </div>
      </motion.div>
    </section>
  )
}
