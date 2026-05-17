import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X, Sparkles, Check } from "lucide-react";
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
            className="fixed inset-0 z-[200] bg-obsidian/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6"
            onClick={(e) => e.target === e.currentTarget && setShowCalendly(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-obsidian-light border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowCalendly(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white z-10 transition-all"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-[10px] font-bold text-brand-violet uppercase tracking-[0.2em] mb-6">
                    <Sparkles className="w-3 h-3" />
                    Zéro risque . 100% Gratuit
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display tracking-tight leading-tight">
                    Votre prototype <br/><span className="text-gradient">prêt sous 48h</span>
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Décrivez votre besoin. Nous créons la base de votre futur outil. Testez avant de payer.
                  </p>
                </div>
                
                {/* Process Steps inside Modal */}
                <div className="grid grid-cols-3 gap-2 mb-10">
                  {[
                    { l: "Réception", d: "Sous 2h" },
                    { l: "Prototype", d: "48h max" },
                    { l: "Validation", d: "Par vous" }
                  ].map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="h-1 bg-white/5 rounded-full mb-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.5 + i * 0.2 }}
                          className="h-full bg-brand-violet/40"
                        />
                      </div>
                      <div className="text-[9px] font-bold text-white uppercase tracking-wider mb-1">{step.l}</div>
                      <div className="text-[9px] text-slate-600 uppercase font-medium">{step.d}</div>
                    </div>
                  ))}
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block ml-1">Nom Complet</label>
                      <input 
                        type="text" 
                        placeholder="Jean Dupont"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-violet/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block ml-1">Email Pro</label>
                      <input 
                        type="email" 
                        placeholder="jean@entreprise.fr"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-violet/40 transition-all"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block ml-1">Décrivez votre besoin (Métier, Objectifs...)</label>
                    <textarea 
                      rows={3}
                      placeholder="Ex: Restaurant à Bruxelles, besoin d'un système de commande..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-violet/40 transition-all resize-none"
                    />
                  </div>
                  <button className="btn-primary w-full py-5 text-base shadow-[0_0_50px_rgba(139,92,246,0.2)] mt-4">
                    Demander mon prototype gratuit
                  </button>
                </form>
                
                <p className="text-[10px] font-medium text-slate-500 mt-8 text-center flex items-center justify-center gap-4">
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-emerald" /> Sans engagement</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-emerald" /> RGPD Compliant</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-emerald" /> 100% Gratuit</span>
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
