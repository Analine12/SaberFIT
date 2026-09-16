'use client';

import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Heart, 
  Target, 
  Flame, 
  Instagram, 
  CheckCircle,
  PhoneCall
} from 'lucide-react';

export function AboutCoach() {
  return (
    <section id="a-propos" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coach Portrait with Aesthetic Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#2b3044] shadow-2xl group">
              <img
                src="/images/saber_gym_training.jpg"
                alt="Coach Saber Fitt à l'entraînement"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />
              
              {/* Bottom Card on Coach Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#11131b]/90 backdrop-blur-md border border-[#2b3044]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-extrabold text-white">Coach Saber</h4>
                    <p className="text-xs text-[#ff7733] font-semibold">Fondateur de Saber Fitt</p>
                  </div>
                  <a
                    href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#ff5500] text-white hover:bg-[#ff661a] transition-colors"
                    aria-label="Instagram de Coach Saber"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#ff5500] to-[#d62800] text-white p-4 rounded-2xl shadow-xl shadow-[#ff5500]/30 hidden sm:block">
              <p className="text-2xl font-black leading-none">8+ Ans</p>
              <p className="text-[10px] uppercase font-bold tracking-wider mt-1 opacity-90">D’Expertise Terrain</p>
            </div>
          </div>

          {/* Coach Story & Philosophy in French */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Votre Préparateur Physique Dédié</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              « Pas de fausses promesses. <br />
              <span className="text-[#ff5500]">Une méthode scientifique</span> et des résultats durables. »
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Passionné de musculation, de biomécanique et de biochimie nutritionnelle depuis près d’une décennie, 
              j’ai créé <strong className="text-white">SF • SABER FITNESS GYM</strong> avec une mission claire : 
              démystifier la remise en forme et offrir un accompagnement d’élite, humain et sur mesure.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Trop de pratiquants stagnent ou se blessent à cause de programmes génériques trouvés au hasard. 
              Mon approche est individualisée : votre morphologie, vos contraintes d’horaires, vos goûts alimentaires 
              et vos objectifs déterminent chaque ligne de votre programme.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#141622] border border-[#262a3c] space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Target className="w-4 h-4 text-[#ff5500]" />
                  <span>Biomécanique Ciblée</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Chaque exercice est sélectionné pour maximiser le recrutement musculaire tout en protégeant vos articulations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141622] border border-[#262a3c] space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Flame className="w-4 h-4 text-[#ff5500]" />
                  <span>Nutrition Flexible & Précise</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Aucun aliment n’est diabolisé. Vous apprenez à gérer vos macronutriments pour manger sainement sans frustration.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141622] border border-[#262a3c] space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Heart className="w-4 h-4 text-[#ff5500]" />
                  <span>Suivi & Écoute 7j/7</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Vous n’êtes jamais seul. Une question sur un repas ou un doute sur un exercice ? Je réponds directement sur WhatsApp.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141622] border border-[#262a3c] space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Award className="w-4 h-4 text-[#ff5500]" />
                  <span>Discipline & Mindset</span>
                </div>
                <p className="text-xs text-zinc-400 leading-normal">
                  Nous forgeons non seulement votre corps, mais aussi une discipline mentale inébranlable qui impacte toute votre vie.
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/212668737659?text=Bonjour%20Coach%20Saber,%20je%20souhaite%20discuter%20de%20mes%20objectifs%20avec%20vous%20depuis%20Saber%20Fitness%20Gym."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-[#ff4400] to-[#ff2200] hover:from-red-500 hover:to-[#ff5500] text-white text-xs font-bold shadow-lg shadow-red-600/30 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Direct (+212 668-737659)</span>
              </a>

              <a
                href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#181a24] hover:bg-[#222636] border border-[#2e3346] text-zinc-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#ff5500]" />
                <span>Voir le profil @saber_fitt</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
