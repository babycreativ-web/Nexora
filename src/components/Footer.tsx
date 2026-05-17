import { Rocket, Mail, MapPin, Send, Briefcase, MessageCircle, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-obsidian pt-16 sm:pt-24 pb-10 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[150px] -z-10" />

      <div className="responsive-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 mb-16 md:mb-20">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a href="#" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-violet to-brand-indigo rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform group-hover:rotate-6">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Nexora<span className="text-brand-violet">.</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs text-pretty">
              Studio digital spécialisé dans les solutions haute-performance pour PME ambitieuses.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-500 text-[11px] font-extrabold uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-brand-violet shrink-0" />
                <span>France & Belgique</span>
              </div>
              <a href="mailto:contact@nexora.studio" className="flex items-center justify-center lg:justify-start gap-3 text-slate-500 text-[11px] font-extrabold uppercase tracking-widest hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-violet shrink-0" />
                <span>contact@nexora.studio</span>
              </a>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Send, label: "Telegram" },
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Briefcase, label: "LinkedIn" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  aria-label={social.label}
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 hover:border-brand-violet/30 transition-all active:scale-90"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden sm:block text-center lg:text-left">
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-[10px] font-display">Expertises</h4>
            <ul className="space-y-4 flex flex-col items-center lg:items-start">
              {[
                "Capture Clients",
                "Applications SaaS",
                "Agents IA Pro",
                "Automatisation",
                "Logiciels Dédiés"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 text-[13px] font-medium hover:text-brand-violet transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-[10px] font-display">Expansion</h4>
            <ul className="space-y-4">
              {[
                { name: "Réalisations", href: "#projets" },
                { name: "Notre Méthode", href: "#methode" },
                { name: "Offres & Tarifs", href: "#tarifs" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 text-[13px] font-medium hover:text-brand-violet transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-[2.5rem] text-center lg:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.3em] text-[10px] font-display">Action Immédiate</h4>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed text-pretty">
              Votre prototype gratuit prêt en 48h. Sans engagement.
            </p>
            <a href="#contact" className="btn-primary w-full shadow-lg group">
              🚀 Lancer mon Prototype
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Disponibilité : Haute</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/[0.04] flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center lg:text-left">
            © {new Date().getFullYear()} Nexora Studio. France & Belgique.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href="#" className="text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Légal</a>
            <a href="#" className="text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="text-slate-600 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
