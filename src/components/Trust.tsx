import { motion } from "framer-motion";
import { Shield, Clock, RefreshCw, Headphones, CreditCard, CheckCircle2, TrendingUp, Trophy } from "lucide-react";

const trustPoints = [
  {
    title: "Prototype Pro en 48h",
    description: "Nous matérialisons votre vision en un temps record. Testez l'interface réelle avant de prendre une décision.",
    icon: Clock,
    gradient: "from-brand-violet to-indigo-500"
  },
  {
    title: "Validation sans risque",
    description: "Le paiement ne se déclenche qu'après votre signature sur le prototype. Pas de satisfaction, pas de facture.",
    icon: Shield,
    gradient: "from-brand-emerald to-teal-500"
  },
  {
    title: "Propriété Totale",
    description: "Contrairement aux agences traditionnelles, vous êtes 100% propriétaire du code et de votre infrastructure.",
    icon: CreditCard,
    gradient: "from-brand-cyan to-blue-500"
  }
];

const metrics = [
  { label: "Taux de réussite", value: "99%", icon: CheckCircle2 },
  { label: "Prototype fourni", value: "48h", icon: Clock },
  { label: "Engagement client", value: "x3", icon: TrendingUp },
  { label: "Score Qualité", value: "95+", icon: Trophy },
];

const Trust = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-brand-violet/[0.02] to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="section-label">
            <span>Sécurité Maximale</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Nous portons le risque,{" "}
            <span className="text-gradient">vous récoltez les fruits</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Notre modèle est simple : nous prouvons notre valeur par le travail avant de demander le moindre investissement.
          </p>
        </motion.div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] text-center"
            >
              <metric.icon className="w-5 h-5 text-brand-violet mx-auto mb-3 opacity-50" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-display tracking-tight">{metric.value}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card p-10 group relative overflow-hidden glow-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-lg`}>
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-display tracking-tight">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{point.description}</p>
                
                <div className="flex items-center gap-2 text-[10px] font-bold text-brand-violet uppercase tracking-widest">
                  <CheckCircle2 className="w-3 h-3" />
                  Garantie Nexora
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support & Revision mini-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          {[
            { title: "2 cycles de révisions offerts", icon: RefreshCw, desc: "Pour une perfection absolue." },
            { title: "Support Expert 7j/7", icon: Headphones, desc: "Une question ? On répond en < 2h." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -4 }}
              className="px-6 py-5 rounded-2xl bg-white/[0.01] border border-white/[0.04] flex items-center gap-5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:bg-brand-violet/10 transition-colors">
                <item.icon className="w-5 h-5 text-slate-500 group-hover:text-brand-violet transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
