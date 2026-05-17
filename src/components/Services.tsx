import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Bot, 
  Workflow,
  BarChart4 
} from "lucide-react";

const services = [
  {
    title: "Capture de Prospects",
    description: "Sites vitrines et e-commerce conçus comme des machines à convertir. Nous optimisons chaque pixel pour transformer vos visiteurs en clients fidèles.",
    icon: Globe,
    gradient: "from-violet-500/20 to-indigo-500/20",
    border: "hover:border-violet-500/25"
  },
  {
    title: "Efficacité Opérationnelle",
    description: "Applications web métier (SaaS) sur mesure pour centraliser votre activité. Gérez vos réservations, vos clients et vos stocks en temps réel.",
    icon: Smartphone,
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "hover:border-cyan-500/25"
  },
  {
    title: "Outils de Gestion Locaux",
    description: "Logiciels desktop robustes (Windows/Mac) pour points de vente, caisses enregistreuses et inventaires complexes. Performance sans compromis.",
    icon: Monitor,
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "hover:border-emerald-500/25"
  },
  {
    title: "Intelligence Augmentée",
    description: "Agents IA entraînés sur vos données pour automatiser votre support client 24/7 et trier vos flux d'informations critiques instantanément.",
    icon: Bot,
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "hover:border-pink-500/25"
  },
  {
    title: "Automatisation Totale",
    description: "Éliminez 90% de vos tâches manuelles répétitives. Nous connectons vos outils pour automatiser facturation, relances et workflows.",
    icon: Workflow,
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "hover:border-amber-500/25"
  },
  {
    title: "Pilotage Stratégique",
    description: "Tableaux de bord interactifs (Analytics) pour visualiser vos indicateurs clés. Prenez des décisions basées sur des données réelles, pas sur l'intuition.",
    icon: BarChart4,
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "hover:border-indigo-500/25"
  }
];

const Services = () => {
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
    <section id="services" className="py-20 md:py-28 relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/30 to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="section-label">
            <span>Maximisez vos Revenus</span>
          </div>
          <h2 className="section-title max-w-4xl">
            Des outils de pointe pour{" "}
            <span className="text-gradient">transformer votre business</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Nous ne vendons pas du code. Nous installons des systèmes de croissance robustes, sécurisés et 100% automatisés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true, margin: "-40px" }}
              className={`glass-card glow-card p-8 md:p-10 transition-all duration-500 group cursor-default ${service.border} relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-7 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-violet/15 group-hover:border-brand-violet/25">
                  <service.icon className="w-7 h-7 text-brand-violet transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug text-white font-display">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
