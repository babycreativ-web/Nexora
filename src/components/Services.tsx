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
    title: "Sites Web Sur Mesure",
    description: "Sites vitrines et e-commerce modernes, rapides et optimisés pour convertir vos visiteurs en clients. Parfaits pour restaurants, cabinets, commerces et indépendants.",
    icon: Globe,
    gradient: "from-violet-500/20 to-indigo-500/20",
    border: "hover:border-violet-500/25"
  },
  {
    title: "Applications Web (SaaS)",
    description: "Applications métier complètes avec tableau de bord, réservation en ligne et gestion clients. Vos processus automatisés, accessibles partout.",
    icon: Smartphone,
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "hover:border-cyan-500/25"
  },
  {
    title: "Applications Desktop",
    description: "Logiciels de bureau performants pour la gestion commerciale, caisse enregistreuse, inventaire ou facturation. Solides et adaptés à votre métier.",
    icon: Monitor,
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "hover:border-emerald-500/25"
  },
  {
    title: "Solutions IA Métier",
    description: "Chatbots intelligents, assistants virtuels et agents IA qui répondent à vos clients, trient vos emails et optimisent votre prise de décision.",
    icon: Bot,
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "hover:border-pink-500/25"
  },
  {
    title: "Automatisation & Workflows",
    description: "Éliminez les tâches répétitives : facturation automatique, relances clients, synchronisation de données et reporting en temps réel.",
    icon: Workflow,
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "hover:border-amber-500/25"
  },
  {
    title: "Tableaux de Bord Décisionnels",
    description: "Visualisez vos indicateurs clés en un coup d'œil. Suivez vos ventes, vos performances et prenez des décisions éclairées instantanément.",
    icon: BarChart4,
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "hover:border-indigo-500/25"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
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
            <span>Nos Services</span>
          </div>
          <h2 className="section-title max-w-4xl">
            Tout ce dont votre entreprise a besoin pour{" "}
            <span className="text-gradient">se digitaliser</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            De la vitrine en ligne à l'application métier complexe, nous concevons des outils digitaux qui génèrent des résultats concrets pour votre activité.
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
              whileHover={{ y: -6 }}
              className={`glass-card p-8 md:p-10 transition-all duration-500 group cursor-default ${service.border} relative overflow-hidden`}
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
