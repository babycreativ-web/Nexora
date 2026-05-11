import { motion } from "framer-motion";
import { Zap, ShieldCheck, Rocket, Globe } from "lucide-react";

const stats = [
  {
    label: "Projets d'Élite",
    value: "15+",
    icon: Rocket,
    color: "text-brand-violet"
  },
  {
    label: "Livraison MVP",
    value: "48h",
    suffix: "moyen",
    icon: Zap,
    color: "text-brand-cyan"
  },
  {
    label: "Tests / Projet",
    value: "50+",
    icon: ShieldCheck,
    color: "text-brand-indigo"
  },
  {
    label: "Marchés Cibles",
    value: "Global",
    icon: Globe,
    color: "text-white"
  }
];

const Stats = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors group"
            >
              <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
              </div>
              <div className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">
                {stat.value}
                {stat.suffix && <span className="text-xs text-slate-500 ml-1 font-bold uppercase">{stat.suffix}</span>}
              </div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
