import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Shield, Sparkles, Clock, Cpu, MousePointer } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.to(".hero-orb-1", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-orb-2", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[100vh] flex items-center">
      {/* Ambient orbs */}
      <div className="hero-orb-1 glow-mesh top-[-10%] -left-32 w-[700px] h-[700px] bg-brand-violet/30" />
      <div className="hero-orb-2 glow-mesh bottom-[-20%] -right-32 w-[500px] h-[500px] bg-brand-cyan/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-indigo/5 blur-[200px] rounded-full pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-reveal section-label"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Testez votre prototype avant de payer</span>
          </motion.div>

          <h1 className="hero-reveal font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.08] max-w-5xl">
            Votre business mérite{" "}
            <span className="text-gradient">une présence digitale</span>{" "}
            qui travaille pour vous
          </h1>

          <p className="hero-reveal text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
            Sites web, applications métier, automatisation et solutions IA — conçus sur mesure pour les PME en France et en Belgique. 
            Gagnez du temps, automatisez votre activité et impressionnez vos clients dès le premier clic.
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row gap-4 mb-16 items-center">
            <button className="btn-primary flex items-center gap-3 group text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
              <Sparkles className="w-5 h-5" />
              Demander un prototype gratuit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-secondary flex items-center gap-2 px-8 py-4 sm:py-5 text-sm sm:text-base">
              <MousePointer className="w-4 h-4 text-brand-violet" />
              Voir nos réalisations
            </button>
          </div>

          {/* Trust badges row */}
          <div className="hero-reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
            {[
              { icon: Shield, text: "Prototype gratuit", sub: "avant paiement" },
              { icon: Clock, text: "Livraison rapide", sub: "2 à 5 jours" },
              { icon: Cpu, text: "Technologie IA", sub: "sur mesure" },
              { icon: Sparkles, text: "Design premium", sub: "moderne & pro" },
            ].map((badge) => (
              <motion.div
                key={badge.text}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-violet/20 transition-all"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-violet/10 flex items-center justify-center shrink-0">
                  <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-violet" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">{badge.text}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500">{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
