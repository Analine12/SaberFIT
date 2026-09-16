'use client';

import React from 'react';
import { Dumbbell, Instagram, PhoneCall, ArrowUp, Heart } from 'lucide-react';
import { SaberFitnessLogo } from './SaberFitnessLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] border-t border-[#1e2230] pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1a1d29]">
          
          {/* Brand Info with SF Saber Fitness Gym Logo */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="inline-block p-3 rounded-2xl bg-[#0e1017] border border-[#202330] shadow-xl">
              <SaberFitnessLogo size="md" showSubtitle={true} />
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs max-w-sm">
              Plateforme d’entraînement et de coaching sportif de haute performance. 
              Des programmes fondés sur la science, la rigueur et l’accompagnement personnalisé 
              par Coach Saber.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#141622] hover:bg-[#ff5500] hover:text-white text-zinc-300 border border-[#272b3c] transition-colors"
                aria-label="Instagram @saber_fitt"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/212668737659?text=Bonjour%20Coach%20Saber,%20je%20vous%20contacte%20depuis%20le%20site%20officiel%20Saber%20Fitness%20Gym."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#141622] hover:bg-[#25d366] hover:text-black text-zinc-300 border border-[#272b3c] transition-colors"
                aria-label="WhatsApp Coach Saber: +212 668-737659"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
              <span className="text-xs text-zinc-300 font-semibold">+212 668-737659</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Navigation Rapide</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#experience-3d" className="hover:text-white transition-colors">Interface 3D & Vidéo</a>
              </li>
              <li>
                <a href="#videotheque" className="hover:text-white transition-colors">Vidéothèque & Reels Instagram</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-white transition-colors">Programmes de Coaching</a>
              </li>
              <li>
                <a href="#calculateur" className="hover:text-white transition-colors">Calculateur Métabolique IMC</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition-colors">Résultats & Transformations</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Programmes Clés</h4>
            <ul className="space-y-2">
              <li>
                <a href="#programmes" className="hover:text-[#ff7733] transition-colors">Sèche Extrême (12 Semaines)</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#ff7733] transition-colors">Prise de Masse & Hypertrophie</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#ff7733] transition-colors">Coaching VIP 1-on-1 WhatsApp</a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-[#ff7733] transition-colors">Transformation 90 Jours</a>
              </li>
              <li>
                <a href="#calculateur" className="hover:text-[#ff7733] transition-colors">Bilan Calorique Gratuit</a>
              </li>
            </ul>
          </div>

          {/* Instagram Connect */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Instagram Officiel</h4>
            <p className="text-xs text-zinc-400">
              Rejoignez <strong>@saber_fitt</strong> pour les conseils quotidiens, stories et entraînements.
            </p>
            <a
              href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#e6005c] text-white font-bold text-xs shadow hover:brightness-110 transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@saber_fitt</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} Saber Fitt. Tous droits réservés. Conçu pour les athlètes déterminés.</p>
          
          <div className="flex items-center gap-4">
            <span>Langue : 🇫🇷 Français</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
