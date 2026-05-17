import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Rocket, Crown, MessageSquare, ShieldCheck, TrendingUp, Star } from "lucide-react";
import { cn } from "../lib/utils";

const pricingTiers = [
  {
    name: "Lancement",
    sub: "Idéal pour débuter",
    price: "290€",
    period: "projet unique",
    description: "La solution parfaite pour booster votre visibilité immédiatement avec un site ultra-rapide.",
    icon: Zap,
    roi: "Objectif : +50% de visibilité locale",
    features: [
      "Site vitrine 1 à 3 pages",
      "Design responsive ultra-fluide",
      "Optimisation SEO Sémantique",
      "Formulaire de capture leads",
      "Livraison éclair en 3–5 jours",
      "Hébergement ultra-rapide",
    ],
    cta: "Lancer mon prototype",
    highlighted: false
  },
  {
    name: "Croissance",
    sub: "Le choix stratégique",
    price: "690€",
    period: "projet unique",
    description: "Une machine à convertir avec outils métier intégrés pour automatiser votre croissance.",
    icon: Rocket,
    roi: "Objectif : Automatiser 20h/mois",
    features: [
      "Site ou app jusqu'à 8 pages",
      "Système de réservation / RDV",
      "Animations premium & UX avancée",
      "Intégration CRM / Paiements",
      "Analyse de conversion (Analytics)",
      "2 révisions stratégiques",
      "Support prioritaire 30 jours",
    ],
    cta: "Choisir la Croissance",
    highlighted: true,
    badge: "Le plus populaire",
    socialProof: "Choisi par 80% des PME"
  },
  {
    name: "Élite",
    sub: "Domination totale",
    price: "1 290€",
    period: "projet unique",
    description: "L'artillerie lourde : IA, automatisation totale et écosystème digital complet sur mesure.",
    icon: Crown,
    roi: "Objectif : ROI massif & Scalabilité",
    features: [
      "Application métier full-stack",
      "Agents IA personnalisés (Chatbots)",
      "Automatisation de workflows",
      "Tableau de bord décisionnel",
      "Sécurité & Architecture scalable",
      "Support VIP 60 jours",
      "Maintenance & Évolution 3 mois",
    ],
    cta: "Devenir leader",
    highlighted: false
  }
];

const Pricing = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".glow-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section id="tarifs" className="py-20 md:py-28 relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-violet/[0.04] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="section-label">
            <Star className="w-3 h-3" />
            <span>Investissement Rentable</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Prêt à passer à la{" "}
            <span className="text-gradient">vitesse supérieure ?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Pas de frais cachés, pas d'abonnement forcé. Vous achetez un outil de croissance, 
            <span className="text-white font-medium"> vous ne payez qu'après validation du prototype.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "glass-card glow-card p-8 md:p-10 flex flex-col relative transition-all duration-500",
                tier.highlighted 
                  ? "border-brand-violet/40 shadow-[0_0_60px_rgba(139,92,246,0.15)] bg-white/[0.04] lg:scale-[1.05] z-10" 
                  : "border-white/[0.06] hover:border-white/20"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-violet rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] z-20 whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center m-auto lg:m-0",
                    tier.highlighted ? "bg-brand-violet/20" : "bg-white/5"
                  )}>
                    <tier.icon className={cn("w-6 h-6", tier.highlighted ? "text-brand-violet" : "text-slate-400")} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-display">{tier.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{tier.sub}</p>
                  </div>
                </div>
                
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-white font-display tracking-tight">{tier.price}</span>
                  <span className="text-slate-500 text-sm font-bold">HT</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-600 mb-6">{tier.period}</div>
                
                <div className="p-3 rounded-xl bg-brand-emerald/5 border border-brand-emerald/10 mb-6 group cursor-default">
                  <div className="flex items-center gap-2 text-brand-emerald text-xs font-bold transition-all group-hover:scale-105">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {tier.roi}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-violet" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {tier.socialProof && (
                <p className="text-center text-[10px] font-bold uppercase tracking-widest text-brand-violet mb-4 animate-pulse">
                  {tier.socialProof}
                </p>
              )}

              <button className={cn(
                "w-full py-5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group relative z-20",
                tier.highlighted 
                  ? "bg-brand-violet text-white shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              )}>
                {tier.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Multi-tier trust footer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, text: "Satisfait ou nous recommençons" },
            { icon: Zap, text: "Zéro engagement sur la durée" },
            { icon: MessageSquare, text: "Accès direct aux développeurs" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-slate-500 hover:text-slate-300 transition-colors cursor-default group">
              <item.icon className="w-4 h-4 text-brand-violet/40 group-hover:text-brand-violet transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
