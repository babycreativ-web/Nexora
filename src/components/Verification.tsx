import { motion } from "framer-motion";
import { Terminal, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

const tests = [
  "Checking responsiveness across 15 devices",
  "Optimizing image assets (WebP/AVIF)",
  "Verifying GSAP scroll-trigger timelines",
  "Validating SEO metadata & OpenGraph",
  "Running accessibility audit (WCAG 2.1)",
  "Load testing: 10k concurrent sessions",
  "Security scan: SQLi & XSS prevention",
  "API endpoint latency verification",
  "CSS unused styles purge check",
  "Mobile touch target size validation"
];

const Verification = () => {
  return (
    <section className="py-24 bg-obsidian-light/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3 h-3" />
              <span>Le Standard Nexora</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Nous ne nous contentons pas de coder, <span className="text-gradient">nous vérifions.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Chaque application que nous construisons est soumise à notre pipeline de vérification agentique autonome avant même que vous ne la voyiez. 
              <strong> 50+ tests automatisés</strong> garantissent une livraison sans bug et des performances extrêmes.
            </p>
            
            <div className="space-y-4">
                {[
                    { title: "Vérification Agentique", desc: "IA autonome testant chaque interaction utilisateur." },
                    { title: "Zéro Dette Technique", desc: "Code propre, documenté et optimisé dès le premier jour." },
                    { title: "Standard Enterprise", desc: "Sécurité et fiabilité au cœur de chaque ligne de code." }
                ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div className="w-10 h-10 rounded-lg bg-brand-violet/10 flex items-center justify-center shrink-0">
                            <Cpu className="w-5 h-5 text-brand-violet" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="glass-card overflow-hidden relative border-white/10 shadow-2xl">
              <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-slate-500" />
                    <span className="text-[10px] font-mono text-slate-500">nexora-verify-pipeline.sh</span>
                </div>
              </div>
              <div className="p-6 font-mono text-[12px] space-y-2 bg-obsidian-light">
                {tests.map((test, i) => (
                  <motion.div
                    key={test}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-slate-600">[{new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit'})}:{i+12}]</span>
                    <span className="text-slate-300 flex-1">{test}...</span>
                    <span className="text-brand-cyan flex items-center gap-1 font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        PASS
                    </span>
                  </motion.div>
                ))}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="h-[2px] bg-brand-violet mt-4 origin-left"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-brand-violet font-bold text-center pt-2"
                >
                    [VERIFICATION COMPLETE] - 54/54 TESTS PASSED
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
