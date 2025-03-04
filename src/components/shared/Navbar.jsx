import { useState } from "react";
import logo from "../../assets/img/logo/logo.png";

const navbarcom = [
  {
    id: 1,
    title: "HOME",
    href: "#",
  },
  {
    id: 2,
    title: "ABOUT",
    href: "/about",
  },
  {
    id: 3,
    title: "SERVICE",
    href: "#",
  },
  {
    id: 4,
    title: "GALLERY",
    href: "#",
  },
  {
    id: 5,
    title: "BLOG",
    href: "#",
  },
  {
    id: 6,
    title: "CONTACT",
    href: "#",
  },
];
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1f0101] shadow-sm relative">
      <div className="w-full flex items-center justify-between h-16 px-4">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Narosundar" className="h-10" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {navbarcom.map((item, id) => (
            <a
              key={id}
              href={item.href}
              className="text-amber-50 hover:text-red-600 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 transition-colors">
          FREE QUOTE
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1f0101] z-50 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navbarcom.map((item, id) => (
              <a
                key={id}
                href={item.href}
                className="text-amber-50 hover:text-red-600 transition-colors w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-xs transition-colors">
              FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
