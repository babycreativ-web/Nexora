import { motion } from "framer-motion";
import { UtensilsCrossed, Stethoscope, Scale, Building2, Briefcase, Store, Users, Wrench } from "lucide-react";

const clients = [
  { name: "Restaurants & Cafés", icon: UtensilsCrossed, desc: "Menus digitaux, réservation en ligne" },
  { name: "Cabinets Médicaux", icon: Stethoscope, desc: "Prise de RDV, dossiers patients" },
  { name: "Avocats & Notaires", icon: Scale, desc: "CRM juridique, portail clients" },
  { name: "Agences & Bureaux", icon: Building2, desc: "Sites vitrines, CRM commercial" },
  { name: "Freelances", icon: Briefcase, desc: "Portfolio, facturation, booking" },
  { name: "Commerces Locaux", icon: Store, desc: "E-commerce, click & collect" },
  { name: "Associations", icon: Users, desc: "Adhésions, événements, dons" },
  { name: "Artisans & Services", icon: Wrench, desc: "Devis en ligne, prise de RDV" },
];

const TargetClients = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto">
            <span>Pour qui ?</span>
          </div>
          <h2 className="section-title max-w-3xl mx-auto">
            Des solutions pour{" "}
            <span className="text-gradient">chaque métier</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Quel que soit votre secteur, nous adaptons nos outils à vos besoins spécifiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-violet/15 transition-all text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-violet/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-violet/15 transition-colors">
                <client.icon className="w-6 h-6 text-brand-violet group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1 font-display">{client.name}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{client.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetClients;
