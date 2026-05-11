import { motion } from "framer-motion";
import { ExternalLink, Code, BarChart, Users, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Lumina SaaS Dashboard",
    category: "SaaS / Fintech",
    image: "/saas_dashboard_mockup.png",
    problem: "Temps de traitement des données trop long pour les analystes financiers.",
    solution: "Pipeline de données temps réel avec interface minimaliste ultra-réactive.",
    result: "+40% de productivité opérationnelle",
    metrics: [
       { label: "Vitesse", value: "+300%", icon: BarChart },
       { label: "Utilisateurs", value: "2k+", icon: Users }
    ],
    tags: ["React", "Custom Engine", "Fintech"]
  },
  {
    title: "Aura AI Assistant",
    category: "IA / Enterprise",
    image: "/ai_interface_mockup.png",
    problem: "Goulot d'étranglement dans le support client interne.",
    solution: "Agent IA autonome capable de résoudre 70% des tickets sans intervention.",
    result: "Économie de 50h / semaine",
    metrics: [
        { label: "Automatisation", value: "70%", icon: Code },
        { label: "ROI", value: "Inscrit", icon: CheckCircle }
     ],
    tags: ["LLM Agents", "Node.js", "AI"]
  },
  {
    title: "Vantage Luxury Agency",
    category: "Landing Page / Conversion",
    image: "/agency_landing_mockup.png",
    problem: "Faible taux de conversion sur mobile pour un service premium.",
    solution: "Refonte UX orientée mobile-first avec animations psychologiques.",
    result: "+215% de prospects qualifiés",
    metrics: [
        { label: "Conversion", value: "+215%", icon: BarChart },
        { label: "Vitesse Mob", value: "99/100", icon: Code }
     ],
    tags: ["GSAP", "Vite", "SEO Opt"]
  }
];

const Portfolio = () => {
  return (
    <section id="projets" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black tracking-[0.3em] text-brand-violet uppercase mb-4">Études de Cas</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 italic">Nos Partenariats de Croissance</h3>
            <p className="text-slate-400 text-lg">
              Derrière chaque design, il y a un objectif business atteint. 
              Découvrez comment nous avons transformé des défis en opportunités.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap px-8 py-4 border-brand-violet/20 hover:border-brand-violet/40">
            Voir tous les projets (15+)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 bg-obsidian-light border border-white/5 group-hover:border-brand-violet/30 transition-colors shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-90 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-white/50 bg-white/5 px-2 py-1 rounded border border-white/10 backdrop-blur-md uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">{project.title}</h4>
                    <div className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="flex gap-2">
                            <span className="text-brand-violet font-bold text-xs shrink-0">DÉFI:</span>
                            <span className="text-slate-400 text-xs leading-relaxed">{project.problem}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-brand-cyan font-bold text-xs shrink-0">RÉSULTAT:</span>
                            <span className="text-white font-bold text-xs uppercase tracking-wider">{project.result}</span>
                        </div>
                    </div>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 bg-brand-violet rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5" />
                    </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((m, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <m.icon className="w-4 h-4 text-brand-violet mb-2" />
                        <div className="text-xl font-bold text-white">{m.value}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{m.label}</div>
                    </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
