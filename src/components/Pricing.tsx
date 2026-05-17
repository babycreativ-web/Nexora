import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Rocket, Crown, MessageSquare } from "lucide-react";
import { cn } from "../lib/utils";

const pricingTiers = [
  {
    name: "Starter",
    price: "290€",
    period: "projet unique",
    description: "Idéal pour les indépendants et petites entreprises qui veulent une présence en ligne professionnelle et rapide.",
    icon: Zap,
    features: [
      "Site vitrine 1 à 3 pages",
      "Design responsive mobile",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Intégration réseaux sociaux",
      "Livraison en 3–5 jours",
    ],
    cta: "Demander un prototype",
    highlighted: false
  },
  {
    name: "Business",
    price: "690€",
    period: "projet unique",
    description: "Pour les entreprises qui veulent une solution digitale complète avec des fonctionnalités avancées.",
    icon: Rocket,
    features: [
      "Site ou app jusqu'à 8 pages",
      "Système de réservation en ligne",
      "Tableau de bord personnalisé",
      "Animations premium",
      "Intégration CRM ou paiement",
      "2 révisions incluses",
      "Support 30 jours",
    ],
    cta: "Choisir Business",
    highlighted: true,
    badge: "Le plus populaire"
  },
  {
    name: "Pro",
    price: "1 290€",
    period: "projet unique",
    description: "Solutions complexes avec IA, automatisation et applications métier sur mesure pour des besoins spécifiques.",
    icon: Crown,
    features: [
      "Application complète sur mesure",
      "Intelligence artificielle intégrée",
      "Automatisation des processus",
      "Application desktop si nécessaire",
      "Architecture scalable",
      "Support prioritaire 60 jours",
      "Maintenance & évolution",
    ],
    cta: "Discuter du projet",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-violet/[0.04] blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-label">
            <span>Tarifs transparents</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Des prix clairs,{" "}
            <span className="text-gradient">sans surprises</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Trouvez la formule adaptée à votre besoin et votre budget. 
            Chaque formule inclut un prototype gratuit pour que vous puissiez valider avant de vous engager.
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
              whileHover={{ y: -6 }}
              className={cn(
                "glass-card p-7 md:p-9 flex flex-col relative transition-all duration-500",
                tier.highlighted 
                  ? "border-brand-violet/30 shadow-[0_0_60px_rgba(139,92,246,0.1)] bg-white/[0.03] lg:scale-[1.03] z-10" 
                  : "border-white/[0.05] hover:border-white/10"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-violet to-brand-indigo rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center",
                    tier.highlighted ? "bg-brand-violet/20" : "bg-white/5"
                  )}>
                    <tier.icon className={cn("w-5 h-5", tier.highlighted ? "text-brand-violet" : "text-slate-400")} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest font-display">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-white font-display">{tier.price}</span>
                  <span className="text-slate-500 text-sm">HT</span>
                </div>
                <span className="text-xs text-slate-500">{tier.period}</span>
                <p className="mt-5 text-slate-400 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-3.5 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-violet/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-violet" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group",
                tier.highlighted 
                  ? "bg-gradient-to-r from-brand-violet to-brand-indigo text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_45px_rgba(139,92,246,0.45)] hover:scale-[1.02] active:scale-95" 
                  : "bg-white/5 text-white hover:bg-white/10 active:scale-95 border border-white/[0.06]"
              )}>
                {tier.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12"
        >
          <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-brand-violet/[0.03] to-transparent">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-brand-violet" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg font-display">Besoin d'un projet sur mesure ?</h4>
                <p className="text-slate-400 text-sm">Contactez-nous pour un devis personnalisé adapté à votre situation.</p>
              </div>
            </div>
            <a href="#contact" className="btn-secondary whitespace-nowrap px-6 py-3 text-sm font-bold shrink-0">
              Demander un devis gratuit
            </a>
          </div>
        </motion.div>

        {/* Trust note */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-emerald/5 border border-brand-emerald/10 rounded-full text-xs text-brand-emerald font-medium">
            <Check className="w-3.5 h-3.5" />
            <span>Prototype gratuit inclus — Payez uniquement après validation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
