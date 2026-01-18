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
  MoveRight,
  Play
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-20 bg-[#FDFCFA]">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCFA]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex justify-between items-center">
          {/* Logo / Brand */}
          <span className="font-serif italic text-2xl font-bold tracking-tight text-[#1a1a1a]">Vital Workflow</span>
          
          {/* Menu */}
          <div className="hidden md:flex gap-10 text-[11px] font-sans font-bold uppercase tracking-[0.2em] opacity-60 text-[#1a1a1a]">
            <a href="#features" className="hover:opacity-100 transition-opacity">Funktionen</a>
            <a href="#process" className="hover:opacity-100 transition-opacity">Prozess</a>
            <a href="#pricing" className="hover:opacity-100 transition-opacity">Preise</a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
            Erstgespräch
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-48 px-6 max-w-[1400px] mx-auto mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 1. Top Badge */}
          <div className="flex justify-start mb-12">
            <div className="inline-flex items-center gap-3 border border-[#1a1a1a]/10 px-5 py-2.5 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/70">
                Corporate Health Management
              </span>
            </div>
          </div>

          {/* 2. Main Headline (Lucis Style) */}
          <h1 className="text-[13vw] md:text-[8.5rem] leading-[0.85] tracking-[-0.03em] mb-16 text-[#1a1a1a] font-light">
            Gesunde <br />
            <span className="font-serif italic text-black/90">Mitarbeitende.</span> <br />
            <span className="opacity-40">Starke Firmen.</span>
          </h1>

          {/* 3. Bottom Grid (Text links, Bild-Karte rechts wie bei Lucis) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#1a1a1a]/10 pt-12">
            
            {/* LINKER BEREICH: Text & Stats */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/80 font-light max-w-2xl mb-12">
                Wir reduzieren Krankheitstage um bis zu <strong className="font-medium text-black">32%</strong>. 
                Durch die Kombination aus Gamification, Wearables und KI-Coaching schaffen wir Gesundheit, die Spaß macht.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                 {/* CTA Button */}
                 <button className="group flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all">
                   Konzept ansehen 
                   <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>

                 {/* Stats integriert */}
                 <div className="flex gap-8 border-l border-black/10 pl-8">
                    <div>
                      <div className="text-3xl font-serif italic mb-1">-32%</div>
                      <div className="text-[9px] uppercase tracking-widest opacity-50">Fehltage</div>
                    </div>
                    <div>
                      <div className="text-3xl font-serif italic mb-1">89%</div>
                      <div className="text-[9px] uppercase tracking-widest opacity-50">Engagement</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* RECHTER BEREICH: Lucis Style Media Card (Bild/Video Placeholder) */}
            <div className="lg:col-span-5 relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-lg border border-black/5">
                {/* Bild */}
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Vital Workflow App Nutzung" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay & Play Button (wie ein Showreel) */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                     <Play fill="white" className="text-white ml-1" size={24} />
                  </div>
                </div>

                {/* Badge im Bild */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Vital App Preview
                  </div>
                </div>
              </div>
              
              {/* Dekorativer Text unter dem Bild (wie bei Lucis oft) */}
              <div className="mt-4 flex justify-between text-[10px] uppercase tracking-widest opacity-40 px-2">
                <span>Showreel 2026</span>
                <span>01:45 Min</span>
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