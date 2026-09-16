'use client';

import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Flame, 
  Scale, 
  Zap, 
  Send, 
  Check, 
  Info, 
  Activity, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function FitnessCalculator() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(27);
  const [weight, setWeight] = useState<number>(76);
  const [height, setHeight] = useState<number>(178);
  const [activity, setActivity] = useState<number>(1.55); // 1.2, 1.375, 1.55, 1.725
  const [goal, setGoal] = useState<'seche_rapide' | 'seche_moderee' | 'maintien' | 'masse_propre' | 'masse_explosive'>('seche_moderee');
  const [hasCalculated, setHasCalculated] = useState(false);

  // Calculations
  const results = useMemo(() => {
    // 1. BMI (IMC)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let bmiStatus = '';
    let bmiColor = '';
    if (bmi < 18.5) {
      bmiStatus = 'Insuffisance pondérale';
      bmiColor = 'text-amber-400';
    } else if (bmi < 25) {
      bmiStatus = 'Poids normal / Équilibré';
      bmiColor = 'text-emerald-400';
    } else if (bmi < 30) {
      bmiStatus = 'Surpoids léger';
      bmiColor = 'text-amber-400';
    } else {
      bmiStatus = 'Obésité modérée';
      bmiColor = 'text-rose-400';
    }

    // 2. BMR (Harris-Benedict Mifflin-St Jeor)
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // 3. TDEE
    const tdee = Math.round(bmr * activity);

    // 4. Target Calories based on goal
    let targetCalories = tdee;
    let recommendedProgram = '';

    switch (goal) {
      case 'seche_rapide':
        targetCalories = Math.round(tdee - 500);
        recommendedProgram = 'Programme Sèche Extrême Saber Fitt';
        break;
      case 'seche_moderee':
        targetCalories = Math.round(tdee - 300);
        recommendedProgram = 'Programme Définition & Sèche Progressive';
        break;
      case 'maintien':
        targetCalories = tdee;
        recommendedProgram = 'Recomposition Corporelle & Force';
        break;
      case 'masse_propre':
        targetCalories = Math.round(tdee + 300);
        recommendedProgram = 'Prise de Masse Sèche & Hypertrophie';
        break;
      case 'masse_explosive':
        targetCalories = Math.round(tdee + 550);
        recommendedProgram = 'Programme Puissance & Masse Lourde';
        break;
    }

    // 5. Macro Breakdown
    // Protein: 2.2g per kg for males, 2.0g for females
    const proteinMultiplier = gender === 'male' ? 2.2 : 2.0;
    const proteinGrams = Math.round(weight * proteinMultiplier);
    const proteinCalories = proteinGrams * 4;

    // Fats: 0.9g per kg
    const fatGrams = Math.round(weight * 0.9);
    const fatCalories = fatGrams * 9;

    // Carbs: Remaining calories
    const remainingCalories = Math.max(0, targetCalories - (proteinCalories + fatCalories));
    const carbsGrams = Math.round(remainingCalories / 4);

    return {
      bmi: bmi.toFixed(1),
      bmiStatus,
      bmiColor,
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      recommendedProgram,
      macros: {
        protein: proteinGrams,
        fat: fatGrams,
        carbs: carbsGrams
      }
    };
  }, [gender, age, weight, height, activity, goal]);

  const handleCompute = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCalculated(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
  };

  // WhatsApp Message Generator
  const whatsappUrl = useMemo(() => {
    const text = `Bonjour Coach Saber ! Voici mon bilan calculé sur votre site officiel SF SABER FITNESS GYM (+212 668-737659) :
- Sexe : ${gender === 'male' ? 'Homme' : 'Femme'}
- Âge : ${age} ans
- Poids : ${weight} kg | Taille : ${height} cm
- IMC : ${results.bmi} (${results.bmiStatus})
- Dépense Quotidienne (TDEE) : ${results.tdee} kcal
- Objectif Calorique : ${results.targetCalories} kcal / jour
- Macros cibles : ${results.macros.protein}g Protéines / ${results.macros.carbs}g Glucides / ${results.macros.fat}g Lipides
- Programme recommandé : ${results.recommendedProgram}

Je souhaite bénéficier de mon Bilan Offert 100% et démarrer avec vous !`;

    return `https://wa.me/212668737659?text=${encodeURIComponent(text)}`;
  }, [gender, age, weight, height, results]);

  return (
    <section id="calculateur" className="py-20 bg-[#0e1017] relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#ff5500]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff7733] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Outil Métabolique Interactif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculateur de Calories, IMC & Macros
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Déterminez précisément vos besoins énergétiques quotidiens selon les équations métaboliques 
            appliquées par Coach Saber pour calibrer votre plan de nutrition.
          </p>
        </div>

        {/* 2-Column Grid: Form on Left, Instant Results on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Form */}
          <form
            onSubmit={handleCompute}
            id="fitness-calculator-form"
            className="lg:col-span-7 bg-[#141620] border border-[#262a3c] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl"
          >
            {/* Sexe Selector */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                1. Sexe Biologique
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    gender === 'male'
                      ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30'
                      : 'bg-[#1b1e2a] hover:bg-[#232736] text-zinc-300 border border-[#2f3448]'
                  }`}
                >
                  Homme
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    gender === 'female'
                      ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30'
                      : 'bg-[#1b1e2a] hover:bg-[#232736] text-zinc-300 border border-[#2f3448]'
                  }`}
                >
                  Femme
                </button>
              </div>
            </div>

            {/* Metrics: Age, Weight, Height */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Âge (ans)
                </label>
                <input
                  type="number"
                  min="14"
                  max="85"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-[#1b1e2a] border border-[#2f3448] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-white text-sm font-semibold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Poids (kg)
                </label>
                <input
                  type="number"
                  min="35"
                  max="220"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full bg-[#1b1e2a] border border-[#2f3448] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-white text-sm font-semibold focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Taille (cm)
                </label>
                <input
                  type="number"
                  min="120"
                  max="230"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full bg-[#1b1e2a] border border-[#2f3448] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-white text-sm font-semibold focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                2. Niveau d’Activité Physique
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { value: 1.2, label: 'Sédentaire', desc: 'Peu ou pas d’exercice, travail assis' },
                  { value: 1.375, label: 'Modéré', desc: '1 à 3 séances de sport par semaine' },
                  { value: 1.55, label: 'Actif (Idéal)', desc: '3 à 5 entraînements soutenus / semaine' },
                  { value: 1.725, label: 'Très Actif / Athlète', desc: '6 à 7 séances intenses ou travail physique' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setActivity(item.value)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activity === item.value
                        ? 'border-[#ff5500] bg-[#ff5500]/10'
                        : 'border-[#272b3b] bg-[#1a1c27] hover:bg-[#202433]'
                    }`}
                  >
                    <p className={`text-xs font-bold ${activity === item.value ? 'text-[#ff7733]' : 'text-white'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Goal */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                3. Votre Objectif Principal
              </label>
              <select
                value={goal}
                onChange={(e: any) => setGoal(e.target.value)}
                className="w-full bg-[#1b1e2a] border border-[#2f3448] focus:border-[#ff5500] rounded-xl px-3.5 py-2.5 text-white text-xs sm:text-sm font-semibold focus:outline-none"
              >
                <option value="seche_rapide">Sèche Extrême (-500 kcal) : Perte de graisse accélérée</option>
                <option value="seche_moderee">Définition & Sèche Progressive (-300 kcal) : Préserve le muscle</option>
                <option value="maintien">Maintien & Recomposition Corporelle (Perte de gras + Gain musculaire)</option>
                <option value="masse_propre">Prise de Masse Propre (+300 kcal) : Hypertrophie contrôlée</option>
                <option value="masse_explosive">Prise de Masse Lourde (+550 kcal) : Force et volume maximal</option>
              </select>
            </div>

            <button
              type="submit"
              id="calc-submit-btn"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#e63900] hover:from-[#ff661a] hover:to-[#ff3300] text-white font-bold text-sm shadow-lg shadow-[#ff5500]/25 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Générer Mon Bilan Nutritionnel</span>
            </button>
          </form>

          {/* Right: Results Display Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141620] border border-[#ff5500]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff5500] via-[#ffaa00] to-[#ff2200]" />

              <div className="flex items-center justify-between pb-4 border-b border-[#242738]">
                <div>
                  <h3 className="text-lg font-bold text-white">Résultats Métaboliques</h3>
                  <p className="text-xs text-zinc-400">Évalué pour votre profil actuel</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#1d212f] text-xs font-bold text-[#ff7733] border border-[#2d3348]">
                  IMC : {results.bmi}
                </div>
              </div>

              {/* BMI Gauge */}
              <div className="my-5 p-3.5 rounded-xl bg-[#1a1c27] border border-[#282d3e]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">Diagnostic Corporel :</span>
                  <span className={`font-bold ${results.bmiColor}`}>{results.bmiStatus}</span>
                </div>
                <div className="w-full bg-[#262b3a] h-2 rounded-full mt-2 overflow-hidden flex">
                  <div className="w-1/4 bg-sky-400" title="Insuffisance" />
                  <div className="w-1/2 bg-emerald-400" title="Normal" />
                  <div className="w-1/4 bg-amber-400" title="Surpoids" />
                </div>
              </div>

              {/* Main Calories Target Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1c1f2e] to-[#141620] border border-[#ff5500]/40 text-center space-y-1">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Apport Calorique Quotidien Cible
                </span>
                <div className="text-4xl font-black text-white tracking-tight">
                  {results.targetCalories} <span className="text-lg text-[#ff5500]">kcal</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-zinc-400 pt-2">
                  <span>Métabolisme base : <strong className="text-zinc-200">{results.bmr} kcal</strong></span>
                  <span>•</span>
                  <span>Dépense totale : <strong className="text-zinc-200">{results.tdee} kcal</strong></span>
                </div>
              </div>

              {/* Macronutrient Distribution */}
              <div className="my-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                  Macronutriments Cibles (Par Jour) :
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-[#1a1d29] border border-[#2b3044]">
                    <span className="text-[10px] font-bold text-rose-400 uppercase block">Protéines</span>
                    <span className="text-xl font-extrabold text-white mt-1 block">{results.macros.protein}g</span>
                    <span className="text-[10px] text-zinc-400">{results.macros.protein * 4} kcal</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1a1d29] border border-[#2b3044]">
                    <span className="text-[10px] font-bold text-amber-400 uppercase block">Glucides</span>
                    <span className="text-xl font-extrabold text-white mt-1 block">{results.macros.carbs}g</span>
                    <span className="text-[10px] text-zinc-400">{results.macros.carbs * 4} kcal</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1a1d29] border border-[#2b3044]">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase block">Lipides</span>
                    <span className="text-xl font-extrabold text-white mt-1 block">{results.macros.fat}g</span>
                    <span className="text-[10px] text-zinc-400">{results.macros.fat * 9} kcal</span>
                  </div>
                </div>
              </div>

              {/* Recommended Program */}
              <div className="p-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 text-left mb-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#ff7733]">
                  Programme Saber Fitt Recommandé :
                </p>
                <p className="text-sm font-extrabold text-white mt-0.5">
                  {results.recommendedProgram}
                </p>
              </div>

              {/* WhatsApp Action Button with Formatted Message */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-share-results-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-[#25d366]/20 transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>Envoyer ce Bilan à Coach Saber (WhatsApp)</span>
              </a>

              <p className="text-[11px] text-zinc-400 text-center mt-3">
                Réponse personnalisée sous 24h pour valider vos macros et votre plan d’entraînement.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
