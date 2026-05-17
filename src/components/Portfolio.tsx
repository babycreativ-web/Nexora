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
    <section id="projets" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-brand-violet/[0.02] to-obsidian pointer-events-none" />
      
      <div className="responsive-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-20 gap-8"
        >
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="section-label mx-auto lg:mx-0">
              <span>Études de cas</span>
            </div>
            <h2 className="section-title text-balance">
              Des résultats concrets pour des{" "}
              <span className="text-gradient">entreprises réelles</span>
            </h2>
            <p className="text-slate-400 text-pretty">
              Découvrez comment nous avons aidé des PME en France et en Belgique à transformer leur activité grâce au digital.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-lg md:max-w-none mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-video sm:aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-obsidian-card border border-white/[0.06] group-hover:border-brand-violet/25 transition-all duration-500 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-50 sm:opacity-60 group-hover:opacity-80 grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-white/70 bg-white/5 px-2 py-1 rounded-lg border border-white/10 backdrop-blur-md uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white font-display leading-tight">{project.title}</h3>
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex gap-2">
                      <span className="text-brand-violet font-bold text-[10px] shrink-0">DÉFI :</span>
                      <span className="text-slate-400 text-[10px] leading-relaxed line-clamp-2">{project.problem}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-violet/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                {project.metrics.map((m, i) => (
                  <div key={i} className="bg-white/[0.02] rounded-2xl p-5 border border-white/[0.05] hover:border-brand-violet/20 transition-all duration-300 group/metric">
                    <m.icon className="w-4 h-4 text-brand-violet mb-3 group-hover/metric:scale-110 transition-transform" />
                    <div className="text-xl font-bold text-white font-display mb-1">{m.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.15em]">{m.label}</div>
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
