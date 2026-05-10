import { motion } from "framer-motion";
import { 
  Globe, 
  Zap, 
  Database, 
  Cpu, 
  Bot, 
  BarChart3, 
  Smartphone, 
  Search 
} from "lucide-react";

const services = [
  {
    title: "Création de Sites Web",
    description: "Des sites vitrines ultra-rapides et esthétiques pour marquer les esprits.",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    title: "Landing Pages Haute Conversion",
    description: "Optimisées pour transformer vos visiteurs en clients fidèles.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Développement SaaS",
    description: "Nous construisons votre MVP avec les technologies les plus évolutives.",
    icon: Database,
    color: "text-purple-400"
  },
  {
    title: "Intégration IA",
    description: "Ajoutez de l'intelligence à vos outils avec LLM et Custom Agents.",
    icon: Bot,
    color: "text-green-400"
  },
  {
    title: "Automatisation Business",
    description: "Gagnez du temps en automatisant vos processus répétitifs.",
    icon: Cpu,
    color: "text-red-400"
  },
  {
    title: "Dashboards & Outils Internes",
    description: "Visualisez vos données avec des interfaces sur mesure.",
    icon: BarChart3,
    color: "text-brand-cyan"
  },
  {
    title: "Optimisation Mobile",
    description: "Une expérience fluide sur tous les supports, sans exception.",
    icon: Smartphone,
    color: "text-indigo-400"
  },
  {
    title: "SEO & Performance",
    description: "Dominez les résultats de recherche avec un code optimisé.",
    icon: Search,
    color: "text-brand-violet"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-obsidian-light/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-violet uppercase mb-4">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Expertise Digitale & IA</h3>
          <p className="text-slate-400 max-w-2xl">
            Nous combinons design d'exception et technologies de pointe pour propulser votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:bg-brand-violet/20 group-hover:border-brand-violet/30`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-brand-violet transition-colors">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
