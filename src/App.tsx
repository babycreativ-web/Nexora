import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-obsidian selection:bg-brand-violet/30 outline-none">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <section className="py-24 bg-brand-violet/5 border-y border-brand-violet/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Prêt à développer <br /> votre <span className="text-gradient">présence digitale ?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Créons ensemble une expérience moderne qui attire plus de clients et automatise votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary py-4 px-10 text-lg">
                Démarrer un projet
              </button>
              <button className="btn-secondary py-4 px-10 text-lg">
                Consultation gratuite
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
