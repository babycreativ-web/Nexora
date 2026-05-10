import { Rocket, Send, Camera, Briefcase, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-obsidian pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
                <div className="w-8 h-8 bg-brand-violet rounded flex items-center justify-center">
                    <Rocket className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                    Nexora<span className="text-brand-violet">Studio</span>
                </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Le studio digital d'élite pour les startups et PME qui exigent l'excellence.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 transition-all">
                    <Send className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 transition-all">
                    <Camera className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 transition-all">
                    <Briefcase className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 transition-all">
                    <Code className="w-5 h-5" />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Service</h4>
            <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Sites Web</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">SaaS MVP</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">IA & Automatisation</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">SEO Advanced</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Studio</h4>
            <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">À Propos</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Tarifs</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Prêt à démarrer?</h4>
            <p className="text-slate-400 text-sm mb-6">
                Réservez un appel gratuit de 15 min pour discuter de votre projet.
            </p>
            <button className="btn-primary w-full py-3 text-sm">
                Réserver un appel
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs text-center md:text-left">
                © {new Date().getFullYear()} Nexora Studio. Tous droits réservés.
            </p>
            <div className="flex gap-6">
                <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Mention Légales</a>
                <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Confidentialité</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
