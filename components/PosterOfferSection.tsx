'use client';

import React, { useState } from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  Instagram, 
  Dumbbell, 
  ShieldCheck, 
  Award,
  Zap
} from 'lucide-react';
import { SaberFitnessLogo } from './SaberFitnessLogo';

export function PosterOfferSection() {
  const [activeTab, setActiveTab] = useState<'benefits' | 'programme'>('benefits');

  const gains = [
    { title: 'Prise de Masse', desc: 'Développement musculaire sec, hypertrophie ciblée et galbe athlétique' },
    { title: 'Perte de Poids', desc: 'Élimination des graisses tenaces sans fonte musculaire ni effet yoyo' },
    { title: 'Tonification', desc: 'Fermeté corporelle, posture corrigée et définition du tronc' },
    { title: 'Force & Endurance', desc: 'Augmentation des charges, capacité cardiovasculaire et énergie quotidienne' },
    { title: 'Confiance en Soi', desc: 'Discipline mentale d’acier et sentiment de fierté devant le miroir' },
    { title: 'Santé & Bien-Être', desc: 'Vitalité, sommeil récupérateur et longévité physique' },
  ];

  const pillars = [
    { title: 'Programme Sur Mesure', desc: 'Séances 100% individualisées selon ta morphologie, ton matériel et ton planning' },
    { title: 'Suivi Personnalisé', desc: 'Assistance directe 7j/7 avec Coach Saber par WhatsApp pour ne jamais lâcher' },
    { title: 'Nutrition Adaptée', desc: 'Diète flexible et caloriquement calibrée sans privation extrême ni frustration' },
    { title: 'Résultats Garantis', desc: 'Protocole éprouvé : suis le plan à la lettre et observe ta métamorphose' },
  ];

  const posterWhatsAppMessage = `Bonjour Coach Saber !
J'ai vu votre offre officielle "OFFRE COACHING PERSONAL" sur le site Saber Fitness Gym (+212 668-737659).
Je souhaite profiter du BILAN OFFERT 100% POUR LES NOUVEAUX CLIENTS et démarrer mon coaching personnalisé.
Pouvez-vous me guider ?`;

  const posterWhatsAppUrl = `https://wa.me/212668737659?text=${encodeURIComponent(posterWhatsAppMessage)}`;

  return (
    <section id="offre-coaching" className="py-20 bg-[#090a0f] relative overflow-hidden">
      {/* Red Fiery Background Glows inspired by the poster */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-[#ff5500]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Poster Container Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141622] via-[#0f1118] to-[#0a0c12] border-2 border-red-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-red-950/40">
          
          {/* Top Brand Bar matching SF Saber Fitness Gym */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-red-900/30">
            <div className="flex items-center gap-5">
              {/* Exact SF Saber Fitness Gym Logo Insignia */}
              <div className="p-2.5 rounded-2xl bg-[#090a0f] border border-red-500/40 shadow-xl shadow-red-950/60">
                <SaberFitnessLogo size="md" showSubtitle={true} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-red-600 text-white font-black text-[10px] tracking-widest uppercase shadow-md shadow-red-600/30">
                    PROGRAMME OFFICIEL
                  </span>
                  <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
                    Discipline • Dédication • Résultats
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
                  Gym & Coaching en Ligne • Salle • Domicile
                </p>
              </div>
            </div>

            {/* Free Initial Assessment Stamp */}
            <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 border border-red-400/40 flex items-center gap-3 animate-pulse">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-wider text-red-100">Bilan Offert</p>
                <p className="text-2xl font-black leading-none">100%</p>
              </div>
              <div className="h-8 w-[1px] bg-red-300/40" />
              <p className="text-[11px] font-bold leading-tight max-w-[110px]">
                Pour les Nouveaux Athlètes
              </p>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Ce que tu gagnes */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-red-500" />
                <span>Ce que tu gagnes</span>
              </div>
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                Métamorphose Intégrale
              </h4>

              <div className="space-y-2.5 pt-2">
                {gains.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#181a26]/80 border border-zinc-800/80 hover:border-red-500/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-black text-white group-hover:text-red-400 transition-colors uppercase tracking-wide">
                        {item.title}
                      </h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Coach Saber Graphic & "COMMENCE MAINTENANT" */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden border-2 border-red-500/50 shadow-2xl shadow-red-600/30 group">
                <img
                  src="/images/saber_coach_poster.jpg"
                  alt="Coach Saber - Saber Fitness Gym"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Burning red gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-500/50 text-[10px] font-black tracking-wider uppercase text-red-400">
                    Coaching en Ligne
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase">
                    VIP 1-ON-1
                  </span>
                </div>

                {/* Bottom Callout in Poster: "COMMENCE MAINTENANT - TON TRANSFORMATION COMMENCE ICI" */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/90 backdrop-blur-md border border-red-500/60 shadow-xl text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-red-600 text-white text-[9px] font-black tracking-widest uppercase mb-1">
                    Commence Maintenant
                  </span>
                  <p className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Ta Transformation
                  </p>
                  <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 uppercase tracking-tight">
                    Commence Ici
                  </p>
                  <p className="text-[10px] font-extrabold text-red-400 uppercase tracking-widest mt-0.5">
                    Pas d’excuses • Juste des résultats
                  </p>
                </div>
              </div>

              {/* Motto matching poster */}
              <div className="flex items-center justify-center gap-3 pt-4 text-xs font-black tracking-widest uppercase text-zinc-300">
                <span className="text-red-500">Discipline</span>
                <span>•</span>
                <span className="text-white">Dédication</span>
                <span>•</span>
                <span className="text-red-500">Résultats</span>
              </div>
            </div>

            {/* Right: Offre Coaching Personal & Accompagnement 100% Personnalisé */}
            <div className="lg:col-span-4 space-y-5 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-red-500" />
                  <span>Accompagnement VIP</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-none">
                  OFFRE COACHING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">
                    PERSONAL
                  </span>
                </h3>
                <p className="text-sm font-bold text-red-400 uppercase tracking-wide">
                  Un accompagnement 100% personnalisé
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Bénéficiez du système d’entraînement complet Saber Fitt pour transformer votre physique avec méthode, 
                  sans perte de temps et avec un soutien direct au quotidien.
                </p>
              </div>

              {/* Pillars with Checkmarks */}
              <div className="space-y-3 pt-1">
                {pillars.map((pill, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#181a26]/80 border border-zinc-800">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider">
                        {pill.title}
                      </h5>
                      <p className="text-[11px] text-zinc-400 leading-snug mt-0.5">
                        {pill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Booking Action Buttons */}
              <div className="pt-3 space-y-3">
                <a
                  href={posterWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="poster-claim-offer-btn"
                  className="flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-[#e60000] to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-0.5 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Réclamer Mon Bilan Offert 100%</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
                  <a
                    href="https://wa.me/212668737659"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#141622] border border-[#25d366]/40 hover:border-[#25d366] text-zinc-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25d366]" />
                    <span>+212 668-737659</span>
                  </a>

                  <a
                    href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#141622] border border-[#ff5500]/40 hover:border-[#ff5500] text-zinc-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>@saber_fitt</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar: Quick Specs matching poster */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Accès immédiat dès validation du bilan initial</span>
            </div>

            <div className="flex items-center gap-4 text-zinc-300 font-bold">
              <span className="text-red-400">✓ En Ligne</span>
              <span className="text-red-400">✓ En Salle (Gym)</span>
              <span className="text-red-400">✓ À Domicile</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
