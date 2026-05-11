import { motion } from "framer-motion";
import { PhoneCall, Layers, Code2, Globe } from "lucide-react";

const steps = [
  {
    title: "Appel Stratégique",
    description: "15 minutes pour comprendre vos goulots d'étranglement et définir vos objectifs de croissance.",
    icon: PhoneCall,
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    title: "Architecture & IA",
    description: "Nous concevons une solution sur mesure, intégrant design premium et intelligence agentique.",
    icon: Layers,
    color: "bg-brand-violet/10 text-brand-violet"
  },
  {
    title: "Développement Accéléré",
    description: "Notre pipeline agentique code 5x plus vite avec une vérification automatisée en temps réel.",
    icon: Code2,
    color: "bg-brand-cyan/10 text-brand-cyan"
  },
  {
    title: "Livraison & Sécurité",
    description: "Déploiement mondial (Edge), conformité RGPD et support international continu.",
    icon: Globe,
    color: "bg-green-500/10 text-green-400"
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-obsidian-light/20 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-brand-violet uppercase mb-4">Notre Méthode</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Comment Nous Accélérons Votre Business</h3>
          <p className="text-slate-400 max-w-2xl text-lg">
            Un processus transparent, rigoureux et orienté vers une mise sur le marché ultra-rapide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-28 h-28 rounded-3xl ${step.color} border border-white/5 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl`}>
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-obsidian border border-brand-violet/30 flex items-center justify-center font-black text-brand-violet text-sm">
                    0{index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand-violet transition-colors">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
