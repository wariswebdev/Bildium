import { motion } from "framer-motion"
import Button from "./Button"

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--black)] text-white px-6 pt-20 pb-10">
      {/* Slide-in Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center space-y-6"
      >
        <img
          src="https://cdn.prod.website-files.com/678e142a1173ea44a6477b9f/67e28fcafc3c4af9b4d6c559_Group%201009003815%20(2).svg"
          alt="Bildium Logo"
          className="w-[160px] h-auto"
        />
        <p className="text-lg max-w-xl">
          Want us to customize Bildium or create new design for you?
        </p>
        <Button className="px-8 py-4 font-semibold text-base">CONTACT US TODAY</Button>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20 my-12" />

      {/* Bottom Attribution */}
      <div className="text-sm opacity-70">
        <p>Designed by RadiantTemplates. Powered by Webflow</p>
      </div>
    </footer>
  )
}
