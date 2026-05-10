import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Lumina SaaS Dashboard",
    category: "SaaS / Interface Design",
    image: "/saas_dashboard_mockup.png",
    description: "Une plateforme de gestion de données haute performance avec une UX révolutionnaire.",
    tags: ["React", "GSAP", "Tailwind"],
    metrics: "+40% Productivité"
  },
  {
    title: "Aura AI Assistant",
    category: "IA / Automatisation",
    image: "/ai_interface_mockup.png",
    description: "Assistant intelligent intégré pour les flux de travail complexes en entreprise.",
    tags: ["OpenAI API", "React", "Node.js"],
    metrics: "20h gagnées / mois"
  },
  {
    title: "Vantage Agency",
    category: "Landing Page / SEO",
    image: "/agency_landing_mockup.png",
    description: "Site vitrine premium pour une agence de marketing basée à Paris.",
    tags: ["Vite", "Framer Motion", "SEO"],
    metrics: "+200% Conversion"
  }
];

const Portfolio = () => {
  return (
    <section id="projets" className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-violet uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Nos Meilleures Créations</h3>
            <p className="text-slate-400">
              Chaque projet est une opportunité de repousser les limites du design et de la performance.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap">
            Voir tous les projets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-obsidian-light border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-violet/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-obsidian transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        <Code className="w-5 h-5" />
                    </button>
                </div>

                <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-obsidian/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-brand-cyan uppercase tracking-wider">
                        {project.metrics}
                    </div>
                </div>
              </div>

              <div>
                <span className="text-brand-violet text-xs font-bold uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-brand-violet transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium text-slate-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
