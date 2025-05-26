import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="w-full bg-white text-black px-6 py-28 flex flex-col items-center text-center gap-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-medium max-w-4xl leading-snug"
      >
        Maximize Your Web Experience With Optimized Features
      </motion.h2>

      {/* Stat Line */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-start gap-x-12 text-center text-black uppercase text-base"
      >
        {/* Stat Block 1 */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-5xl font-medium">03</div>
          <p className="text-sm tracking-wider">Home Pages</p>
        </div>

        <span className="text-black/20 text-4xl font-light hidden md:inline-block">|</span>

        {/* Stat Block 2 */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-5xl font-medium">15+</div>
          <p className="text-sm tracking-wider">Awesome Inner Pages</p>
        </div>

        <span className="text-black/20 text-4xl font-light hidden md:inline-block">|</span>

        {/* Stat Block 3 */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-5xl font-medium">20</div>
          <p className="text-sm tracking-wider">Unique Design Selection</p>
        </div>
      </motion.div>
    </section>
  )
}
