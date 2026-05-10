import React from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { cn } from "../lib/utils";

const pricingTiers = [
  {
    name: "PACK STARTER",
    price: "399€",
    description: "Parfait pour lancer votre activité en ligne.",
    features: [
      "Site vitrine moderne",
      "1 à 3 pages",
      "Responsive mobile",
      "Formulaire de contact",
      "Intégration WhatsApp",
      "SEO basique",
      "Livraison en 7 jours"
    ],
    cta: "Commencer",
    highlighted: false
  },
  {
    name: "PACK PROFESSIONAL",
    price: "899€",
    description: "Le choix idéal pour les entreprises en croissance.",
    features: [
      "Jusqu’à 8 pages",
      "Design premium sur mesure",
      "Animations modernes GSAP",
      "SEO avancé & Performance",
      "Système de réservation/contact",
      "CMS intégré (Gestion contenu)",
      "Support prioritaire"
    ],
    cta: "Réserver un appel",
    highlighted: true,
    badge: "Le plus populaire"
  },
  {
    name: "PACK PREMIUM",
    price: "Sur devis",
    description: "Solutions complexes et applications sur mesure.",
    features: [
      "SaaS MVP & Dashboards",
      "Applications Web complexes",
      "Intégrations IA personnalisées",
      "Automatisations Business",
      "Backend & API dédiés",
      "Support 24/7",
      "Mise à jour & Maintenance"
    ],
    cta: "Parler de votre projet",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section id="tarifs" className="py-24 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-violet/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-violet uppercase mb-4">Investissement</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Des Tarifs Clairs & Sans Surprise</h3>
          <p className="text-slate-400 max-w-2xl">
            Des packages conçus pour s'adapter à chaque étape de votre développement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "glass-card p-8 flex flex-col relative",
                tier.highlighted ? "border-brand-violet shadow-[0_0_40px_rgba(139,92,246,0.1)] scale-105 z-10" : "border-white/5"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-violet rounded-full text-xs font-bold text-white shadow-lg">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">{tier.name}</h4>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold">{tier.price}</span>
                    {tier.price !== "Sur devis" && <span className="text-slate-400">/projet</span>}
                </div>
                <p className="mt-4 text-slate-400 text-sm">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-violet/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-violet" />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                tier.highlighted 
                  ? "bg-brand-violet text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] active:scale-95" 
                  : "bg-white/5 text-white hover:bg-white/10 active:scale-95"
              )}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-obsidian-light border border-white/5 rounded-lg text-xs text-slate-500">
                <Info className="w-4 h-4" />
                <span>Tous les prix sont indicatifs et peuvent varier selon la complexité.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
