'use client';

import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Instagram, 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles,
  Play,
  Flame
} from 'lucide-react';
import { SaberFitnessLogo } from './SaberFitnessLogo';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Offre Coaching (SF)', href: '#offre-coaching' },
    { name: 'Interface 3D & Vidéo', href: '#experience-3d' },
    { name: 'Programmes', href: '#programmes' },
    { name: 'Vidéos & Reels', href: '#videotheque' },
    { name: 'Calculateur IMC', href: '#calculateur' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#252836] shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-[#0b0c10]/80 via-[#0b0c10]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with exact SF SABER FITNESS GYM insignia */}
        <a
          href="#accueil"
          id="brand-logo-link"
          className="flex items-center gap-3.5 group focus:outline-none"
        >
          {/* Exact SF Vector Logo */}
          <div className="group-hover:scale-105 transition-transform duration-300">
            <SaberFitnessLogo size="sm" showSubtitle={false} />
          </div>

          {/* Coach Avatar Chip with Status */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-[#262a3c]">
            <div className="relative">
              <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-red-600 to-amber-500 shadow-md">
                <img
                  src="/images/saber_profile_avatar.jpg"
                  alt="Coach Saber"
                  className="w-full h-full rounded-full object-cover border border-[#0b0c10]"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0b0c10] rounded-full" title="En ligne" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-300">
                <span>Coach Saber</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <span className="text-[10px] text-zinc-400">@saber_fitt</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#ff5500] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Instagram & WhatsApp Booking) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-instagram-btn"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#191b22] hover:bg-[#252836] border border-[#303445] text-zinc-200 text-xs font-semibold transition-all hover:border-[#ff5500]/40 group"
          >
            <Instagram className="w-4 h-4 text-[#ff5500] group-hover:scale-110 transition-transform" />
            <span>@saber_fitt</span>
          </a>

          <a
            href="https://wa.me/212668737659?text=Bonjour%20Coach%20Saber,%20je%20souhaite%20démarrer%20mon%20coaching%20personnalisé%20avec%20Saber%20Fitness%20Gym%20(Bilan%20Offert%20100%)."
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-whatsapp-cta"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 via-[#ff4400] to-[#ff2200] hover:from-red-500 hover:to-[#ff5500] text-white text-xs font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:-translate-y-0.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @saber_fitt"
            className="p-2 rounded-lg bg-[#191b22] text-zinc-300 hover:text-[#ff5500]"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 rounded-lg bg-[#191b22] border border-[#303445] text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="lg:hidden bg-[#0e1017] border-b border-[#252836] px-4 pt-3 pb-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-[#ff5500] py-2 px-3 rounded-md hover:bg-[#191b22] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#252836] flex flex-col gap-2">
              <a
                href="https://wa.me/212668737659?text=Bonjour%20Coach%20Saber,%20je%20souhaite%20démarrer%20mon%20coaching%20personnalisé%20avec%20Saber%20Fitness%20Gym%20(Bilan%20Offert%20100%)."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-[#ff4400] text-white text-sm font-bold shadow-lg shadow-red-600/30"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp: +212 668-737659</span>
              </a>
              <a
                href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#191b22] border border-[#303445] text-zinc-200 text-sm font-semibold"
              >
                <Instagram className="w-4 h-4 text-[#ff5500]" />
                <span>Instagram @saber_fitt</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
