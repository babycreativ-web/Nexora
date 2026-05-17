import { motion } from "framer-motion";
import { Clock, ShieldCheck, Zap, Headphones } from "lucide-react";

const badges = [
  { icon: Clock, text: "Prototype sous 48h" },
  { icon: ShieldCheck, text: "Paiement après validation" },
  { icon: Headphones, text: "Support inclus" },
  { icon: Zap, text: "Livraison rapide" }
];

const TrustStrip = () => {
  return (
    <div className="w-full bg-obsidian-light/30 border-y border-white/[0.04] py-8 sm:py-10">
      <div className="responsive-container">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-brand-violet group-hover:scale-110 group-hover:bg-brand-violet/10 group-hover:border-brand-violet/20 transition-all duration-300">
                <badge.icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-white transition-colors">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
