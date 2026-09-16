'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Instagram, 
  Clock, 
  Eye, 
  Flame, 
  Sparkles, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Share2, 
  Dumbbell 
} from 'lucide-react';

interface ReelItem {
  id: string;
  title: string;
  category: 'pecs' | 'legs' | 'back' | 'seche' | 'arms';
  categoryLabel: string;
  duration: string;
  views: string;
  thumbnail: string;
  videoSrc: string;
  muscles: string[];
  coachTip: string;
  description: string;
  keyPoints: string[];
  instagramUrl: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Développé Couché : Biomécanique & Rétraction Scapulaire',
    category: 'pecs',
    categoryLabel: 'Pectoraux & Force',
    duration: '0:58',
    views: '84.5K',
    thumbnail: '/images/workout-action.jpg',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    muscles: ['Pectoraux', 'Triceps', 'Deltoïdes Antérieurs'],
    coachTip: 'Fixez fermement vos omoplates dans le banc avant de décrocher la barre pour protéger vos rotateurs.',
    description: 'Analyse millimétrée de la trajectoire de la barre pour maximiser l’hypertrophie du grand pectoral tout en éliminant la tension sur l’avant de l’épaule.',
    keyPoints: [
      'Arche lombaire naturelle et gainage abdominal',
      'Coudes à 45-60 degrés (ne pas écarter à 90)',
      'Pause explosive de 1 seconde en bas du mouvement'
    ],
    instagramUrl: 'https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=='
  },
  {
    id: 'reel-2',
    title: 'Squat Lourd & Amplitude : Éliminer le Butt-Wink',
    category: 'legs',
    categoryLabel: 'Jambes & Cuisses',
    duration: '1:12',
    views: '112.3K',
    thumbnail: '/images/coach-hero.jpg',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    muscles: ['Quadriceps', 'Grand Fessier', 'Ischios', 'Tronc'],
    coachTip: 'Poussez vos genoux vers l’extérieur dans l’axe des orteils pour ouvrir le bassin et garder le dos verrouillé.',
    description: 'Guide technique pour atteindre une profondeur parfaite sous la parallèle sans cambrer ni arrondir le bas du dos.',
    keyPoints: [
      'Pression constante sur les 3 points d’appui du pied',
      'Inspiration diaphragmatique et manœuvre de Valsalva',
      'Ascension puissante en engageant les fessiers'
    ],
    instagramUrl: 'https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=='
  },
  {
    id: 'reel-3',
    title: 'Sèche Extrême : La Stratégie Anti-Famine de Saber Fitt',
    category: 'seche',
    categoryLabel: 'Sèche & Définition',
    duration: '1:45',
    views: '96.8K',
    thumbnail: '/images/fitness_transformation_1789560968397.jpg',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    muscles: ['Sangle Abdominale', 'Perte de Graisse'],
    coachTip: 'Ne coupez jamais vos glucides drastiquement dès la première semaine : préservez votre métabolisme.',
    description: 'Le protocole complet utilisé par nos athlètes pour descendre sous les 10% de masse grasse sans perdre de muscle.',
    keyPoints: [
      'Déficit calorique modéré de 350-450 kcal',
      'Ratio protéique à 2.2g par kilo de poids corporel',
      'Cardio en zone 2 à jeun ou post-entraînement'
    ],
    instagramUrl: 'https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=='
  },
  {
    id: 'reel-4',
    title: 'Rowing Barre T & Dos Épais en V-Taper',
    category: 'back',
    categoryLabel: 'Dos & Épaisseur',
    duration: '0:48',
    views: '73.1K',
    thumbnail: '/images/saber_gym_training.jpg',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    muscles: ['Grand Dorsal', 'Trapèzes Moyens', 'Rhomboïdes'],
    coachTip: 'Pensez à tirer avec vos coudes, pas avec vos mains, pour désengager les biceps et cibler le dos.',
    description: 'La technique ultime de tirage pour développer une épaisseur massive et un dos en V impressionnant.',
    keyPoints: [
      'Buste incliné à 45 degrés sans balancer',
      'Rétraction volontaire des omoplates en fin de tirage',
      'Descente lente contrôlée sur 3 secondes'
    ],
    instagramUrl: 'https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=='
  },
  {
    id: 'reel-5',
    title: 'Bras Monstrueux : Superset Biceps Curl & Barre au Front',
    category: 'arms',
    categoryLabel: 'Bras & Hypertrophie',
    duration: '1:05',
    views: '128.4K',
    thumbnail: '/images/saber_profile_avatar.jpg',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    muscles: ['Biceps Brachial', 'Triceps Longue Portion'],
    coachTip: 'Verrouillez les coudes le long du corps pour empêcher les épaules d’assister la charge.',
    description: 'Enchaînement haute intensité en superset antagoniste pour provoquer un afflux sanguin massif et une congestion maximale.',
    keyPoints: [
      'Supination maximale en fin de montée pour le pic du biceps',
      'Étirement profond de la longue portion du triceps',
      'Temps sous tension sous protocole 3-0-1-0'
    ],
    instagramUrl: 'https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=='
  },
  {
    id: 'reel-6',
    title: 'Nutrition Anabolique : Le Meal-Prep Idéal en Prise de Masse',
    category: 'seche',
    categoryLabel: 'Nutrition Sportive',
    duration: '1:30',
    views: '65.9K',
    thumbnail: '/images/nutrition.jpg',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    muscles: ['Nutrition', 'Métabolisme', 'Récupération'],
    coachTip: 'Cuisinez vos repas pour 3 jours à l’avance : la régularité nutritionnelle fait 70% de vos gains.',
    description: 'Coach Saber vous ouvre sa cuisine : recettes riches en protéines, index glycémique optimisé et micronutriments clés.',
    keyPoints: [
      'Sources de protéines nobles et assimilables',
      'Glucides complexes autour des séances d’entraînement',
      'Bons lipides (omégas 3) pour l’équilibre hormonal'
    ],
    instagramUrl: 'https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=='
  }
];

