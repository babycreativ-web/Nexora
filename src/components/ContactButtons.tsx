import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X } from "lucide-react";
import { useState } from "react";

const ContactButtons = () => {
    const [showCalendly, setShowCalendly] = useState(false);

    return (
        <>
            {/* Floating WhatsApp Button */}
            <a 
                href="https://wa.me/yournumber" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 left-8 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
            >
                <MessageCircle className="w-7 h-7" />
                <div className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                    Besoin d'aide ? WhatsApp nous.
                </div>
            </a>

            {/* Floating Calendly Button (Right) */}
            <button 
                onClick={() => setShowCalendly(true)}
                className="fixed bottom-8 right-8 z-[100] btn-primary w-auto rounded-full py-4 px-8 flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm font-black uppercase tracking-widest"
            >
                <Calendar className="w-5 h-5" />
                <span className="hidden md:block">Réserver mon appel gratuit</span>
            </button>

            {/* Calendly Modal Placeholder */}
            <AnimatePresence>
                {showCalendly && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-obsidian/90 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <div className="relative w-full max-w-4xl aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-2xl">
                            <button 
                                onClick={() => setShowCalendly(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-black z-10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            {/* Placeholder for Calendly Embed */}
                            <div className="w-full h-full flex flex-col items-center justify-center bg-white p-12 text-center">
                                <Calendar className="w-20 h-20 text-brand-violet mb-6" />
                                <h3 className="text-3xl font-bold text-black mb-4 italic">Réserver votre Appel Stratégique</h3>
                                <p className="text-slate-500 mb-8 max-w-md">
                                    Ici, vous intégrerez votre widget Calendly pour permettre à vos clients de réserver directement une session de 15 minutes.
                                </p>
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl w-full max-w-sm">
                                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">Code d'intégration Calendly</div>
                                    <code className="text-xs text-brand-violet font-mono">{`<div class="calendly-inline-widget" data-url="https://calendly.com/yourname"></div>`}</code>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactButtons;
