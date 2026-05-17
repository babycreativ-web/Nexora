import { motion } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Échange gratuit",
    description: "On discute de votre projet pendant 15 minutes. Vous nous expliquez vos besoins, nous vous proposons la meilleure approche.",
    icon: MessageSquare,
    gradient: "from-blue-500 to-indigo-500",
    highlight: "Gratuit, sans engagement"
  },
  {
    title: "Prototype offert",
    description: "Nous créons un premier prototype fonctionnel de votre projet. Vous voyez le résultat concret avant tout paiement.",
    icon: Palette,
    gradient: "from-brand-violet to-purple-500",
    highlight: "Vous testez avant de payer"
  },
  {
    title: "Développement",
    description: "Après validation du prototype, nous développons votre solution complète avec des points d'avancement réguliers.",
    icon: Code2,
    gradient: "from-brand-cyan to-blue-500",
    highlight: "Suivi transparent"
  },
  {
    title: "Livraison & Support",
    description: "Votre projet est livré, mis en ligne et nous restons disponibles pour les ajustements et le support technique.",
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-500",
    highlight: "2 révisions incluses"
  }
];

const Process = () => {
  return (
    <section id="methode" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/15 to-obsidian pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="section-label">
            <span>Comment ça marche</span>
          </div>
          <h2 className="section-title max-w-3xl">
            De l'idée au résultat en{" "}
            <span className="text-gradient">4 étapes simples</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Un processus clair et transparent. Pas de surprises, pas de jargon technique — juste des résultats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl opacity-90`}>
                  <step.icon className="w-9 h-9 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-obsidian border-2 border-brand-violet/40 flex items-center justify-center font-bold text-brand-violet text-sm font-display">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-brand-violet transition-colors font-display">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[220px] mb-4">
                {step.description}
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/5 px-3 py-1 rounded-full border border-brand-cyan/10">
                {step.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-3 py-4 px-8 text-base group">
            Commencer maintenant
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
