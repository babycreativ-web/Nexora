import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { name: "Méthode", href: "#methode" },
    { name: "Tarifs", href: "#tarifs" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled 
          ? "bg-obsidian/80 backdrop-blur-xl border-b border-white/[0.04] py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="responsive-container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group relative z-[110]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-violet to-brand-indigo rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Rocket className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-display">
            Nexora<span className="text-brand-violet">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-violet transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a href="#contact" className="btn-primary px-5 text-[12px]">
            Prototype Gratuit
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-3 relative z-[110]">
          <a href="#contact" className="btn-primary h-9 px-4 text-[11px] rounded-full shadow-lg">
            Gratuit
          </a>
          <button
            className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 active:scale-90 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-violet animate-in fade-in spin-in-90 duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-obsidian z-[105] lg:hidden flex flex-col p-6 pt-28"
          >
            {/* Background Accent */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-violet/10 blur-[100px] rounded-full" />
            
            <div className="flex flex-col gap-8 relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600 mb-2">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-4xl font-bold text-white font-display hover:text-brand-violet transition-colors flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-violet" />
                </motion.a>
              ))}
              
              <div className="h-px bg-white/5 my-6" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <a 
                  href="#contact"
                  className="btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Rocket className="w-5 h-5 flex-shrink-0" />
                  Prototype Gratuit
                </a>
                <a 
                  href="https://wa.me/yournumber"
                  className="btn-secondary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  WhatsApp Direct
                </a>
              </motion.div>
            </div>
            
            <div className="mt-auto pb-10 relative z-10 text-center">
              <p className="text-slate-500 text-sm">Prêt à transformer votre business ?</p>
              <p className="text-brand-violet font-bold text-xs uppercase tracking-widest mt-2">Disponibilité : Immédiate</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
