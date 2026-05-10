import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Dubois",
    role: "Fondateur @ TechFlow",
    content: "Nexora Studio a transformé notre vision en une réalité digitale époustouflante. Leur souci du détail est inégalé.",
    avatar: "https://i.pravatar.cc/150?u=thomas"
  },
  {
    name: "Sophie Martin",
    role: "CEO @ Bloom Agency",
    content: "L'intégration de l'IA dans notre workflow a été une révolution. Une équipe technique d'élite qui comprend le business.",
    avatar: "https://i.pravatar.cc/150?u=sophie"
  },
  {
    name: "Marc Leroy",
    role: "Propriétaire @ L'Entrecôte",
    content: "Notre nouveau site de réservation a doublé nos conversions mobiles en seulement un mois. Merci !",
    avatar: "https://i.pravatar.cc/150?u=marc"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-obsidian-light/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-violet uppercase mb-4">Témoignages</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ils nous font Confiance</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex flex-col"
            >
              <Quote className="w-10 h-10 text-brand-violet/20 mb-6" />
              <p className="text-slate-300 italic mb-8 flex-1">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
