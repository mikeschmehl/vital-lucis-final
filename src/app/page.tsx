"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Trophy, 
  Brain, 
  ArrowUpRight, 
  Users, 
  CheckCircle2,
  MoveRight
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      
      {/* --- NAVIGATION (Minimalistisch) --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCFA]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
          <span className="font-serif italic text-xl font-bold tracking-tight">Vital Workflow</span>
          
          <div className="hidden md:flex gap-8 text-[11px] font-sans font-bold uppercase tracking-[0.2em] opacity-60">
            <a href="#features" className="hover:opacity-100">Funktionen</a>
            <a href="#process" className="hover:opacity-100">Prozess</a>
            <a href="#pricing" className="hover:opacity-100">Preise</a>
          </div>

          <button className="bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:scale-105">
            Erstgespräch
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-48 px-6 max-w-[1400px] mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 border border-black/10 px-4 py-2 rounded-full mb-8 bg-white">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">Corporate Health Management</span>
          </div>

          {/* Headline im Lucis-Stil */}
          <h1 className="text-[12vw] md:text-[7rem] leading-[0.9] font-light tracking-[-0.02em] mb-12 text-[#1a1a1a]">
            Gesunde <br />
            <span className="font-serif italic text-black/40">Mitarbeitende.</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-black/10 pt-12">
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl opacity-70 font-light">
              Wir reduzieren Krankheitstage um bis zu <strong className="font-medium text-black">32%</strong> durch Gamification, Wearables und KI-Coaching.
            </p>
            
            <div className="flex gap-4">
               <div className="bg-[#1a1a1a] text-white p-6 rounded-2xl min-w-[160px]">
                 <div className="text-3xl font-bold mb-1">89%</div>
                 <div className="text-[10px] uppercase tracking-widest opacity-60">Engagement</div>
               </div>
               <div className="bg-white border border-black/5 p-6 rounded-2xl min-w-[160px]">
                 <div className="text-3xl font-bold mb-1">Ø 20</div>
                 <div className="text-[10px] uppercase tracking-widest opacity-60">Fehltage/Jahr</div>
               </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* --- BENTO GRID (Funktionen) --- */}
      <section id="features" className="px-6 max-w-[1400px] mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Card 1: Echtzeit Daten (Gross) */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-12 border border-black/5 hover:shadow-xl transition-all group flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-12 right-12 p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform">
                <Activity size={32} strokeWidth={1.5} />
             </div>
             <div className="max-w-md z-10">
               <h3 className="text-4xl font-serif italic mb-6">Echtzeit Daten</h3>
               <p className="opacity-60 text-lg">
                 Alle relevanten Daten im Überblick. Wir integrieren Wearables, um jedem Nutzer eine faire Teilnahme zu gewährleisten – egal ob Marathonläufer oder Spaziergänger.
               </p>
             </div>
             {/* Dekoration */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-tl-[100px]"></div>
          </div>

          {/* Card 2: KI Coaching (Hochkant) */}
          <div className="bg-[#1a1a1a] text-[#FDFCFA] rounded-[2.5rem] p-10 flex flex-col justify-between group relative overflow-hidden">
             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
               <Brain size={24} />
             </div>
             <div>
               <h3 className="text-3xl font-light mb-4">KI-Assistent</h3>
               <p className="opacity-50 text-sm leading-relaxed">
                 Persönliche Analysen und Tipps basierend auf Gesundheitsbögen. 24/7 verfügbar.
               </p>
             </div>
             <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full"></div>
          </div>

          {/* Card 3: Gamification */}
          <div className="bg-[#EAE8E4] rounded-[2.5rem] p-10 flex flex-col justify-between group">
             <Trophy size={40} className="opacity-30 group-hover:opacity-100 transition-opacity" />
             <div>
               <h3 className="text-2xl font-serif italic mb-2">Gamification</h3>
               <p className="opacity-60 text-sm">Punkte sammeln, Level aufsteigen, echte Prämien sichern.</p>
             </div>
          </div>

          {/* Card 4: Corporate Benefits (Gross) */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-12 border border-black/5 flex flex-col md:flex-row items-center justify-between gap-10">
             <div>
               <h3 className="text-3xl font-light mb-4">Reduktion & Prävention</h3>
               <p className="opacity-60 max-w-md mb-8">
                 Durchschnittlich sparen Unternehmen 294.000€ pro Jahr durch unseren Vital-Effekt.
               </p>
               <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50">
                 Whitepaper lesen <MoveRight size={14} />
               </button>
             </div>
             <div className="w-full md:w-1/3 bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-serif italic mb-2">-32%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Krankheitstage</div>
             </div>
          </div>

        </div>
      </section>

      {/* --- PRICING (Das Vital Angebot) --- */}
      <section id="pricing" className="px-6 max-w-[1400px] mx-auto text-center mb-40">
        <h2 className="text-4xl md:text-6xl font-light mb-16">
          Investieren Sie in <span className="font-serif italic text-black/40">Gesundheit.</span>
        </h2>

        <div className="inline-block bg-white border border-black/5 p-12 rounded-[3rem] shadow-2xl shadow-gray-100/50 max-w-lg w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
          
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-6">Business Plan</div>
          
          <div className="flex items-start justify-center mb-8">
             <span className="text-2xl mt-2">€</span>
             <span className="text-8xl font-serif italic tracking-tighter">30</span>
             <span className="self-end mb-4 text-gray-400">/mtl.</span>
          </div>

          <div className="space-y-4 text-left max-w-xs mx-auto mb-10 text-sm opacity-70">
            <div className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-emerald-500"/> KI-Coaching App</div>
            <div className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-emerald-500"/> Wearable Anbindung</div>
            <div className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-emerald-500"/> HR-Dashboard</div>
            <div className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-emerald-500"/> Challenges & Boni</div>
          </div>

          <a href="mailto:service@vital-workflow.com" className="block w-full bg-[#1a1a1a] text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform">
            Angebot anfordern
          </a>
          <p className="mt-4 text-[10px] opacity-40">12% sparen bei jährlicher Zahlung</p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-[#FDFCFA] py-24 px-6 rounded-t-[3rem]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
             <h2 className="text-4xl font-serif italic mb-6">Vital Workflow</h2>
             <p className="opacity-50 text-sm max-w-xs leading-relaxed">
               SwissGevity Solutions GmbH i.G.<br />
               Wir gestalten Gesundheit spielend leicht.
             </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm opacity-60">
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-widest text-[10px] opacity-50 mb-2">Kontakt</span>
              <a href="mailto:service@vital-workflow.com">Email senden</a>
              <a href="#">Termin buchen</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="uppercase tracking-widest text-[10px] opacity-50 mb-2">Rechtliches</span>
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
              <a href="#">AGB</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest opacity-30 flex justify-between">
          <span>© 2026 Vital Workflow</span>
          <span>Made in Switzerland</span>
        </div>
      </footer>
    </div>
  );
}