import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-violet text-sm font-medium mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Propulsé par l'Ingénierie de Vérification Agentique</span>
          </motion.div>

          <h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl">
            Des Sites Web <span className="text-gradient">Haut de Gamme</span> Qui Convertissent Réellement
          </h1>

          <p className="hero-reveal text-lg md:text-xl text-slate-400 max-w-3xl mb-12">
            Nous créons des expériences digitales modernes pour les marques ambitieuses. 
            Développement 5x plus rapide, vérification automatisée et design premium.
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row gap-6 mb-20 items-center">
            <button className="btn-primary flex items-center gap-2 group text-lg px-10 py-4 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              Réserver un appel gratuit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex items-center gap-4">
                <span className="text-slate-500 text-sm">Préféré par :</span>
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-obsidian" alt="User" />
                    ))}
                </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="hero-reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-60">
            {[
              "Livraison 48h-72h",
              "Design Premium",
              "Optimisé Conversion",
              "Support International"
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                <span className="text-sm font-bold uppercase tracking-wider whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
