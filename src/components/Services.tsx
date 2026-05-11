import { motion } from "framer-motion";
import { 
  Target, 
  Zap, 
  BarChart4, 
  Bot, 
  Clock, 
  Layout, 
  Smartphone, 
  Lock 
} from "lucide-react";

const services = [
  {
    title: "Conversion-Led Design",
    description: "Des sites vitrines ultra-rapides conçus stratégiquement pour transformer vos visiteurs en clients.",
    icon: Target,
    color: "text-blue-400"
  },
  {
    title: "Mise sur le Marché Accélérée",
    description: "Développement de MVP SaaS en 5x moins de temps grâce à notre pipeline agentique.",
    icon: Clock,
    color: "text-yellow-400"
  },
  {
    title: "Automatisation & Gain de Temps",
    description: "Éliminez les tâches répétitives et concentrez-vous sur ce qui fait croître votre business.",
    icon: Zap,
    color: "text-brand-cyan"
  },
  {
    title: "Efficacité IA Personnalisée",
    description: "Intégrez des agents intelligents pour automatiser vos décisions et vos flux de travail.",
    icon: Bot,
    color: "text-green-400"
  },
  {
    title: "Dashboards Décisionnels",
    description: "Visualisez les métriques critiques pour piloter votre croissance avec précision.",
    icon: BarChart4,
    color: "text-brand-violet"
  },
  {
    title: "Performance Mobile Elite",
    description: "Une expérience utilisateur sans friction sur mobile, là où vos clients vous trouvent.",
    icon: Smartphone,
    color: "text-indigo-400"
  },
  {
    title: "Systèmes de Réservation",
    description: "Automatisez vos prises de rendez-vous et gérez vos clients sans effort.",
    icon: Layout,
    color: "text-pink-400"
  },
  {
    title: "Sécurité & Conformité",
    description: "Code sécurisé, robuste et conforme aux normes internationales (RGPD).",
    icon: Lock,
    color: "text-slate-400"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-brand-violet uppercase mb-4">Expérience & Résultats</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">Nous Vendons des Résultats, Pas des Mots Techniques</h3>
          <p className="text-slate-400 max-w-2xl text-lg">
            Nous combinons design d'exception et ingénierie de pointe pour propulser votre croissance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 hover:bg-white/[0.05] transition-all duration-300 group cursor-default border-white/5 hover:border-brand-violet/20"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-violet/20 group-hover:border-brand-violet/30`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-5 leading-snug group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
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
