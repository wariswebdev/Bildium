import { useState } from "react"
import { ShoppingCart, ChevronDown, Menu, X } from "lucide-react"

const navLinks = ["Home", "Pages", "Blog", "Shop", "Content"]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full bg-transparent text-white px-6 py-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          src="https://cdn.prod.website-files.com/678e142a1173ea44a6477b9f/67e28fcafc3c4af9b4d6c559_Group%201009003815%20(2).svg"
          alt="Bildium Logo"
          className="w-[160px] h-auto"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg uppercase tracking-widest">
          {navLinks.map((label) => (
            <li
              key={label}
              className="relative group flex items-center gap-1 cursor-pointer hover:text-[var(--orange)] transition-colors"
            >
              {label}
              <ChevronDown className="w-4 h-4" />
              <div
                className="absolute top-full left-0 mt-3 hidden group-hover:flex flex-col bg-[#1a1a1a] text-white text-sm min-w-[200px] py-5 px-6 space-y-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-50"
              >
                <p className="hover:text-[var(--orange)] cursor-pointer">Dropdown Item 1</p>
                <p className="hover:text-[var(--orange)] cursor-pointer">Dropdown Item 2</p>
                <p className="hover:text-[var(--orange)] cursor-pointer">Dropdown Item 3</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Right: Cart + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ShoppingCart className="w-10 h-10 hover:text-[var(--orange)] transition-colors" />
          <span className="text-5xl font-extralight">|</span>
          {/* use robot ont style in enquire nw button */}
          <button className="bg-[var(--orange)] text-black px-10 py-5 transition-all duration-300 transform hover:bg-white "> 
           <span className="Roboto-font-style font-semibold">ENQUIRE NOW</span>
          </button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden mt-6 flex flex-col gap-6 text-base font-semibold uppercase tracking-widest bg-[#0b0b0b] px-2 py-6 rounded-xl transition-all duration-300">
          {navLinks.map((label) => (
            <li key={label} className="flex flex-col gap-2 px-4">
              <div className="flex items-center justify-between cursor-pointer hover:text-[var(--orange)]">
                {label}
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="text-sm font-normal text-white pl-2 pt-2 space-y-2">
                <p className="hover:text-[var(--orange)] cursor-pointer">Dropdown Item 1</p>
                <p className="hover:text-[var(--orange)] cursor-pointer">Dropdown Item 2</p>
              </div>
            </li>
          ))}
          <div className="flex items-center gap-4 px-4 pt-4">
            <ShoppingCart className="w-7 h-7 hover:text-[var(--orange)]" />
            <span>|</span>
            <button className="bg-[var(--orange)] text-black font-semibold px-6 py-2 hover:bg-white transition-all duration-300">
              Enquire Now
            </button>
          </div>
        </ul>
      )}
    </nav>
  )
}
