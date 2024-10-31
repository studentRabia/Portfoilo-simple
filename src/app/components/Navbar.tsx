import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container pt-8 mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">
          <span className="text-2xl text-red-900">R</span>.R
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10">
          <li className="menuLink"><Link href="/">Home</Link></li>
          <li className="menuLink"><Link href="#about">About</Link></li>
          <li className="menuLink"><Link href="#projects">Projects</Link></li>
          <li className="menuLink"><Link href="#skills">Skills</Link></li>
          <li className="menuLink"><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden">
          <li className="menuLink"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className="menuLink"><Link href="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="menuLink"><Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li className="menuLink"><Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li className="menuLink"><Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