export function VideoReelsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les Reels' },
    { id: 'pecs', label: 'Pectoraux & Force' },
    { id: 'legs', label: 'Jambes & Cuisses' },
    { id: 'back', label: 'Dos & V-Taper' },
    { id: 'arms', label: 'Bras & Hypertrophie' },
    { id: 'seche', label: 'Sèche & Nutrition' },
  ];

  const filteredReels = selectedCategory === 'all'
    ? REELS_DATA
    : REELS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="videotheque" className="py-20 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-3.5 h-3.5" />
              <span>Contenu Vidéo Exclusif @saber_fitt</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Vidéothèque Technique & Reels
            </h2>
            <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
              Apprenez les secrets de biomécanique, les corrections posturales et les protocoles de nutrition partagés par Coach Saber.
            </p>
          </div>

          {/* Direct Link to Instagram Account */}
          <a
            href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
            target="_blank"
            rel="noopener noreferrer"
            id="reels-visit-instagram-btn"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#181a24] hover:bg-[#232736] border border-[#ff5500]/30 hover:border-[#ff5500] text-white font-semibold text-xs transition-all shadow group"
          >
            <Instagram className="w-4 h-4 text-[#ff5500] group-hover:scale-110 transition-transform" />
            <span>Suivre @saber_fitt sur Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              id={`filter-reel-${cat.id}`}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/25'
                  : 'bg-[#151722] hover:bg-[#1f2231] text-zinc-300 border border-[#272b3b]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D-Styled Video Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              id={`reel-card-${reel.id}`}
              onClick={() => setActiveReel(reel)}
              className="group relative rounded-2xl bg-[#13151f] border border-[#232736] hover:border-[#ff5500]/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ff5500]/15 flex flex-col"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13151f] via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#ff7733] border border-[#ff5500]/30">
                    {reel.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] text-zinc-300 font-medium">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>{reel.duration}</span>
                  </div>
                </div>

                {/* Center Play Button Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#ff5500] text-white flex items-center justify-center shadow-lg shadow-[#ff5500]/50 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Views indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-zinc-300 font-semibold bg-black/60 px-2 py-1 rounded">
                  <Eye className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{reel.views} vues</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#ff5500] transition-colors line-clamp-2">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {reel.description}
                  </p>
                </div>

                {/* Muscles targeted tags */}
                <div className="pt-2 border-t border-[#202330] flex flex-wrap gap-1.5 items-center">
                  {reel.muscles.map((muscle) => (
                    <span
                      key={muscle}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#1c1f2c] text-zinc-300 border border-[#2b3044]"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Follow on Instagram */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171924] via-[#1c1f2e] to-[#171924] border border-[#2b3044] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#e6005c] p-0.5 flex-shrink-0">
              <div className="w-full h-full rounded-[14px] bg-[#11131a] flex items-center justify-center">
                <Instagram className="w-7 h-7 text-[#ff5500]" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Rejoignez la communauté @saber_fitt</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Des stories quotidiennes, conseils nutrition, motivation et séances live avec Coach Saber.
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/saber_fitt?stkn=MWVqN2xvbHhiM2xqbw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#e6005c] hover:brightness-110 text-white text-xs font-bold shadow-lg shadow-[#ff5500]/25 transition-all"
          >
            S’abonner sur Instagram
          </a>
        </div>

      </div>

      {/* Video Player Modal */}
      {activeReel && (
        <div
          id="video-player-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-[#11131b] border border-[#2e3346] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#232738] bg-[#161824]">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-[#ff5500]" />
                <span className="text-sm font-bold text-white truncate max-w-md">
                  {activeReel.title}
                </span>
              </div>
              <button
                onClick={() => setActiveReel(null)}
                id="close-video-modal-btn"
                className="p-1.5 rounded-lg bg-[#222536] hover:bg-[#ff5500] text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeReel.videoSrc}
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                Votre navigateur ne supporte pas ce format vidéo.
              </video>
            </div>

            {/* Video Insights & Coaching Tips */}
            <div className="p-6 space-y-4 max-h-[40vh] overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#ff7733] uppercase px-2.5 py-1 rounded bg-[#ff5500]/10 border border-[#ff5500]/25">
                  {activeReel.categoryLabel}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {activeReel.views} vues sur Instagram
                </span>
              </div>

              {/* Coach Tip Callout */}
              <div className="p-3.5 rounded-xl bg-[#181b27] border-l-4 border-[#ff5500] text-left">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#ff5500]" />
                  Conseil Clé de Coach Saber :
                </p>
                <p className="text-xs text-zinc-300 mt-1 italic">
                  « {activeReel.coachTip} »
                </p>
              </div>

              {/* Key Technique Points */}
              <div className="text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Points techniques à appliquer :
                </h4>
                <ul className="space-y-1.5">
                  {activeReel.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions in Modal */}
              <div className="pt-3 border-t border-[#232738] flex items-center justify-between gap-3">
                <a
                  href={activeReel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-[#ff7733] hover:underline"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Voir le post original sur @saber_fitt</span>
                </a>
                <button
                  onClick={() => setActiveReel(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#222536] hover:bg-[#2c3044] text-xs font-semibold text-zinc-200"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
