"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Zap, Database, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#1a1a1a] selection:bg-black selection:text-white font-sans">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#f9f8f6]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight uppercase">Vital Workflow</div>
          <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60">
            <a href="#services" className="hover:opacity-100 transition-opacity">Expertise</a>
            <a href="#about" className="hover:opacity-100 transition-opacity">Über uns</a>
            <a href="mailto:info@vital-workflow.com" className="hover:opacity-100 transition-opacity">Kontakt</a>
          </div>
          <a href="mailto:info@vital-workflow.com" className="bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:scale-105 transition-transform">
            Anfrage
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8 opacity-50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium">Systeme für Wachstum</span>
          </div>
          
          <h1 className="text-[12vw] md:text-[7rem] leading-[0.9] font-light tracking-[-0.04em] mb-12 text-[#1a1a1a]">
            Workflow <br />
            <span className="font-serif italic text-gray-400">Architekten.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start justify-between border-t border-black/10 pt-12">
            <p className="text-xl md:text-2xl leading-relaxed max-w-xl opacity-80 font-light">
              Wir verwandeln chaotische Prozesse in präzise Automatisierung. 
              <span className="font-serif italic ml-2">Weniger manueller Aufwand, mehr Ergebnis.</span>
            </p>
            
            <div className="flex gap-12">
               <div>
                 <div className="text-3xl font-bold mb-1">95%</div>
                 <div className="text-[10px] uppercase tracking-widest opacity-50">Effizienz</div>
               </div>
               <div>
                 <div className="text-3xl font-bold mb-1">0.0</div>
                 <div className="text-[10px] uppercase tracking-widest opacity-50">Fehler</div>
               </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* --- BENTO GRID SERVICES --- */}
      <section id="services" className="px-6 pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Analyse */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col justify-between border border-black/5 hover:shadow-2xl transition-all duration-500 group">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <BarChart3 size={20} />
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4 tracking-tight">Prozessanalyse</h3>
              <p className="opacity-60 leading-relaxed">
                Wir sezieren Ihre Abläufe. Wir finden die Flaschenhälse, die Ihr Team jeden Tag bremsen, und eliminieren sie.
              </p>
            </div>
          </div>

          {/* Card 2: Automatisierung (Dark) */}
          <div className="bg-[#1a1a1a] text-[#f9f8f6] rounded-[2rem] p-10 flex flex-col justify-between md:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight size={40} />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
              <Zap size={20} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Automatisierung</h3>
              <p className="opacity-70 text-lg max-w-lg leading-relaxed">
                Rechnungsstellung, E-Mails, Datenabgleich. Aufgaben, die sich wiederholen, sollten nicht von Menschen erledigt werden.
              </p>
            </div>
            {/* Decorative Gradient */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full"></div>
          </div>

          {/* Card 3: ERP */}
          <div className="bg-[#e8e6e1] rounded-[2rem] p-10 flex flex-col justify-center border border-black/5 md:col-span-3 lg:col-span-1">
             <Database className="mb-6 opacity-40" />
             <h3 className="text-2xl font-bold mb-2">ERP Systeme</h3>
             <p className="text-sm opacity-60">Zentrale Steuerung für maximale Kontrolle.</p>
          </div>

           {/* Card 4: CTA */}
           <div className="bg-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between border border-black/5 md:col-span-3 lg:col-span-2">
             <h3 className="text-3xl md:text-4xl font-light tracking-tight">
               Bereit für den <span className="font-serif italic">nächsten Schritt?</span>
             </h3>
             <a href="mailto:info@vital-workflow.com" className="mt-6 md:mt-0 flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all">
               Projekt starten <ArrowUpRight size={16} />
             </a>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <div className="text-2xl font-bold tracking-tight uppercase mb-6">Vital Workflow</div>
            <p className="opacity-50 max-w-xs text-sm leading-relaxed">
              Münsterlingen, Thurgau<br />
              Schweiz
            </p>
          </div>
          <div className="flex gap-12 text-sm opacity-60">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="https://www.linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}