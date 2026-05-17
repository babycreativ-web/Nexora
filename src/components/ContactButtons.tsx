import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X, Sparkles } from "lucide-react";
import { useState } from "react";

const ContactButtons = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter via WhatsApp"
        className="fixed bottom-6 left-6 z-[100] w-13 h-13 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] transition-all group"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute left-full ml-3 px-3 py-1.5 bg-white text-slate-900 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          WhatsApp — Réponse rapide
        </div>
      </a>

      {/* Floating CTA Button (Right) */}
      <motion.button 
        onClick={() => setShowCalendly(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-6 right-6 z-[100] btn-primary rounded-full py-3.5 px-6 flex items-center gap-2.5 shadow-[0_4px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_40px_rgba(139,92,246,0.45)] text-sm font-bold"
      >
        <Sparkles className="w-4 h-4" />
        <span className="hidden sm:block">Prototype gratuit</span>
        <Calendar className="w-4 h-4 sm:hidden" />
      </motion.button>

      {/* Contact Modal */}
      <AnimatePresence>
        {showCalendly && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-obsidian/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            onClick={(e) => e.target === e.currentTarget && setShowCalendly(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg bg-obsidian-light border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white z-10 transition-all"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-violet/15 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-brand-violet" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
                  Demandez votre prototype gratuit
                </h3>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                  Décrivez votre projet et nous créons un prototype fonctionnel que vous pourrez tester avant tout engagement.
                </p>
                
                <div className="space-y-4 text-left">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Votre nom</label>
                    <input 
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-violet/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Email</label>
                    <input 
                      type="email" 
                      placeholder="jean@monentreprise.fr"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-violet/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Décrivez votre projet</label>
                    <textarea 
                      rows={3}
                      placeholder="Je cherche un site web pour mon restaurant à Lyon..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-violet/40 transition-colors resize-none"
                    />
                  </div>
                  <button className="btn-primary w-full py-4 font-bold text-sm mt-2">
                    Envoyer ma demande
                  </button>
                </div>
                
                <p className="text-[10px] text-slate-600 mt-4">
                  Réponse sous 24h • Sans engagement • 100% gratuit
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButtons;
