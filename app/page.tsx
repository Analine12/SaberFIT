'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero3DVideo } from '@/components/Hero3DVideo';
import { PosterOfferSection } from '@/components/PosterOfferSection';
import { VideoReelsSection } from '@/components/VideoReelsSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { FitnessCalculator } from '@/components/FitnessCalculator';
import { TransformationsSection } from '@/components/TransformationsSection';
import { AboutCoach } from '@/components/AboutCoach';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { PhoneCall, Instagram, ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f1f3f5] relative flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Interactive 3D Canvas & HD Video Interface */}
        <Hero3DVideo />

        {/* 2. Offre Spéciale Affiche: SF Saber Fitness Gym (Forged by Discipline) */}
        <PosterOfferSection />

        {/* 3. Instagram Reels & Technique Videos with 3D Card Tilt */}
        <VideoReelsSection />

        {/* 3. Bespoke Coaching Programs & VIP Mentorship */}
        <ProgramsSection />

        {/* 4. Interactive French Fitness, BMI & Calorie Calculator */}
        <FitnessCalculator />

        {/* 5. Real Transformations & Verified Client Case Studies */}
        <TransformationsSection />

        {/* 6. About Coach Saber & Methodology */}
        <AboutCoach />

        {/* 7. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 8. Direct Contact & WhatsApp Consultation Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Trigger (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11131b]/95 border border-[#25d366]/40 text-zinc-200 text-[11px] font-bold shadow-xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
          <span>Coach Saber en ligne</span>
        </div>

        <a
          href="https://wa.me/212668737659?text=Bonjour%20Coach%20Saber,%20je%20souhaite%20démarrer%20mon%20coaching%20personnalisé%20avec%20Saber%20Fitness%20Gym%20(Bilan%20Offert)."
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="w-14 h-14 rounded-2xl bg-[#25d366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-2xl shadow-[#25d366]/50 hover:scale-110 active:scale-95 transition-all group"
          aria-label="Contacter Coach Saber sur WhatsApp au +212 668-737659"
        >
          <PhoneCall className="w-6 h-6 text-black group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
}
