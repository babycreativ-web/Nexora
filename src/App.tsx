import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Verification from "./components/Verification";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";

function App() {
  return (
    <div className="min-h-screen bg-obsidian selection:bg-brand-violet/30 outline-none text-slate-200">
      <Navbar />
      <main className="relative">
        <div className="space-y-0 md:space-y-12"> {/* Balanced spacing */}
          <Hero />
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-violet/[0.02] to-transparent pointer-events-none" />
            <Stats />
            <Verification /> {/* The Nexora Standard */}
          </div>

          <Services />
          
          <About />

          <Portfolio />
          
          <Process />
          
          <Pricing />
          
          <Testimonials />
          
          {/* Final Emotional CTA */}
          <section className="py-32 bg-brand-violet/[0.03] border-y border-brand-violet/10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-tight italic">
                Prêt à moderniser votre <br /> <span className="text-gradient">présence digitale ?</span>
              </h2>
              <p className="text-slate-400 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
                Créons ensemble un site moderne qui donne réellement confiance à vos clients et automatise votre croissance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="btn-primary py-5 px-12 text-lg font-black uppercase tracking-widest shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform">
                  Réserver mon appel gratuit
                </button>
                <button className="btn-secondary py-5 px-12 text-lg font-black uppercase tracking-widest hover:bg-white/10">
                  Découvrir nos Études de Cas
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default App;
