import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "Études de Cas", href: "#projets" },
    { name: "Notre Standard", href: "#about" },
    { name: "Tarifs", href: "#tarifs" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-obsidian/70 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-violet rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white italic">
            Nexora<span className="text-brand-violet">Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-violet transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-violet px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:scale-105 active:scale-95 transition-all">
            Appel Stratégique
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-violet" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-4 right-4 bg-obsidian-light border border-white/10 p-8 rounded-3xl md:hidden shadow-2xl mt-4"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-slate-400 hover:text-brand-violet transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/5 my-2" />
              <button className="btn-primary w-full py-4 uppercase font-black tracking-widest text-xs">
                Réserver mon appel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
