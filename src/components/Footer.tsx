import { Rocket, Send, Camera, Briefcase, Code, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-obsidian pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8 group">
                <div className="w-8 h-8 bg-brand-violet rounded flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <Rocket className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white italic">
                    Nexora<span className="text-brand-violet">Studio</span>
                </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[240px]">
                Le studio digital d'élite propulsé par l'IA et la vérification agentique. Basé au Maroc, au service du monde.
            </p>
            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                    <MapPin className="w-4 h-4 text-brand-violet" />
                    <span>Casablanca, Maroc (GMT+1)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-xs font-medium hover:text-white transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 text-brand-violet" />
                    <span>contact@nexora.studio</span>
                </div>
            </div>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 hover:border-brand-violet/30 transition-all">
                    <Send className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 hover:border-brand-violet/30 transition-all">
                    <Camera className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 hover:border-brand-violet/30 transition-all">
                    <Briefcase className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-violet/20 hover:border-brand-violet/30 transition-all">
                    <Code className="w-5 h-5" />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Solutions Expert</h4>
            <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">MVPs Express (48h-72h)</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Portails Pro & SaaS</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Ingénierie IA Agentique</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Audit & Vérification</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Le Studio</h4>
            <ul className="space-y-4">
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Notre Standard</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Études de Cas</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Témoignages</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-brand-violet transition-colors">Nexora Labs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Prêt à accélérer ?</h4>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Réservez un appel gratuit de 15 min pour discuter de votre pipeline de croissance.
            </p>
            <button className="btn-primary w-full py-4 text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-transform">
                Réserver mon Appel
            </button>
            <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Disponibilité : Immédiate</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="text-slate-600 text-[10px] font-medium uppercase tracking-widest text-center md:text-left">
                © {new Date().getFullYear()} Nexora Studio. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                <a href="#" className="text-slate-600 text-[10px] font-medium uppercase tracking-widest hover:text-white transition-colors">Mentions Légales</a>
                <a href="#" className="text-slate-600 text-[10px] font-medium uppercase tracking-widest hover:text-white transition-colors">Confidentialité</a>
                <a href="#" className="text-slate-600 text-[10px] font-medium uppercase tracking-widest hover:text-white transition-colors">Conditions (CGV)</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
