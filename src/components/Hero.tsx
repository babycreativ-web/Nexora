import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles, MousePointer, Check } from "lucide-react";

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
    <section ref={containerRef} id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[100vh] flex items-center">
      {/* Ambient orbs */}
      <div className="hero-orb-1 glow-mesh top-[-10%] -left-32 w-[700px] h-[700px] bg-brand-violet/20" />
      <div className="hero-orb-2 glow-mesh bottom-[-20%] -right-32 w-[500px] h-[500px] bg-brand-cyan/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-indigo/[0.03] blur-[200px] rounded-full pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-reveal mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-[10px] font-bold text-brand-violet uppercase tracking-widest animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
              4 nouveaux prototypes lancés cette semaine
            </div>
          </motion.div>

          <h1 className="hero-title-reveal font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tight mb-8 leading-[1.05] max-w-5xl">
            Votre business mérite{" "}
            <span className="text-gradient">une présence</span>{" "}
            qui domine le marché
          </h1>

          <p className="hero-reveal text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Ne vous contentez pas d'un simple site web. Nous créons des outils de conversion massifs en France et en Belgique. 
            <span className="text-white font-medium ml-1">Testez notre vision gratuitement en 48h.</span>
          </p>

          <div className="hero-reveal flex flex-col items-center gap-6 mb-20">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group border-white/10">
                <Sparkles className="w-5 h-5 text-amber-300" />
                Demander un prototype gratuit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn-secondary group">
                <MousePointer className="w-4 h-4 text-brand-violet" />
                Voir nos réalisations
              </button>
            </div>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500">
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-brand-emerald" /> Sans engagement</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-brand-emerald" /> Réponse sous 24h</span>
              <span className="flex items-center gap-2"><Check className="w-3 h-3 text-brand-emerald" /> 100% sur mesure</span>
            </div>
          </div>

          {/* Tech stack authority bar */}
          <div className="hero-reveal w-full max-w-4xl pt-10 border-t border-white/[0.04]">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-8 items-center justify-center flex gap-3">
              <span className="h-px w-8 bg-white/5" />
              Technologies de pointe
              <span className="h-px w-8 bg-white/5" />
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {['React', 'Next.js', 'Vercel', 'Supabase', 'Stripe', 'Node.js'].map(tech => (
                <span key={tech} className="font-display font-bold text-sm tracking-tighter text-white">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
