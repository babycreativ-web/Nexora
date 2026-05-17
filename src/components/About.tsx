import { motion } from "framer-motion";
import { MapPin, Globe2, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/10 to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-1.5 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
                alt="Fondateur de Nexora Studio" 
                className="w-full h-full object-cover rounded-[1.3rem] grayscale hover:grayscale-0 transition-all duration-700" 
                loading="lazy"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:-right-8 glass-card p-6 md:p-7 max-w-[260px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-violet/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-brand-violet" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm font-display text-gradient">Nexora Studio</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Studio Digital</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                "Nous créons des outils digitaux qui font vraiment la différence pour vos clients et votre chiffre d'affaires."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="section-label">
              <span>À propos</span>
            </div>
            <h2 className="section-title">
              Un partenaire digital qui comprend{" "}
              <span className="text-gradient">votre réalité</span>
            </h2>
            
            <div className="space-y-5 text-slate-400 text-base leading-relaxed mb-10">
              <p>
                Nexora Studio est née d'un constat simple : les PME françaises et belges méritent des outils digitaux modernes, 
                sans devoir y consacrer des mois de développement ni des budgets disproportionnés.
              </p>
              <p>
                Nous travaillons principalement avec des <strong className="text-white">restaurants, cabinets médicaux et juridiques, 
                commerces, agences et freelances</strong> en France et en Belgique. Nous parlons votre langue, nous comprenons 
                vos contraintes, et nous livrons des résultats concrets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Marchés", value: "France & Belgique", icon: MapPin },
                { label: "Spécialité", value: "PME & Indépendants", icon: Globe2 },
                { label: "Approche", value: "Prototype d'abord", icon: Sparkles },
                { label: "Engagement", value: "Résultats garantis", icon: Heart }
              ].map((item) => (
                <motion.div 
                  key={item.label} 
                  whileHover={{ y: -3 }}
                  className="flex flex-col gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-violet/15 transition-all"
                >
                  <item.icon className="w-5 h-5 text-brand-violet" />
                  <div className="text-white font-bold text-sm font-display">{item.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
