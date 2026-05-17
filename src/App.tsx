import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import TargetClients from "./components/TargetClients";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Verification from "./components/Verification";
import About from "./components/About";
import TrustStrip from "./components/TrustStrip";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-200">
      <Navbar />
      <main className="relative">
        {/* Hero & Stats */}
        <Hero />
        <Stats />
        
        {/* Divider */}
        <div className="divider-gradient max-w-4xl mx-auto" />

        {/* Core Value Sections */}
        <Services />
        <TargetClients />
        <Portfolio />
        
        {/* How it works */}
        <div className="divider-gradient max-w-4xl mx-auto" />
        <Process />
        
        {/* Trust & Quality */}
        <Trust />
        <Verification />
        
        {/* Pricing */}
        <div className="divider-gradient max-w-4xl mx-auto" />
        <Pricing />
        
        {/* Social Proof */}
        <Testimonials />
        
        {/* About */}
        <About />
        
        {/* FAQ */}
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-brand-violet/[0.04] to-obsidian pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-violet/10 blur-[150px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
              Prêt à donner un nouvel élan à{" "}
              <span className="text-gradient">votre activité ?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Décrivez-nous votre projet et recevez un prototype fonctionnel en moins de 48h. 
              Gratuit, sans engagement — vous ne payez que si le résultat vous convainc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-primary min-w-[280px]">
                🚀 Demander un prototype gratuit
                <ArrowRight className="lucide-arrow-right" />
              </a>
            </div>
          </motion.div>
        </section>

        <TrustStrip />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default App;
