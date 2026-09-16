'use client';

import React, { useState } from 'react';
import { 
  Check, 
  Flame, 
  Zap, 
  Crown, 
  Clock, 
  ArrowRight, 
  PhoneCall, 
  Dumbbell, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface Program {
  id: string;
  badge?: string;
  isPopular?: boolean;
  name: string;
  duration: string;
  target: string;
  description: string;
  features: string[];
  idealFor: string;
}

const PROGRAMS: Program[] = [
  {
    id: 'seche',
    name: 'Sèche Extrême & Définition',
    duration: '12 Semaines',
    target: 'Perte de gras & Abdominaux saillants',
    description: 'Le protocole scientifique pour éliminer la graisse sous-cutanée tout en préservant chaque gramme de muscle chèrement acquis.',
    idealFor: 'Hommes et femmes souhaitant un physique sec, tracé et athlétique.',
    features: [
      'Plan nutritionnel ultra-calibré (calcul précis des macros)',
      'Programmation d’entraînement orientée maintien de la force',
      'Protocole cardio stratégique (HIIT + Marche active en zone 2)',
      'Guide complet de gestion de la faim et hydratation',
      'Accès aux fiches techniques vidéo des mouvements',
      'Bilan d’évaluation toutes les 2 semaines'
    ]
  },
  {
    id: 'vip',
    name: 'Coaching VIP 1-on-1 Élite',
    duration: 'Suivi Mensuel ou Trimestriel',
    target: 'Accompagnement Sur-Mesure Intégral',
    isPopular: true,
    badge: 'LE PLUS RECOMMANDÉ',
    description: 'L’expérience ultime Saber Fitt : Coach Saber devient votre mentor personnel pour sculpter votre meilleure version avec un suivi au millimètre.',
    idealFor: 'Ceux qui exigent le plus haut niveau d’exigence, de réactivité et de résultats garantis.',
    features: [
      'Ligne directe WhatsApp privée avec Coach Saber 7j/7',
      'Ajustements nutritionnels dynamiques en temps réel',
      'Analyses et corrections vidéo de vos exécutions d’exercices',
      'Adaptation selon vos déplacements, travail et restaurant',
      'Stratégie de supplémentation ciblée et validée',
      'Appels visio réguliers pour mesurer l’évolution'
    ]
  },
  {
    id: 'masse',
    name: 'Prise de Masse & Hypertrophie',
    duration: '16 Semaines',
    target: 'Gain musculaire pur & Force',
    description: 'Maximisez votre anabolisme naturel grâce à une surcharge progressive structurée et une alimentation hyper-anabolique propre.',
    idealFor: 'Pratiquants désirant épaissir le dos, les épaules, les bras et les cuisses sans prendre de ventre.',
    features: [
      'Cycle d’entraînement périodisé (Force, Volume, Intensité)',
      'Diète hypercalorique propre sans prise de gras inutile',
      'Optimisation du sommeil et protocoles de récupération',
      'Ciblage des points faibles morphologiques',
      'Bibliothèque complète des exercices d’isolation et de base',
      'Guide de progression des charges semaine après semaine'
    ]
  },
  {
    id: 'reset',
    name: 'Transformation 90 Jours',
    duration: '90 Jours Chrono',
    target: 'Métamorphose Corps & Esprit',
    description: 'Un programme intensif tout-en-un conçu pour débloquer votre métabolisme et reconstruire vos habitudes de vie en 3 mois.',
    idealFor: 'Reprise du sport, personnes débordées ayant besoin d’un cadre strict et ultra-efficace.',
    features: [
      'Phase 1 : Détox, relance métabolique et posture',
      'Phase 2 : Hypertrophie fonctionnelle et combustion des graisses',
      'Phase 3 : Consolidation et maintien à long terme',
      'Séances adaptées (en salle de sport ou avec équipement maison)',
      'Suivi de motivation continue par Saber Fitt'
    ]
  }
];

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <section id="programmes" className="py-20 bg-[#0b0c10] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ff5500]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Programmes Haute Intensité</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Des Programmes Adaptés à Vos Ambitions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Chaque programme Saber Fitt est conçu avec une rigueur biomécanique et nutritionnelle absolue. 
            Choisissez le format qui correspond à vos objectifs de transformation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => {
            const whatsappText = `Bonjour Coach Saber, je suis intéressé(e) par le programme : "${prog.name}" sur Saber Fitness Gym (+212 668-737659). Pouvez-vous m'en dire plus sur les modalités et disponibilités ?`;
            const whatsappLink = `https://wa.me/212668737659?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={prog.id}
                id={`program-card-${prog.id}`}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  prog.isPopular
                    ? 'bg-gradient-to-b from-[#1c1f2e] to-[#12141c] border-2 border-[#ff5500] shadow-2xl shadow-[#ff5500]/20'
                    : 'bg-[#12141c] border border-[#232738] hover:border-[#ff5500]/40'
                }`}
              >
                {/* Popular Ribbon */}
                {prog.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ff5500] to-[#ff2200] text-white text-[10px] font-black tracking-wider uppercase shadow-lg shadow-[#ff5500]/40 flex items-center gap-1 whitespace-nowrap">
                    <Crown className="w-3 h-3 fill-white" />
                    <span>{prog.badge}</span>
                  </div>
                )}

                <div>
                  {/* Duration & Target */}
                  <div className="flex items-center justify-between gap-2 text-xs font-bold text-zinc-400 mb-3 pt-2">
                    <span className="flex items-center gap-1 text-[#ff7733]">
                      <Clock className="w-3.5 h-3.5" />
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white tracking-tight">
                    {prog.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#ffaa00] mt-1">
                    {prog.target}
                  </p>

                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 pt-5 border-t border-[#212433] space-y-2.5">
                    <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider block mb-2">
                      Inclus dans ce programme :
                    </span>
                    {prog.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 text-left">
                        <Check className="w-3.5 h-3.5 text-[#ff5500] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-4 border-t border-[#212433]">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-join-${prog.id}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      prog.isPopular
                        ? 'bg-gradient-to-r from-[#ff5500] to-[#e63900] hover:from-[#ff661a] hover:to-[#ff3300] text-white shadow-lg shadow-[#ff5500]/30'
                        : 'bg-[#1a1c27] hover:bg-[#ff5500] hover:text-white text-zinc-200 border border-[#2b3044] hover:border-[#ff5500]'
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Réserver sur WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-5 rounded-2xl bg-[#13151f] border border-[#262a3b] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#ff5500]/15 text-[#ff5500]">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Engagement Qualité & Résultats</h4>
              <p className="text-xs text-zinc-400">Chaque recommandation est individualisée. Aucun copier-coller.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-[#ff7733] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Poser une question spécifique à Coach Saber</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
