import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Julien Morel",
    role: "CEO de TechStart Paris",
    content: "Nexora a livré notre MVP en moins de 72 heures. La qualité du code et du design est simplement bluffante. Leur standard de vérification nous a sauvés de plusieurs bugs critiques.",
    country: "France 🇫🇷",
    rating: 5
  },
  {
    name: "Amine El Amrani",
    role: "Fondateur de Dubai RealEstate Lab",
    content: "L'intégration de l'agent IA dans notre CRM a transformé notre flux de prospects. Travailler avec une agence qui comprend les enjeux de vitesse de Dubai est un vrai plus.",
    country: "UAE 🇦🇪",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager @ London Fintech",
    content: "Excellent focus sur la conformité et la sécurité. Le processus est transparent et les résultats sont là. +200% de conversion sur notre nouvelle landing page.",
    country: "UK 🇬🇧",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-obsidian">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-brand-violet uppercase mb-4">Confiance</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 italic">Ce Que Disent Nos Partenaires</h3>
          <p className="text-slate-400 max-w-2xl text-lg italic">
            "La confiance se gagne par les résultats, pas par les promesses."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 hover:border-brand-violet/30 transition-all group flex flex-col h-full bg-white/[0.02]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-violet text-brand-violet" />
                ))}
              </div>
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-violet/10 -z-10" />
                <p className="text-slate-300 text-lg leading-relaxed relative italic">
                  "{t.content}"
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-white text-lg">{t.name}</h4>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {t.country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nexora Labs Project Proof */}
        <div className="mt-20 p-1 bg-gradient-to-r from-brand-violet/20 via-brand-cyan/20 to-brand-violet/20 rounded-[40px]">
            <div className="bg-obsidian-light rounded-[39px] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
                        <SparkleIcon className="w-3 h-3" />
                        <span>Nexora Labs Project</span>
                    </div>
                    <h4 className="text-3xl md:text-5xl font-bold mb-6 italic">Nexora-CRM : Établi en 4 heures.</h4>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Nous utilisons nos propres outils pour gérer nos leads internationaux. Construit avec notre stack d'élite en un après-midi pour prouver l'efficacité de l'Ingénierie Agentique.
                    </p>
                    <button className="flex items-center gap-2 text-brand-violet font-bold hover:gap-4 transition-all group">
                        Explorer le Labs Project <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="w-full lg:w-1/3 aspect-video bg-obsidian rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" alt="CRM Demo" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Quote className="w-12 h-12 text-brand-violet animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const SparkleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
);

export default Testimonials;
