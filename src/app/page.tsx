"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Trophy, 
  Brain, 
  ArrowUpRight, 
  CheckCircle2,
  MoveRight,
  Play
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white">
      
      {/* --- NAVIGATION (REPARIERT & PERFEKT ZENTRIERT) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-md h-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* 1. Logo (Links) */}
          <div className="z-10 flex-shrink-0">
            <span className="font-serif italic text-2xl font-bold tracking-tight">
              Vital Workflow
            </span>
          </div>
          
          {/* 2. Menü (ABSOLUT ZENTRIERT - Bewegt sich keinen Millimeter) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-12">
            <a href="#features" className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">
              Funktionen
            </a>
            <a href="#process" className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">
              Prozess
            </a>
            <a href="#pricing" className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">
              Preise
            </a>
          </div>

          {/* 3. Button (Rechts) */}
          <div className="z-10 flex-shrink-0">
            <button className="bg-[#111111] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:scale-105 transition-transform">
              Starten
            </button>
          </div>

        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-48 px-6 max-w-[1400px] mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          
          {/* LINKER TEIL: Text */}
          <div className="lg:col-span-7">
             {/* Badge */}
             <div className="inline-flex items-center gap-2 mb-10 opacity-50">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Health Management System</span>
             </div>

             {/* Headline */}
             <h1 className="text-[12vw] md:text-[7.5rem] leading-[0.9] font-light tracking-[-0.03em] mb-12 text-[#111111]">
               Gesunde <br />
               <span className="font-serif italic text-gray-400">Teams.</span>
             </h1>

             <p className="text-xl md:text-2xl leading-relaxed opacity-70 font-light max-w-xl mb-12">
               Wir reduzieren Krankheitstage um <strong className="text-black font-medium">-32%</strong>. 
               Durch Gamification, Wearables und KI-Coaching machen wir Gesundheit messbar.
             </p>

             <div className="flex gap-8 items-center border-t border-black/5 pt-8">
                <div className="pr-8 border-r border-black/5">
                   <div className="text-3xl font-serif italic mb-1">89%</div>
                   <div className="text-[9px] uppercase tracking-widest opacity-40">Engagement</div>
                </div>
                <div>
                   <div className="text-3xl font-serif italic mb-1">-32%</div>
                   <div className="text-[9px] uppercase tracking-widest opacity-40">Fehltage</div>
                </div>
             </div>
          </div>

          {/* RECHTER TEIL: Elegantes Bild (Media Card) */}
          <div className="lg:col-span-5 relative group">
             <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl shadow-gray-200">
               <img 
                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                 alt="Vital Workflow App" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
               
               {/* Play Button Overlay */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                     <Play fill="white" className="text-white ml-1" />
                  </div>
               </div>

               {/* Caption unten im Bild */}
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/90 backdrop-blur px-5 py-3 rounded-xl inline-block shadow-lg">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest">Showreel 2026</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </motion.div>
      </main>

      {/* --- BENTO GRID --- */}
      <section id="features" className="px-6 max-w-[1400px] mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 hover:shadow-xl transition-all min-h-[350px] flex flex-col justify-between group">
             <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
               <Activity size={20} />
             </div>
             <div>
               <h3 className="text-2xl font-serif italic mb-3">Echtzeit Daten</h3>
               <p className="text-sm opacity-50 leading-relaxed">Integration von Wearables für faire, datenbasierte Gesundheitsförderung.</p>
             </div>
          </div>

          {/* Card 2 (Dark) */}
          <div className="bg-[#111111] text-white p-10 rounded-[2.5rem] border border-black/5 hover:shadow-xl transition-all min-h-[350px] flex flex-col justify-between relative overflow-hidden group">
             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
               <Trophy size={20} />
             </div>
             <div className="relative z-10">
               <h3 className="text-2xl font-light mb-3">Gamification</h3>
               <p className="text-sm opacity-60 leading-relaxed">Punkte sammeln und im Team Level aufsteigen. Motivation pur.</p>
             </div>
             <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <ArrowUpRight />
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EAE8E4] p-10 rounded-[2.5rem] border border-black/5 hover:shadow-xl transition-all min-h-[350px] flex flex-col justify-between">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
               <Brain size={20} />
             </div>
             <div>
               <h3 className="text-2xl font-serif italic mb-3">KI-Assistent</h3>
               <p className="text-sm opacity-50 leading-relaxed">Tägliches Coaching basierend auf persönlichen Gesundheitsdaten.</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}