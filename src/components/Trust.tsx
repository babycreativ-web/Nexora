import { motion } from "framer-motion";
import { Shield, Clock, RefreshCw, Headphones, CreditCard } from "lucide-react";

const trustPoints = [
  {
    title: "Prototype gratuit",
    description: "Vous testez un prototype fonctionnel de votre projet avant de dépenser le moindre centime. Aucun engagement.",
    icon: Shield,
    gradient: "from-brand-violet to-indigo-500"
  },
  {
    title: "Payez après validation",
    description: "Vous ne payez qu'après avoir validé le prototype. Si ça ne vous convient pas, vous ne payez rien.",
    icon: CreditCard,
    gradient: "from-brand-emerald to-teal-500"
  },
  {
    title: "Livraison en 3 à 10 jours",
    description: "Selon la complexité du projet, nous livrons rapidement. Vous êtes informé à chaque étape de l'avancement.",
    icon: Clock,
    gradient: "from-brand-cyan to-blue-500"
  },
  {
    title: "2 révisions incluses",
    description: "Chaque projet inclut 2 cycles de révision gratuits pour que le résultat corresponde exactement à vos attentes.",
    icon: RefreshCw,
    gradient: "from-amber-500 to-orange-500"
  },
  {
    title: "Support après livraison",
    description: "Nous ne disparaissons pas après la livraison. Support technique inclus pendant 30 à 60 jours selon la formule.",
    icon: Headphones,
    gradient: "from-pink-500 to-rose-500"
  }
];

const Trust = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/20 to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-label">
            <span>Nos engagements</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Zéro risque,{" "}
            <span className="text-gradient">100% confiance</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Nous avons conçu notre processus pour éliminer tous les risques. 
            Vous gardez le contrôle à chaque étape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.slice(0, 3).map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 md:p-10 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg`}>
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {trustPoints.slice(3).map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 md:p-10 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg`}>
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
