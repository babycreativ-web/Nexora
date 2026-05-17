import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Rocket, Check } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Split Reveal
      const titles = document.querySelectorAll(".hero-title-reveal");
      titles.forEach(title => {
        gsap.from(title, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
        });
      });

      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3
      });

      gsap.to(".hero-orb-1", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-orb-2", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-12 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Ambient orbs */}
      <div className="hero-orb-1 glow-mesh top-[-5%] -left-32 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-brand-violet/20" />
      <div className="hero-orb-2 glow-mesh bottom-[-10%] -right-32 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand-cyan/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-brand-indigo/[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: 'clamp(40px, 10vw, 80px) clamp(40px, 10vw, 80px)'
      }} />

      <div className="responsive-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-reveal mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-[9px] sm:text-[10px] font-bold text-brand-violet uppercase tracking-widest animate-pulse whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
              4 prototypes lancés cette semaine
            </div>
          </motion.div>

          <h1 className="hero-title-reveal font-display font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl text-balance">
            Dominez votre marché avec des{" "}
            <span className="text-gradient">SaaS, Web Apps</span>{" "}
            et <span className="text-gradient-warm">Logiciels</span> de pointe
          </h1>

          <p className="hero-reveal text-slate-400 max-w-3xl mb-10 sm:mb-14 leading-relaxed px-2 sm:px-0 text-pretty">
            Ne vous contentez pas d'un simple site web. Nous concevons des écosystèmes digitaux hautes-performances : 
            <span className="text-white font-semibold block sm:inline mt-2 sm:mt-0"> SaaS complexes, Applications métier et Logiciels Desktop sur-mesure.</span>
          </p>

          <div className="hero-reveal flex flex-col items-center gap-8 mb-16 sm:mb-24 w-full px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button className="btn-primary group mx-auto sm:mx-0 min-w-[200px]">
                <Rocket className="lucide-rocket" />
                Lancer mon Prototype
                <ArrowRight className="lucide-arrow-right" />
              </button>
              <button className="btn-secondary group mx-auto sm:mx-0">
                Voir nos Solutions
              </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-extrabold text-slate-500">
              <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-emerald" /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-emerald" /> Réponse 24h</span>
              <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-brand-emerald" /> Sur mesure</span>
            </div>
          </div>

          {/* Tech stack authority bar */}
          <div className="hero-reveal w-full max-w-4xl pt-8 sm:pt-10 border-t border-white/[0.04]">
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-6 sm:mb-8 items-center justify-center flex gap-3">
              <span className="h-px w-6 sm:w-8 bg-white/5" />
              Stack Premium
              <span className="h-px w-6 sm:w-8 bg-white/5" />
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 opacity-30 sm:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['React', 'Next.js', 'Vercel', 'Supabase', 'Stripe'].map(tech => (
                <span key={tech} className="font-display font-bold text-[10px] sm:text-sm tracking-tighter text-white">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
