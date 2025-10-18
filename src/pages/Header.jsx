import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="logo.jpg" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-indigo-600">Gomukhi Creations</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/home" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link to="/gallery" className="hover:text-indigo-600 transition">Gallery</Link>
          
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <HiMenu className="w-8 h-8 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu with Backdrop */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sliding Panel */}
          <div className="absolute top-0 right-0 h-full w-7/12 bg-white shadow-2xl rounded-l-xl transform transition-transform duration-300 translate-x-0">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-xl font-bold text-indigo-600">Menu</span>
              <button onClick={() => setMenuOpen(false)}>
                <HiX className="w-8 h-8 text-gray-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-8 space-y-4 px-6">
              {[
                { name: "Home", to: "/home", icon: "🏠" },
                { name: "About", to: "/about", icon: "ℹ️" },
                { name: "Gallery", to: "/gallery", icon: "🖼️" },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-indigo-600 transition"
                >
                  <span className="text-black text-lg">{link.icon}</span>
                  <span className="text-black font-medium bg-gray-200 px-3 py-1 rounded-full">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
