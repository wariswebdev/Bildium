import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import Features from "../sections/Features"
// import ConstructionPages from "../sections/ConstructionPages"
// import OtherPages from "../sections/OtherPages"
// import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-[var(--black)] text-white">
      <Navbar />
      <Hero />
      <Features />
      {/* <ConstructionPages />
      <OtherPages />
      <Footer /> */}
    </div>
  )
}
