import { motion } from "framer-motion";
import { User, MapPin, Globe2, Coffee } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-obsidian-light/10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
                        alt="Faisal - Founder of Nexora Studio" 
                        className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                </div>
                <div className="absolute -bottom-10 -right-10 glass-card p-8 hidden md:block max-w-[280px]">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-violet/20 flex items-center justify-center">
                            <Coffee className="w-6 h-6 text-brand-violet" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-lg leading-tight text-gradient">Nexora Studio</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-black">Digital Studio</div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 italic">
                        "Nous ne construisons pas seulement des sites. Nous construisons des partenariats de croissance."
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <h2 className="text-sm font-black tracking-[0.3em] text-brand-violet uppercase mb-6">À Propos</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">Plus qu'une Agence, un Partenaire de Croissance</h3>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                    <p>
                        Nexora Studio est né d'une vision simple : rendre la technologie d'élite accessible aux entreprises ambitieuses, sans les délais et les coûts traditionnels.
                    </p>
                    <p>
                        Basés au <strong>Maroc</strong> et travaillant avec des clients <strong>internationaux</strong> (France, UAE, UK), nous combinons l'expertise technique des agents IA avec une vision stratégique humaine.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { label: "Localisation", value: "Maroc (GMT+1)", icon: MapPin },
                        { label: "Expertise", value: "Agentic Engineering", icon: User },
                        { label: "Vision", value: "Global First", icon: Globe2 },
                        { label: "Vitesse", value: "Cycle 48h-72h", icon: Coffee }
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                            <item.icon className="w-5 h-5 text-brand-violet" />
                            <div className="text-white font-bold">{item.value}</div>
                            <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{item.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
