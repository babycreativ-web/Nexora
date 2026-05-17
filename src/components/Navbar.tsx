import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Réalisations", href: "#projets" },
    { name: "Comment ça marche", href: "#methode" },
    { name: "Tarifs", href: "#tarifs" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6",
        isScrolled 
          ? "bg-obsidian/80 backdrop-blur-2xl border-b border-white/[0.04] py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-brand-violet to-brand-indigo rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
            <Rocket className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-display">
            Nexora<span className="text-brand-violet">Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-violet transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a href="#contact" className="bg-gradient-to-r from-brand-violet to-brand-indigo px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:scale-105 active:scale-95 transition-all">
            Prototype gratuit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu navigation"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-violet" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-obsidian/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-full left-4 right-4 bg-obsidian-light/95 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl lg:hidden shadow-2xl mt-3 z-50"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-300 hover:text-brand-violet transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-white/5 my-2" />
                <a 
                  href="#contact"
                  className="btn-primary w-full py-4 text-center font-bold text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demander un prototype gratuit
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
