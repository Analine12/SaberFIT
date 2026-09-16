'use client';

import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  TrendingDown, 
  TrendingUp, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  ArrowRight,
  Instagram
} from 'lucide-react';

interface Transformation {
  id: string;
  name: string;
  age: number;
  duration: string;
  program: string;
  weightChange: string;
  fatLoss: string;
  muscleGain: string;
  quote: string;
  imageSrc: string;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'trans-1',
    name: 'Karim B.',
    age: 29,
    duration: '14 Semaines',
    program: 'Programme Sèche Extrême',
    weightChange: '-15.4 KG',
    fatLoss: '-12% Masse Grasse',
    muscleGain: '+2.5 KG Muscle Sec',
    quote: 'Coach Saber m’a appris à manger sans frustration tout en m’entraînant avec une intensité que je ne soupçonnais pas. Mes abdos sont enfin visibles après des années d’échecs.',
    imageSrc: '/images/transformation-1.jpg'
  },
  {
    id: 'trans-2',
    name: 'Yassine M.',
    age: 24,
    duration: '20 Semaines',
    program: 'Prise de Masse & Hypertrophie',
    weightChange: '+8.2 KG',
    fatLoss: 'Taille maintenue',
    muscleGain: '+7.0 KG Muscle Pur',
    quote: 'J’étais très mince et je n’arrivais pas à prendre du poids. Le suivi WhatsApp 7j/7 avec Saber a tout changé : chaque séance était calibrée et la surcharge progressive a explosé.',
    imageSrc: '/images/workout-action.jpg'
  },
  {
    id: 'trans-3',
    name: 'Mehdi K.',
    age: 35,
    duration: '16 Semaines',
    program: 'Coaching VIP 1-on-1',
    weightChange: '-11.8 KG',
    fatLoss: '-9% Masse Grasse',
    muscleGain: '+4.0 KG Muscle',
    quote: 'Avec mon travail de cadre, je n’avais jamais le temps. Saber a adapté les repas à mes déplacements professionnels. Les résultats parlent d’eux-mêmes.',
    imageSrc: '/images/coach-hero.jpg'
  }
];

export function TransformationsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentTrans = TRANSFORMATIONS[activeTab];

  return (
    <section id="transformations" className="py-20 bg-[#0e1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Témoignages & Résultats Réels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Des Métamorphoses Concrètes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Découvrez comment les élèves de Coach Saber ont transformé leur silhouette, leur santé et leur confiance grâce à un accompagnement scientifique et sans compromis.
          </p>
        </div>

        {/* Client Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              id={`tab-transformation-${item.id}`}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#ff5500] to-[#e63900] text-white shadow-lg shadow-[#ff5500]/30 scale-105'
                  : 'bg-[#151824] hover:bg-[#1f2334] text-zinc-300 border border-[#272b3c]'
              }`}
            >
              <span>{item.name}</span>
              <span className="text-[11px] opacity-80">({item.duration})</span>
            </button>
          ))}
        </div>

        {/* Active Transformation Showcase Card */}
        <div className="bg-[#141620] border border-[#262a3c] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[480px] bg-zinc-900 overflow-hidden">
            <img
              src={currentTrans.imageSrc}
              alt={`Transformation de ${currentTrans.name}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141620] via-transparent to-transparent lg:hidden" />
            
            {/* Overlay Badge */}
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-[#ff5500]/30 text-[#ff7733] text-xs font-black tracking-wider uppercase">
              RÉSULTAT VÉRIFIÉ PAR COACH SABER
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <span>Programme suivi :</span>
              <span className="text-[#ffaa00]">{currentTrans.program}</span>
            </div>
          </div>

          {/* Details & Metrics Side */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 text-left">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {currentTrans.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">
                    {currentTrans.age} ans • Suivi sur {currentTrans.duration}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Big Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 my-6">
                <div className="p-3.5 rounded-xl bg-[#1b1e2c] border border-[#2b3044] text-center">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase block">Poids Total</span>
                  <span className="text-lg sm:text-xl font-black text-[#ff5500] mt-1 block">
                    {currentTrans.weightChange}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1b1e2c] border border-[#2b3044] text-center">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase block">Masse Grasse</span>
                  <span className="text-lg sm:text-xl font-black text-emerald-400 mt-1 block">
                    {currentTrans.fatLoss}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1b1e2c] border border-[#2b3044] text-center">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase block">Masse Musculaire</span>
                  <span className="text-lg sm:text-xl font-black text-amber-300 mt-1 block">
                    {currentTrans.muscleGain}
                  </span>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="p-4 rounded-xl bg-[#181a25] border-l-4 border-[#ff5500] relative">
                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  « {currentTrans.quote} »
                </p>
              </div>

              {/* Pillars Achieved */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Nutrition adaptée sans privation extrême</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Correction des mouvements par retour vidéo hebdomadaire</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Stabilité du poids après la fin du programme</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#232738] flex flex-wrap items-center justify-between gap-4">
              <a
                href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#ff5500]" />
                <span>Voir plus de témoignages sur @saber_fitt</span>
              </a>

              <a
                href="https://wa.me/?text=Bonjour%20Coach%20Saber,%20j'ai%20vu%20les%20transformations%20sur%20Saber%20Fitt%20et%20je%20veux%20commencer%20ma%20transformation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#e63900] text-white text-xs font-bold shadow-lg shadow-[#ff5500]/30 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Je veux les mêmes résultats</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
