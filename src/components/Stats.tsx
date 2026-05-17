import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

const stats = [
  {
    label: "Projets livrés",
    value: "50+",
    icon: Award,
    color: "text-brand-violet"
  },
  {
    label: "Clients satisfaits",
    value: "98%",
    icon: Users,
    color: "text-brand-cyan"
  },
  {
    label: "Délai moyen",
    value: "5j",
    suffix: "ouvrés",
    icon: Zap,
    color: "text-brand-emerald"
  },
  {
    label: "Taux de conversion",
    value: "+180%",
    icon: TrendingUp,
    color: "text-white"
  }
];

const Stats = () => {
  return (
    <section className="py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-violet/15 transition-all group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-brand-violet/10">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 leading-none font-display">
                {stat.value}
                {stat.suffix && <span className="text-xs text-slate-500 ml-1 font-medium">{stat.suffix}</span>}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 uppercase font-bold tracking-widest">
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
