import { Rocket, Mail, MapPin, Send, Briefcase, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-obsidian pt-20 md:pt-24 pb-10 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-violet to-brand-indigo rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                Nexora<span className="text-brand-violet">Studio</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-[260px]">
              Studio digital spécialisé dans la création de sites web, applications et solutions IA pour les PME en France et en Belgique.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                <MapPin className="w-4 h-4 text-brand-violet shrink-0" />
                <span>France & Belgique</span>
              </div>
              <a href="mailto:contact@nexora.studio" className="flex items-center gap-3 text-slate-500 text-xs font-medium hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-violet shrink-0" />
                <span>contact@nexora.studio</span>
              </a>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Send, label: "Telegram" },
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Briefcase, label: "LinkedIn" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/15 hover:border-brand-violet/25 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px] font-display">Services</h4>
            <ul className="space-y-3">
              {[
                "Sites Web Sur Mesure",
                "Applications Métier",
                "Solutions IA & Chatbots",
                "Automatisation",
                "Applications Desktop"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px] font-display">Ressources</h4>
            <ul className="space-y-3">
              {[
                { name: "Nos réalisations", href: "#projets" },
                { name: "Comment ça marche", href: "#methode" },
                { name: "Tarifs", href: "#tarifs" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 text-sm hover:text-brand-violet transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-[10px] font-display">Prêt à commencer ?</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Obtenez un prototype gratuit de votre projet en moins de 48h. Sans engagement.
            </p>
            <a href="#contact" className="btn-primary block w-full py-4 text-center text-xs font-bold uppercase tracking-widest">
              Demander un prototype
            </a>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Disponible maintenant</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-medium uppercase tracking-widest text-center lg:text-left">
            © {new Date().getFullYear()} Nexora Studio. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-slate-600 text-[10px] font-medium uppercase tracking-widest hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="text-slate-600 text-[10px] font-medium uppercase tracking-widest hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-slate-600 text-[10px] font-medium uppercase tracking-widest hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
