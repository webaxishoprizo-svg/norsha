import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#2563EB] flex items-center justify-center shadow-md">
              <span className="text-white font-display font-bold text-lg leading-none">N</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-[#040812]' : 'text-white'}`}>
              Norsha Pvt. Ltd.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#2563EB] ${
                  location === link.path ? "text-[#2563EB]" : (isScrolled ? "text-gray-600" : "text-white/80 hover:text-white")
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-[#040812]" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden absolute top-full left-0 right-0"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                    location === link.path ? "bg-blue-50 text-[#2563EB]" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mx-4 mt-2 text-center px-6 py-3 rounded-full bg-[#2563EB] text-white text-lg font-medium"
              >
                Get in Touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
