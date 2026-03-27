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

  const mobileContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

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
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-11 h-11 rounded-full overflow-hidden shadow-md shrink-0"
              style={{
                backgroundImage: "url('/norsha-logo.jpg')",
                backgroundSize: "auto 100%",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-[#040812]' : 'text-white'}`}>
              Norsha Pvt. Ltd.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <div key={link.name} className="relative">
                  <Link
                    href={link.path}
                    className={`text-sm font-medium transition-colors hover:text-[#2563EB] pb-1 ${
                      isActive ? "text-[#2563EB]" : (isScrolled ? "text-gray-600" : "text-white/80 hover:text-white")
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#2563EB] rounded-full"
                    />
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-[6px] bg-[#3333CC] text-white text-sm font-medium hover:bg-[#2828B8] transition-colors shadow-lg shadow-[#3333CC]/30"
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
            variants={mobileContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden absolute top-full left-0 right-0"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={mobileItemVariants}>
                  <Link
                    href={link.path}
                    className={`block text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                      location === link.path ? "bg-blue-50 text-[#2563EB]" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants}>
                <Link
                  href="/contact"
                  className="block mx-4 mt-2 text-center px-6 py-3 rounded-[6px] bg-[#3333CC] text-white text-lg font-medium"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}