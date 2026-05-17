import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Comment fonctionne le prototype gratuit ?",
    answer: "Après notre premier échange, nous créons un prototype fonctionnel de votre projet (maquette interactive ou mini-version). Vous le testez, vous donnez vos retours, et vous ne payez qu'une fois satisfait. Si le résultat ne vous convient pas, vous ne devez rien."
  },
  {
    question: "Quels types de projets pouvez-vous réaliser ?",
    answer: "Nous concevons des sites vitrines, des sites e-commerce, des applications web métier (CRM, gestion, réservation), des applications desktop, des outils d'automatisation et des solutions IA (chatbots, assistants). En résumé : tout outil digital qui peut améliorer votre activité."
  },
  {
    question: "Combien de temps faut-il pour recevoir mon projet ?",
    answer: "Un site vitrine est livré en 3 à 5 jours ouvrés. Une application web plus complexe prend 1 à 3 semaines selon les fonctionnalités. Nous vous communiquons un calendrier précis dès le début du projet."
  },
  {
    question: "Travaillez-vous avec des clients en France et en Belgique ?",
    answer: "Absolument. Nous travaillons principalement avec des PME, indépendants et professions libérales en France et en Belgique. Nos échanges se font en français, et nous comprenons les réalités du marché européen francophone."
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer: "Chaque projet inclut 2 révisions gratuites et un support technique de 30 à 60 jours selon la formule. Au-delà, nous proposons des forfaits de maintenance mensuels adaptés à vos besoins."
  },
  {
    question: "Les prix sont-ils fixes ou peuvent-ils évoluer ?",
    answer: "Nos tarifs affichés (Starter 290€, Business 690€, Pro 1 290€) sont des bases HT. Si votre projet a des besoins spécifiques, nous établissons un devis personnalisé et détaillé avant tout engagement. Pas de coûts cachés."
  },
  {
    question: "Dois-je fournir le contenu (textes, images) ?",
    answer: "C'est un plus si vous avez déjà du contenu, mais ce n'est pas obligatoire. Nous pouvons vous accompagner dans la rédaction des textes et la sélection de visuels professionnels adaptés à votre activité."
  },
  {
    question: "Proposez-vous l'hébergement et le nom de domaine ?",
    answer: "Nous vous conseillons sur les meilleures solutions d'hébergement et pouvons gérer la mise en ligne complète de votre projet. Les frais d'hébergement et de nom de domaine sont indépendants de nos tarifs."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/10 to-obsidian pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="section-label">
            <span>Questions fréquentes</span>
          </div>
          <h2 className="section-title max-w-2xl">
            Vos questions,{" "}
            <span className="text-gradient">nos réponses</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base md:text-lg leading-relaxed">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-semibold text-white pr-4 group-hover:text-brand-violet transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-brand-violet" : ""
                  }`} 
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <div className="h-px bg-white/5 mb-4" />
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
