'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'En quoi consiste le "Bilan Offert 100%" pour les nouveaux clients ?',
    answer: 'C’est une séance d’analyse complète et offerte réalisée directement sur WhatsApp (+212 668-737659). Coach Saber évalue votre morphologie, vos habitudes alimentaires et vos antécédents pour définir la stratégie exacte (perte de gras, prise de masse ou recomposition corporelle) avant de débuter.'
  },
  {
    question: 'Comment fonctionne le suivi à distance avec Coach Saber ?',
    answer: 'Dès votre inscription, nous réalisons un bilan complet (morphologie, antécédents, objectifs, habitudes alimentaires). Vous recevez votre programme personnalisé et votre plan de nutrition. Ensuite, nous échangeons 7j/7 via WhatsApp : vous pouvez m’envoyer des vidéos de vos exercices pour correction de la posture, poser vos questions à tout moment et nous ajustons vos charges et vos calories chaque semaine selon vos progrès.'
  },
  {
    question: 'Les programmes Saber Fitt sont-ils adaptés aux débutants ?',
    answer: 'Absolument ! Que vous n’ayez jamais touché un haltère ou que vous vous entraîniez déjà depuis plusieurs années, chaque séance est calibrée selon votre niveau technique. Les débutants bénéficient d’une progression douce axée sur l’apprentissage des mouvements clés sans risque de blessure.'
  },
  {
    question: 'Faut-il obligatoirement être inscrit dans une salle de sport ?',
    answer: 'La salle de sport est recommandée pour un accès optimal à une variété de machines et d’haltères lourds (notamment pour la prise de masse), mais j’adapte également des programmes d’entraînement complets à domicile (avec élastiques, haltères ajustables ou au poids du corps).'
  },
  {
    question: 'Vais-je devoir suivre un régime strict et fade avec du riz et du poulet sec ?',
    answer: 'Non, jamais ! Mon approche repose sur la nutrition flexible. Vous mangez des aliments que vous aimez tant que les macronutriments (protéines, glucides, lipides) et les calories cibles sont respectés. Je vous fournis des idées de recettes savoureuses, équilibrées et rapides à préparer.'
  },
  {
    question: 'En combien de temps puis-je espérer voir les premiers résultats ?',
    answer: 'En suivant le programme avec rigueur, les premiers changements physiques (dégonflement, regain d’énergie, tonicité musculaire) sont visibles dès 2 à 3 semaines. Les transformations spectaculaires (perte de plusieurs kilos de graisse et développement musculaire franc) se mesurent généralement entre 8 et 12 semaines.'
  },
  {
    question: 'Comment puis-je m’inscrire ou réserver mon coaching ?',
    answer: 'Cliquez simplement sur le bouton "Coaching VIP" ou "Prendre RDV WhatsApp" sur le site. Vous serez directement redirigé vers une conversation privée avec Coach Saber pour faire le point sur vos objectifs.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0e1017] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tout Ce Que Vous Devez Savoir
          </h2>
          <p className="text-zinc-400 text-sm">
            Retrouvez les réponses aux interrogations les plus fréquentes avant de rejoindre la team Saber Fitt.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#141622] border-[#ff5500]/40 shadow-lg'
                    : 'bg-[#12141c] border-[#242738] hover:border-[#32374c]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-bold ${isOpen ? 'text-white' : 'text-zinc-200'}`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform ${isOpen ? 'bg-[#ff5500] text-white rotate-180' : 'bg-[#1d202e] text-zinc-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-[#222536] text-left">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
