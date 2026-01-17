"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Zap, Database, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
          <span className="text-lg font-bold tracking-tighter uppercase">Vital Workflow</span>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">
            <a href="#analyse" className="hover:opacity-100 transition-opacity">Analyse</a>
            <a href="#automation" className="hover:opacity-100 transition-opacity">Automation</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Kontakt</a>
          </div>
          <button className="bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:scale-105 transition-transform">
            Starten
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-40 px-6 max-w-[1400px] mx-auto pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8 opacity-40">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Prozessoptimierung Schweiz</span>
          </div>

          <h1 className="text-[11vw] md:text-[7rem] leading-[0.9] font-light tracking-[-0.03em] mb-12">
            Workflow <br />
            <span className="italic font-serif text-neutral-400">Revolution.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-12 border-t border-black/10 pt-10">
            <p className="text-xl md:text-2xl leading-relaxed max-w-lg opacity-80 font-light">
              Wir befreien Ihr Unternehmen von manuellem Ballast. 
              Skalierbare Systeme statt täglichem Chaos.
            </p>
            <div className="flex gap-16">
              <div>
                <div className="text-4xl font-bold mb-1">95%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Effizienz</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">0.0</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Fehler</div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* --- BENTO GRID (Der Lucis Look) --- */}
      <section className="px-6 pb-40 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Analyse */}
          <div className="bg-white p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[400px] border border-black/5 hover:shadow-2xl transition-all duration-500 group">
            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4 tracking-tight">Prozess-<br/>analyse</h3>
              <p className="opacity-50 text-lg leading-relaxed">
                Wir identifizieren jeden Flaschenhals in Ihrem Unternehmen. Datenbasiert und gnadenlos ehrlich.
              </p>
            </div>
          </div>

          {/* Card 2: Automation (Dark Mode) */}
          <div className="md:col-span-2 bg-[#1a1a1a] text-[#f8f7f4] p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={32} />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Automatisierung</h3>
                <p className="opacity-70 text-xl max-w-lg leading-relaxed">
                  Schluss mit Copy-Paste. Wir bauen intelligente Brücken zwischen Ihren Tools, die 24/7 für Sie arbeiten.
                </p>
              </div>
            </div>
            {/* Dekorativer Hintergrund */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>

          {/* Card 3: ERP & Systeme */}
          <div className="md:col-span-3 bg-[#e6e5e0] p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-black/5">
             <div className="flex items-center gap-6">
               <div className="bg-white p-4 rounded-full">
                 <Database size={32} />
               </div>
               <div>
                 <h3 className="text-3xl font-bold tracking-tight mb-2">ERP Systeme</h3>
                 <p className="opacity-60 max-w-md">Nahtlose Integration in Ihre bestehende IT-Landschaft.</p>
               </div>
             </div>
             <a href="mailto:info@vital-workflow.com" className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">
               Beratung anfordern
             </a>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a1a1a] text-white py-24 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-3xl font-serif italic mb-6">Vital Workflow</h2>
              <p className="opacity-50 text-sm">Digitale Exzellenz aus der Schweiz.</p>
            </div>
            <div className="mt-10 md:mt-0 flex gap-8 text-sm opacity-60">
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
            </div>
        </div>
      </footer>
    </div>
  );
}