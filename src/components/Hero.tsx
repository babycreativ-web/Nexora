import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.to(".floating-shape", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Decor */}
      <div className="glow-mesh top-0 -left-20 w-[600px] h-[600px] bg-brand-violet/40" />
      <div className="glow-mesh bottom-0 -right-20 w-[500px] h-[500px] bg-brand-cyan/20" />
      
      {/* Floating Elements */}
      <div className="floating-shape absolute top-1/4 right-[10%] w-32 h-32 bg-brand-violet/10 border border-white/5 rounded-3xl backdrop-blur-3xl hidden lg:block" />
      <div className="floating-shape absolute bottom-1/4 left-[5%] w-24 h-24 bg-brand-cyan/10 border border-white/5 rounded-full backdrop-blur-3xl hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-violet text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Studio Digital de Nouvelle Génération</span>
          </motion.div>

          <h1 ref={titleRef} className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Sites Web & <br /> 
            <span className="text-gradient">Applications IA</span> Modernes
          </h1>

          <p className="hero-reveal text-lg md:text-xl text-slate-400 max-w-2xl mb-12">
            Nous transformons vos idées en expériences digitales premium. 
            Design minimaliste, performances extrêmes et intégrations IA pour les entreprises ambitieuses.
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row gap-4 mb-20">
            <button className="btn-primary flex items-center gap-2 group">
              Réserver un appel gratuit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-secondary">
              Voir nos projets
            </button>
          </div>

          {/* Trust Badges */}
          <div className="hero-reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              "Livraison rapide",
              "Design premium",
              "Solutions IA",
              "Optimisé SEO"
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                <span className="text-sm font-medium whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 relative px-4"
        >
          <div className="glass-card aspect-[16/9] max-w-5xl mx-auto overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Simple Mockup Content */}
            <div className="p-8 h-full flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="h-4 w-32 bg-white/5 rounded" />
              </div>
              <div className="grid grid-cols-3 gap-6 flex-1">
                <div className="col-span-2 bg-white/5 rounded-xl border border-white/5 p-6 space-y-4">
                    <div className="h-8 w-1/3 bg-brand-violet/20 rounded" />
                    <div className="h-32 w-full bg-white/5 rounded-lg border border-white/5" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                        <div className="h-20 bg-white/5 rounded-lg border border-white/5" />
                    </div>
                </div>
                <div className="bg-white/5 rounded-xl border border-white/5 p-6 space-y-6">
                    <div className="h-6 w-full bg-white/10 rounded" />
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-cyan/20 shrink-0" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-full bg-white/5 rounded" />
                                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-brand-violet/10 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
