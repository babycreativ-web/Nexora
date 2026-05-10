import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Nous analysons vos besoins et définissons la stratégie digitale optimale."
  },
  {
    number: "02",
    title: "Design",
    description: "Création d'interfaces premium, minimalistes et centrées sur l'utilisateur."
  },
  {
    number: "03",
    title: "Développement",
    description: "Codage haute performance avec React, Tailwind et des animations fluides."
  },
  {
    number: "04",
    title: "Livraison",
    description: "Déploiement, optimisation SEO finale et support pour le lancement."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-violet uppercase mb-4">Notre Processus</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">De l'Idée à la Réalité</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 transition-colors group-hover:text-brand-violet/10">
                {step.number}
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-brand-violet" />
                  {step.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
