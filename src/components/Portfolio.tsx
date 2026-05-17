import { motion } from "framer-motion";
import { ExternalLink, BarChart, Users, CheckCircle, Star } from "lucide-react";

const projects = [
  {
    title: "Restaurant Le Comptoir",
    category: "Site Vitrine / Réservation",
    image: "/saas_dashboard_mockup.png",
    problem: "Pas de visibilité en ligne, réservations uniquement par téléphone.",
    solution: "Site vitrine premium avec système de réservation intégré et menu digital.",
    result: "+120% de réservations en ligne",
    metrics: [
      { label: "Réservations", value: "+120%", icon: BarChart },
      { label: "Clients", value: "850+", icon: Users }
    ],
    tags: ["Site Vitrine", "Réservation", "Restaurant"]
  },
  {
    title: "Cabinet Juridique Moreau",
    category: "Application Métier",
    image: "/ai_interface_mockup.png",
    problem: "Gestion de dossiers clients chronophage et désorganisée.",
    solution: "Application web sur mesure avec CRM intégré, suivi automatique et facturation.",
    result: "15h gagnées par semaine",
    metrics: [
      { label: "Gain de temps", value: "15h/sem", icon: BarChart },
      { label: "Dossiers", value: "300+", icon: CheckCircle }
    ],
    tags: ["Application Web", "CRM", "Juridique"]
  },
  {
    title: "Clinique Santé Plus",
    category: "IA & Automatisation",
    image: "/agency_landing_mockup.png",
    problem: "Secrétariat médical surchargé, patients insatisfaits de l'attente.",
    solution: "Chatbot IA pour prise de RDV, rappels automatiques et formulaires pré-consultation.",
    result: "Temps d'attente réduit de 60%",
    metrics: [
      { label: "Satisfaction", value: "97%", icon: Star },
      { label: "Automatisation", value: "80%", icon: CheckCircle }
    ],
    tags: ["IA", "Chatbot", "Santé"]
  }
];

const Portfolio = () => {
  return (
    <section id="projets" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/20 to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <div className="section-label">
              <span>Études de cas</span>
            </div>
            <h2 className="section-title">
              Des résultats concrets pour des{" "}
              <span className="text-gradient">entreprises réelles</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Découvrez comment nous avons aidé des PME en France et en Belgique à transformer leur activité grâce au digital.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true, margin: "-40px" }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-obsidian-card border border-white/[0.06] group-hover:border-brand-violet/25 transition-all duration-500 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-white/60 bg-white/5 px-2 py-1 rounded-md border border-white/10 backdrop-blur-md uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white font-display">{project.title}</h3>
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex gap-2">
                      <span className="text-brand-violet font-bold text-xs shrink-0">DÉFI :</span>
                      <span className="text-slate-400 text-xs leading-relaxed">{project.problem}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-brand-cyan font-bold text-xs shrink-0">RÉSULTAT :</span>
                      <span className="text-white font-bold text-xs">{project.result}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-brand-violet/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-white/[0.02] rounded-xl p-4 border border-white/[0.05] hover:border-brand-violet/15 transition-colors">
                    <m.icon className="w-4 h-4 text-brand-violet mb-2" />
                    <div className="text-lg font-bold text-white font-display">{m.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{m.label}</div>
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
