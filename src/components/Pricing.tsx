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
    if (window.innerWidth < 1024) return;
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
    <section id="tarifs" className="section-spacing relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[900px] bg-brand-violet/[0.04] blur-[150px] -z-10" />

      <div className="responsive-container relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-20"
        >
          <div className="section-label">
            <Star className="w-3 h-3" />
            <span>Investissement Rentable</span>
          </div>
          <h2 className="section-title max-w-3xl text-balance">
            Prêt à passer à la{" "}
            <span className="text-gradient">vitesse supérieure ?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-pretty">
            Pas de frais cachés, pas d'abonnement forcé. Vous achetez un outil de croissance, 
            <span className="text-white font-medium"> vous ne payez qu'après validation du prototype.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch max-w-lg lg:max-w-none mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "glass-card glow-card p-8 sm:p-10 flex flex-col relative transition-all duration-500",
                tier.highlighted 
                  ? "border-brand-violet/40 shadow-[0_0_60px_rgba(139,92,246,0.15)] bg-white/[0.04] lg:scale-[1.05] z-10" 
                  : "border-white/[0.06] hover:border-white/20"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-brand-violet rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] z-20 whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-10 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 shadow-inner",
                    tier.highlighted ? "bg-brand-violet/20 border border-brand-violet/30" : "bg-white/5 border border-white/10"
                  )}>
                    <tier.icon className={cn("w-7 h-7", tier.highlighted ? "text-brand-violet" : "text-slate-400")} />
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-base sm:text-lg font-bold text-slate-200 uppercase tracking-widest font-display">{tier.name}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{tier.sub}</p>
                  </div>
                </div>
                
                <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-bold text-white font-display tracking-tight">{tier.price}</span>
                  <span className="text-slate-500 text-sm font-bold uppercase">HT</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-600 mb-8">{tier.period}</div>
                
                <div className="p-4 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/10 mb-8 group cursor-default">
                  <div className="flex items-center gap-2.5 text-brand-emerald text-[11px] font-bold transition-all group-hover:scale-105">
                    <TrendingUp className="w-4 h-4" />
                    {tier.roi}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed text-pretty">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-brand-violet/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-violet/20">
                      <Check className="w-2.5 h-2.5 text-brand-violet" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {tier.socialProof && (
                <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-violet mb-5 animate-pulse">
                  {tier.socialProof}
                </p>
              )}

              <button className={cn(
                tier.highlighted ? "btn-primary" : "btn-secondary",
                "w-full"
              )}>
                {tier.cta}
                <ArrowRight className="w-5 h-5 lucide-arrow-right" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Multi-tier trust footer */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {[
            { icon: ShieldCheck, text: "Satisfait ou nous recommençons" },
            { icon: Zap, text: "Zéro engagement sur la durée" },
            { icon: MessageSquare, text: "Accès direct aux développeurs" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-4 text-slate-500 hover:text-slate-300 transition-colors cursor-default group">
              <item.icon className="w-5 h-5 text-brand-violet/40 group-hover:text-brand-violet transition-colors flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
