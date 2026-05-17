import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Gérante, Brasserie Le Marais — Paris",
    content: "En une semaine, Nexora Studio a créé un site magnifique avec réservation en ligne intégrée. Mes réservations ont augmenté de 80% dès le premier mois. Le prototype gratuit m'a convaincue immédiatement.",
    country: "🇫🇷 France",
    rating: 5
  },
  {
    name: "Thomas Van der Berg",
    role: "Avocat, Cabinet TVB — Bruxelles",
    content: "J'avais besoin d'un outil pour gérer mes dossiers clients et ma facturation. L'application livrée est intuitive, rapide et mes clients adorent le portail dédié. Un vrai gain de temps au quotidien.",
    country: "🇧🇪 Belgique",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    role: "Directrice, Clinique Esthétique Lyon",
    content: "Le chatbot IA gère 70% de nos prises de rendez-vous automatiquement. Notre secrétariat peut enfin se concentrer sur l'accueil des patients. Nexora a parfaitement compris nos contraintes métier.",
    country: "🇫🇷 France",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-label">
            <span>Témoignages</span>
          </div>
          <h2 className="section-title max-w-3xl">
            Ils nous ont fait confiance,{" "}
            <span className="text-gradient">ils en parlent</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Des entrepreneurs en France et en Belgique qui ont transformé leur activité avec nos solutions digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 md:p-10 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="relative mb-7 flex-1">
                <Quote className="absolute -top-3 -left-3 w-10 h-10 text-brand-violet/10 -z-10" />
                <p className="text-slate-300 text-base leading-relaxed relative">
                  "{t.content}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base font-display">{t.name}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/[0.06]">
                  {t.country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
