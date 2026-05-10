import { motion } from "framer-motion";

const stats = [
  { label: "Projets réalisés", value: "25+" },
  { label: "Réponse client", value: "<24h" },
  { label: "Satisfaction", value: "98%" },
  { label: "Clients mondiaux", value: "12" }
];

const Stats = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
