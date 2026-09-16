'use client';

import React, { useState } from 'react';
import { 
  PhoneCall, 
  Send, 
  Instagram, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  MessageCircle
} from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('seche');
  const [experience, setExperience] = useState('intermediaire');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const fullMessage = `Bonjour Coach Saber !
Je vous contacte via votre site officiel Saber Fitness Gym (+212 668-737659).
- Nom : ${name}
- Téléphone : ${phone}
- Objectif : ${goal}
- Niveau actuel : ${experience}
- Message : ${message || 'Je souhaite bénéficier du bilan offert 100% et démarrer mon coaching personnalisé.'}`;

    const whatsappUrl = `https://wa.me/212668737659?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct WhatsApp, Instagram and Coach availability */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contact Direct</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prêt(e) à Démarrer Votre Transformation ?
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Discutez directement avec Coach Saber de vos objectifs, de votre niveau de départ et du meilleur programme pour vous. 
              Pas de robot : un échange humain et personnalisé.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/212668737659?text=Bonjour%20Coach%20Saber,%20je%20souhaite%20démarrer%20mon%20coaching%20personnalisé%20avec%20Saber%20Fitness%20Gym%20(Bilan%20Offert%20100%)."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-card"
                className="p-4 rounded-2xl bg-[#141622] border border-[#25d366]/40 hover:border-[#25d366] flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 shadow-lg group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 flex items-center justify-center text-[#25d366]">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#25d366] transition-colors">
                      WhatsApp Direct : +212 668-737659
                    </h4>
                    <p className="text-xs text-zinc-400">Réponse rapide de Coach Saber dans la journée</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#25d366] px-3 py-1 rounded-lg bg-[#25d366]/10">
                  En ligne
                </span>
              </a>

              <a
                href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
                target="_blank"
                rel="noopener noreferrer"
                id="contact-instagram-card"
                className="p-4 rounded-2xl bg-[#141622] border border-[#ff5500]/30 hover:border-[#ff5500] flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 shadow-lg group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <img 
                      src="/images/saber_profile_avatar.jpg" 
                      alt="Coach Saber Instagram" 
                      className="w-12 h-12 rounded-xl object-cover border border-[#ff5500]/40"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-tr from-[#ff5500] to-[#e6005c] flex items-center justify-center text-white">
                      <Instagram className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#ff5500] transition-colors">
                      Instagram Officiel @saber_fitt
                    </h4>
                    <p className="text-xs text-zinc-400">Reels, stories quotidiennes & DM</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#ff7733] px-3 py-1 rounded-lg bg-[#ff5500]/10">
                  @saber_fitt
                </span>
              </a>
            </div>

            {/* Guarantees */}
            <div className="pt-4 border-t border-[#222536] space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Premier échange sans engagement pour faire le point</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Confidentialité totale de vos mesures et bilans</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Questionnaire */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              id="coaching-inquiry-form"
              className="bg-[#13151f] border border-[#272b3c] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl text-left"
            >
              <h3 className="text-xl font-black text-white">
                Formulaire d’Évaluation & Prise de Contact
              </h3>
              <p className="text-xs text-zinc-400">
                Remplissez vos coordonnées pour générer votre dossier préliminaire et l’envoyer directement à Coach Saber.
              </p>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Alexandre Martin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1b1e2a] border border-[#2e3346] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Numéro WhatsApp / Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: +33 6 12 34 56 78"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1b1e2a] border border-[#2e3346] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* Goal & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Objectif Souhaité
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-[#1b1e2a] border border-[#2e3346] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm font-medium focus:outline-none"
                  >
                    <option value="Sèche et Définition">Sèche & Définition musculaire</option>
                    <option value="Prise de Masse Propre">Prise de masse & Volume musculaire</option>
                    <option value="Coaching VIP 1-on-1">Coaching VIP Complet 7j/7</option>
                    <option value="Recomposition Corporelle">Perte de graisse + Gain de muscle</option>
                    <option value="Transformation 90 Jours">Transformation 90 Jours Signature</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Niveau en Musculation
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#1b1e2a] border border-[#2e3346] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm font-medium focus:outline-none"
                  >
                    <option value="Débutant (0 à 6 mois)">Débutant (0 à 6 mois)</option>
                    <option value="Intermédiaire (1 à 3 ans)">Intermédiaire (1 à 3 ans)</option>
                    <option value="Avancé (3 ans et +)">Avancé (3 ans et +)</option>
                    <option value="Reprise après arrêt/blessure">Reprise après arrêt / blessure</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Vos attentes ou questions particulières (optionnel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Décrivez votre situation, vos éventuelles blessures, votre rythme de travail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1b1e2a] border border-[#2e3346] focus:border-[#ff5500] rounded-xl px-4 py-2.5 text-white text-xs sm:text-sm focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-coaching-inquiry-btn"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#e63900] hover:from-[#ff661a] hover:to-[#ff3300] text-white font-extrabold text-sm shadow-xl shadow-[#ff5500]/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer Mon Dossier sur WhatsApp à Coach Saber</span>
              </button>

              <p className="text-[11px] text-zinc-400 text-center">
                Ce formulaire ouvre directement WhatsApp avec vos réponses pré-remplies pour une prise en charge immédiate.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
