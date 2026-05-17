import { motion } from "framer-motion";
import { Terminal, CheckCircle2, ShieldCheck, Cpu, Zap } from "lucide-react";

const tests = [
  "Vérification responsive 12 appareils",
  "Optimisation images (WebP/AVIF)",
  "Validation SEO & métadonnées",
  "Audit accessibilité (WCAG 2.1)",
  "Test de vitesse : objectif 95+",
  "Vérification sécurité & RGPD",
  "Tests formulaires & interactions",
  "Compatibilité navigateurs FR/BE",
];

const Verification = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/15 to-obsidian pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-label">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Notre standard qualité</span>
            </div>
            <h2 className="section-title">
              Chaque projet est{" "}
              <span className="text-gradient">rigoureusement testé</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Avant de vous livrer quoi que ce soit, chaque page et chaque fonctionnalité 
              passe par notre processus de vérification automatisé. Résultat : zéro bug, performances optimales.
            </p>
            
            <div className="space-y-3">
              {[
                { title: "Tests automatisés", desc: "Plus de 40 points de contrôle sur chaque projet." },
                { title: "Conformité RGPD", desc: "Vos données et celles de vos clients sont protégées." },
                { title: "Performance garantie", desc: "Score Lighthouse 90+ sur chaque livraison." }
              ].map((item) => (
                <motion.div 
                  key={item.title} 
                  whileHover={{ x: 4 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/[0.05]"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-violet/10 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-brand-violet" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-sm font-display">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-brand-violet/15 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="glass-card overflow-hidden relative border-white/10 shadow-2xl">
              <div className="bg-white/[0.04] px-4 py-2.5 border-b border-white/[0.05] flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-slate-500" />
                  <span className="text-[10px] font-mono text-slate-500">nexora-quality-check.sh</span>
                </div>
              </div>
              <div className="p-5 md:p-6 font-mono text-[11px] md:text-[12px] space-y-1.5 bg-obsidian-light">
                <div className="flex items-center gap-2 text-slate-500 mb-3">
                  <Zap className="w-3 h-3 text-brand-violet" />
                  <span>Nexora Quality Pipeline v2.0</span>
                </div>
                {tests.map((test, i) => (
                  <motion.div
                    key={test}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="text-slate-600 text-[10px] w-14 shrink-0">[{String(i + 1).padStart(2, '0')}/08]</span>
                    <span className="text-slate-300 flex-1 truncate">{test}</span>
                    <span className="text-brand-emerald flex items-center gap-1 font-bold text-[10px]">
                      <CheckCircle2 className="w-3 h-3" />
                      OK
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="h-[2px] bg-gradient-to-r from-brand-violet to-brand-cyan mt-4 origin-left"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-brand-emerald font-bold text-center pt-2 text-[11px]"
                >
                  ✓ TOUS LES TESTS RÉUSSIS — PRÊT À LIVRER
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
