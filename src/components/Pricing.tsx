import { motion } from "framer-motion";
import { Check, Info, Zap, Shield, Rocket } from "lucide-react";
import { cn } from "../lib/utils";

const pricingTiers = [
  {
    name: "L'MVP EXPRESS",
    time: "48-72 Heures",
    price: "399€",
    description: "Parfait pour valider une idée ou lancer un outil rapidement.",
    icon: Zap,
    features: [
      "Landing Page haute conversion",
      "Optimisation mobile extrême",
      "Ingénierie de vérification",
      "Formulaire de contact & WA",
      "SEO technique optimisé",
      "Livraison ultra-rapide"
    ],
    cta: "Lancer mon MVP",
    highlighted: false
  },
  {
    name: "STUDIO PRO",
    time: "2-3 Semaines",
    price: "899€",
    description: "Application web complète avec backend et design sur mesure.",
    icon: Rocket,
    features: [
      "Jusqu'à 8 pages premium",
      "Système CMS personnalisé",
      "Dashboard utilisateur",
      "Animations GSAP d'élite",
      "Vérification agentique continue",
      "Support prioritaire 1-on-1"
    ],
    cta: "Réserver un appel",
    highlighted: true,
    badge: "Plus Populaire"
  },
  {
    name: "ENTERPRISE BRIDGE",
    time: "Sur Mesure",
    price: "Sur Devis",
    description: "Solutions complexes, IA custom et automatisations desktop.",
    icon: Shield,
    features: [
      "Applications Web & Desktop",
      "Intégrations IA (LLM/Agents)",
      "Automatisations de processus",
      "Audit de sécurité complet",
      "Infrastructure scalable",
      "Maintenance & Évolution"
    ],
    cta: "Parler de votre projet",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-violet/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-violet uppercase mb-4">Investissement</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Transparence & Vitesse de Mise sur le Marché</h3>
          <p className="text-slate-400 max-w-2xl text-lg">
            Nous ne vendons pas seulement du code, nous vendons de la vélocité. 
            Choisissez le plan adapté à votre ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "glass-card p-8 flex flex-col relative transition-all duration-500",
                tier.highlighted ? "border-brand-violet shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-white/[0.03] lg:scale-105 z-10" : "border-white/5 hover:border-white/10"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-violet rounded-full text-[10px] font-black uppercase tracking-tighter text-white shadow-lg">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <tier.icon className="w-5 h-5 text-brand-violet" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest">{tier.name}</h4>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white">{tier.price}</span>
                    {tier.price !== "Sur Devis" && <span className="text-slate-500 text-sm">HT</span>}
                </div>
                <div className="mt-3 flex items-center gap-2 text-brand-cyan text-xs font-bold uppercase tracking-wide">
                    <Zap className="w-3 h-3" />
                    <span>Délai : {tier.time}</span>
                </div>
                <p className="mt-6 text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-violet/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-violet" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all",
                tier.highlighted 
                  ? "bg-brand-violet text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-95" 
                  : "bg-white/5 text-white hover:bg-white/10 active:scale-95 border border-white/5"
              )}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-obsidian-light border border-white/5 rounded-full text-[11px] text-slate-500 font-medium">
                <Info className="w-4 h-4 text-brand-violet" />
                <span>Tous nos prix sontHT. Support technique international inclus.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
