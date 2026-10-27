/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, ChevronRight, Sparkles, BookMarked, 
  Layers, Compass, Globe, Menu, X, Link as LinkIcon,
  ArrowRight, ArrowLeft, Check, Circle, CheckCircle2,
  Clock, RotateCcw
} from 'lucide-react';

import { EPOCH_1_CHAPTERS, Chapter } from './data/epoch1';
import { EPOCH_2_CHAPTERS } from './data/epoch2';
import { EPOCH_3_CHAPTERS } from './data/epoch3';
import { EPOCH_4_CHAPTERS } from './data/epoch4';
import { getPhilosopherIntroduction, ERA_NARRATIVES } from './data/philosopherIntros';
import { getEraExamples, getContemporaryExamples } from './data/philosopherExamples';
import { getCommentarySections, getCounterArguments } from './data/philosopherCommentary';
import { PhilosophicalIcon } from './components/PhilosophicalIcons';

function renderFormattedBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-[#0A3630] font-sans">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i} className="italic text-[#0A876B] font-serif font-semibold">{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
}

interface BookPart {
  part: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

const CHRONOLOGICAL_BOOK_PARTS: BookPart[] = [
  {
    part: "Philosophical Era I",
    title: "Ancient Foundations & Axial Age Wisdom (c. 800–200 BCE)",
    description: "The foundational crystallization of human thought across Vedic South Asia, early China, and Classical Greece, ordered strictly from oldest to newest thinker.",
    chapters: EPOCH_1_CHAPTERS
  },
  {
    part: "Philosophical Era II",
    title: "Classical Statecraft, Scholasticism & Awakening (c. 150 BCE – 1400 CE)",
    description: "The synthesis of classical philosophy, Buddhist metaphysics, Islamic and Jewish golden-age theology, and medieval Christian scholasticism, ordered chronologically.",
    chapters: EPOCH_2_CHAPTERS
  },
  {
    part: "Philosophical Era III",
    title: "Early Modern Rationalism, Enlightenment & Critique (1500–1850 CE)",
    description: "The birth of modern scientific method, political contract theory, continental rationalism, British empiricism, German idealism, and early feminism, ordered chronologically.",
    chapters: EPOCH_3_CHAPTERS
  },
  {
    part: "Philosophical Era IV",
    title: "Late Modernity, Existentialism & Contemporary Horizons (1850–Present)",
    description: "The critique of bourgeois morality, Marxism, existentialism, pragmatism, phenomenology, post-structuralism, and contemporary philosophy of technology and ethics, ordered chronologically.",
    chapters: EPOCH_4_CHAPTERS
  }
];

// Helper to find all chapters across parts
const ALL_CHAPTERS: Chapter[] = CHRONOLOGICAL_BOOK_PARTS.flatMap(p => p.chapters);

export default function App() {
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);
  const [selectedChapterId, setSelectedChapterId] = useState('laozi');
  const [activeView, setActiveView] = useState<'site_overview' | 'era' | 'chapter'>('chapter');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEraExplanation, setShowEraExplanation] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  // Reading completion state (stored in localStorage, no login required)
  const [readPhilosophers, setReadPhilosophers] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('worlds_philosophies_read_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return new Set<string>(parsed);
        }
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  // Save read state to localStorage
  const toggleReadPhilosopher = (id: string) => {
    setReadPhilosophers(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('worlds_philosophies_read_v1', JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    setReadPhilosophers(new Set());
    try {
      localStorage.removeItem('worlds_philosophies_read_v1');
    } catch {
      // ignore
    }
    setConfirmReset(false);
  };

  const currentPart = CHRONOLOGICAL_BOOK_PARTS[selectedPartIndex];
  const currentChapter = currentPart.chapters.find(c => c.id === selectedChapterId) || currentPart.chapters[0];
  const currentEraNarrative = ERA_NARRATIVES[selectedPartIndex] || ERA_NARRATIVES[0];

  const totalThinkersCount = ALL_CHAPTERS.length; // Exactly 50 philosophers across the 4 eras
  const totalReadCount = readPhilosophers.size;
  const progressPercent = totalThinkersCount > 0 ? Math.round((totalReadCount / totalThinkersCount) * 100) : 0;

  // Jump to a linked philosopher by name or ID
  const jumpToPhilosopher = (targetNameOrId: string) => {
    const found = ALL_CHAPTERS.find(c => 
      c.id === targetNameOrId || 
      c.name.toLowerCase().includes(targetNameOrId.toLowerCase())
    );
    if (found) {
      const pIdx = CHRONOLOGICAL_BOOK_PARTS.findIndex(p => p.chapters.some(ch => ch.id === found.id));
      if (pIdx !== -1) {
        setSelectedPartIndex(pIdx);
        setSelectedChapterId(found.id);
        setActiveView('chapter');
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Extract related philosophers based on influences or keyword matches in analysis
  const getRelatedPhilosophers = (chapter: Chapter): Chapter[] => {
    const relatedIds = new Set<string>();
    
    chapter.influences.forEach(inf => {
      ALL_CHAPTERS.forEach(c => {
        if (inf.toLowerCase().includes(c.name.toLowerCase()) && c.id !== chapter.id) {
          relatedIds.add(c.id);
        }
      });
    });

    ALL_CHAPTERS.forEach(c => {
      if (c.id !== chapter.id) {
        if (
          chapter.scholarlyAnalysis.toLowerCase().includes(c.name.toLowerCase()) ||
          chapter.counterArguments.toLowerCase().includes(c.name.toLowerCase())
        ) {
          relatedIds.add(c.id);
        }
      }
    });

    if (relatedIds.size === 0) {
      const idx = ALL_CHAPTERS.findIndex(c => c.id === chapter.id);
      if (idx > 0) relatedIds.add(ALL_CHAPTERS[idx - 1].id);
      if (idx < ALL_CHAPTERS.length - 1) relatedIds.add(ALL_CHAPTERS[idx + 1].id);
    }

    return Array.from(relatedIds).map(id => ALL_CHAPTERS.find(c => c.id === id)!).filter(Boolean).slice(0, 4);
  };

  const relatedThinkers = getRelatedPhilosophers(currentChapter);

  // Prev / Next chapter navigation within the current era
  const currentChapterIndex = currentPart.chapters.findIndex(c => c.id === currentChapter.id);
  const prevChapter = currentChapterIndex > 0 ? currentPart.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < currentPart.chapters.length - 1 ? currentPart.chapters[currentChapterIndex + 1] : null;

  const isCurrentChapterRead = readPhilosophers.has(currentChapter.id);

  return (
    <div className="min-h-screen bg-[#F7F4EB] text-[#0A3630] flex flex-col font-sans selection:bg-[#C5A059]/30 selection:text-[#0A3630]">
      {/* Top Academic Header */}
      <header className="bg-[#F8F3E7]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#0A876B]/30 shadow-[0_1px_3px_rgba(10,54,48,0.08)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3.5 md:py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#0A876B] text-[#F8F3E7] focus:outline-none focus:ring-2 focus:ring-[#0A876B] focus:ring-offset-2 transition-all duration-200 hover:bg-[#0A876B]/90 shadow-sm"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* REQUIREMENT #1 & #3: Finalized Open Codex & Wisdom Flame icon navigating to "Philosophical Eras" page */}
            <button 
              onClick={() => {
                setActiveView('site_overview');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative p-2.5 md:p-3 bg-[#0A876B] hover:bg-[#0A876B]/90 text-[#F8F3E7] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-[#0A876B] focus:ring-offset-2 group" 
              title="Click to explore Philosophical Eras global site overview"
              aria-label="Go to Philosophical Eras site overview"
            >
              <PhilosophicalIcon type="codex" className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:scale-105" />
            </button>

            <div>
              <button 
                onClick={() => {
                  setActiveView('site_overview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left focus:outline-none group"
              >
                <h1 className="text-lg md:text-2xl font-bold font-serif tracking-tight text-[#0A3630] leading-tight group-hover:text-[#0A876B] transition-colors">
                  The World's Philosophies
                </h1>
                <p className="text-xs md:text-sm text-[#0A3630]/70 font-sans tracking-wide leading-normal">
                  A Global Journey Through Human Thought
                </p>
              </button>
            </div>
          </div>

          {/* Right Header Controls: Reading Progress Counter */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                setActiveView('site_overview');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A3630]/5 hover:bg-[#0A3630]/10 border border-[#0A3630]/15 transition-all text-xs text-[#0A3630] focus:outline-none focus:ring-2 focus:ring-[#0A876B]"
              title="Click to view full reading progress on the Philosophical Eras page"
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${totalReadCount > 0 ? 'text-[#0A876B]' : 'text-[#0A3630]/40'}`} />
              <span className="font-semibold">{totalReadCount} / {totalThinkersCount}</span>
              <span className="text-[11px] text-[#0A3630]/60">Read</span>
            </button>
          </div>
        </div>
        {/* Subtle gold divider line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent mx-auto max-w-7xl px-4" aria-hidden="true" />
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Sidebar Navigation */}
          <aside className={`
            lg:block ${mobileMenuOpen ? 'block' : 'hidden'}
            lg:col-span-1 bg-[#FBF9F1] border border-[#0A3630]/15 rounded-2xl p-4 md:p-5 shadow-sm flex flex-col gap-4 h-fit
            fixed lg:sticky top-20 lg:top-24 left-4 right-4 lg:left-auto lg:right-auto z-40 max-h-[82vh] lg:max-h-[75vh] overflow-y-auto
            bg-[#FBF9F1]/98 backdrop-blur lg:backdrop-blur-none
          `}>
            {/* Philosophical Eras Global Site Overview Button */}
            <div className="border-b border-[#0A3630]/15 pb-3">
              <button 
                onClick={() => {
                  setActiveView('site_overview');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left p-2.5 rounded-xl font-serif font-bold text-sm transition-all flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#0A876B] ${
                  activeView === 'site_overview'
                    ? 'bg-[#0A876B] text-white shadow-sm'
                    : 'bg-[#0A3630]/5 hover:bg-[#0A3630]/10 text-[#0A3630]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Globe className={`w-4 h-4 ${activeView === 'site_overview' ? 'text-white' : 'text-[#0A876B]'}`} />
                  <span>Philosophical Eras</span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  activeView === 'site_overview' ? 'bg-white/20 text-white' : 'bg-[#0A3630]/10 text-[#0A3630]/70'
                }`}>
                  Overview
                </span>
              </button>

              <div className="mt-2 flex items-center justify-between px-1">
                <button 
                  onClick={() => setShowEraExplanation(!showEraExplanation)}
                  className="flex items-center gap-1.5 text-[11px] text-[#0A3630]/70 hover:text-[#0A876B] font-serif transition-colors focus:outline-none"
                  aria-expanded={showEraExplanation}
                >
                  <BookMarked className="w-3.5 h-3.5" />
                  <span>About the 4 Eras</span>
                  <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${showEraExplanation ? 'rotate-90' : ''}`} />
                </button>
                {mobileMenuOpen && (
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="lg:hidden p-1 text-[#0A3630] hover:text-[#0A876B]"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {showEraExplanation && (
              <div className="p-3 bg-[#0A3630]/5 border border-[#0A3630]/15 rounded-xl space-y-2 text-xs text-[#0A3630]/80 animate-slide-down">
                <p className="font-serif leading-relaxed">
                  The treatise is organized strictly chronologically across four grand philosophical eras, from the 8th Century BCE Axial Age to contemporary critical philosophy.
                </p>
              </div>
            )}

            {/* List of Philosophical Eras in Sidebar */}
            <div className="space-y-4">
              {CHRONOLOGICAL_BOOK_PARTS.map((part, pIdx) => {
                const isPartSelected = selectedPartIndex === pIdx && activeView !== 'site_overview';
                return (
                  <div key={pIdx} className="space-y-1.5">
                    {/* Era Header: Clicking opens Era Overview Page on the right */}
                    <button
                      onClick={() => {
                        setSelectedPartIndex(pIdx);
                        setActiveView('era');
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left font-serif font-bold text-xs tracking-wider uppercase px-2.5 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0A876B] flex items-center justify-between ${
                        isPartSelected && activeView === 'era'
                          ? 'text-[#0A3630] bg-[#C5A059]/25 border-l-4 border-[#C5A059] shadow-xs' 
                          : isPartSelected
                          ? 'text-[#0A3630] bg-[#0A3630]/5 border-l-3 border-[#0A3630]/40 font-bold'
                          : 'text-[#0A3630]/70 hover:text-[#0A3630] hover:bg-[#0A3630]/5'
                      }`}
                    >
                      <span className="truncate">{part.part}</span>
                      <span className="text-[10px] lowercase text-[#0A3630]/50 font-sans tracking-normal font-normal">
                        ({part.chapters.length})
                      </span>
                    </button>

                    {/* Sub-menu: Dedicated Era Overview button & chapters */}
                    {isPartSelected && (
                      <div className="space-y-1 pl-2 border-l-2 border-[#C5A059]/40 mt-1">
                        {/* Right-pane Era Overview Link */}
                        <button
                          onClick={() => {
                            setSelectedPartIndex(pIdx);
                            setActiveView('era');
                            setMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A059] ${
                            activeView === 'era'
                              ? 'bg-[#C5A059]/30 text-[#0A3630] font-bold border border-[#C5A059]/40 shadow-xs'
                              : 'text-[#0A3630]/75 hover:bg-[#C5A059]/15 hover:text-[#0A3630]'
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
                            <span>Era Introduction & History</span>
                          </span>
                          <ChevronRight className={`w-3 h-3 ${activeView === 'era' ? 'text-[#0A3630]' : 'text-[#0A3630]/40'}`} />
                        </button>

                        {/* Thinker chapters list (NO checkmarks here - strictly inside reader per user instruction) */}
                        {part.chapters.map(ch => {
                          const isCurrent = isPartSelected && selectedChapterId === ch.id && activeView === 'chapter';
                          return (
                            <button
                              key={ch.id}
                              onClick={() => {
                                setSelectedPartIndex(pIdx);
                                setSelectedChapterId(ch.id);
                                setActiveView('chapter');
                                setMobileMenuOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-all flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#0A876B] ${
                                isCurrent
                                  ? 'bg-[#0A876B]/15 text-[#0A3630] border-l-3 border-[#0A876B] font-bold shadow-xs'
                                  : 'text-[#0A3630]/80 hover:bg-[#0A3630]/5 hover:text-[#0A3630]'
                              }`}
                            >
                              <span className="truncate">{ch.name}</span>
                              <ChevronRight className={`w-3 h-3 ${isCurrent ? 'text-[#0A876B]' : 'text-[#0A3630]/30'}`} />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Main Content Area (Right Panel) */}
          <div className="lg:col-span-3 space-y-6">

            {/* ========================================================= */}
            {/* VIEW 1: GLOBAL "PHILOSOPHICAL ERAS" SITE OVERVIEW PAGE     */}
            {/* ========================================================= */}
            {activeView === 'site_overview' ? (
              <div className="bg-[#FBF9F1] border border-[#0A3630]/15 rounded-3xl p-6 md:p-10 shadow-md relative overflow-hidden space-y-8 animate-slide-down">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Grand Header */}
                <div className="border-b border-[#0A3630]/15 pb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#0A876B] bg-[#0A876B]/10 font-bold px-3 py-1 rounded-full border border-[#0A876B]/30">
                      Master Chronology
                    </span>
                    <span className="text-xs font-serif font-semibold text-[#0A3630]/80 bg-[#C5A059]/20 px-3 py-1 rounded-full border border-[#C5A059]/30">
                      c. 800 BCE – Present Day
                    </span>
                    <span className="text-xs text-[#0A3630]/60 font-mono ml-auto">
                      {totalThinkersCount} Philosophers • 4 Eras
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0A3630] leading-tight tracking-tight">
                    Philosophical Eras
                  </h2>
                  <p className="text-sm md:text-base text-[#0A3630]/80 font-serif leading-relaxed mt-2 max-w-3xl">
                    An encyclopedic global journey through the foundational crystallization, classical scholasticism, scientific enlightenment, and contemporary frontiers of human reflection across {totalThinkersCount} foundational thinkers.
                  </p>
                </div>

                {/* Overall Reading Progress Card */}
                <div className="p-6 bg-white rounded-2xl border border-[#0A3630]/15 shadow-xs space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0A876B]" />
                      <h3 className="font-serif font-bold text-sm text-[#0A3630]">
                        Your Reading Odyssey Progress
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#0A876B]">
                        {totalReadCount} of {totalThinkersCount} Thinkers ({progressPercent}%)
                      </span>

                      {/* REQUIREMENT #3: Reliable inline Reset Progress implementation (iframe-safe, no window.confirm) */}
                      {totalReadCount > 0 && (
                        confirmReset ? (
                          <div className="flex items-center gap-1.5 animate-slide-down bg-red-50 px-2 py-1 rounded-lg border border-red-200">
                            <span className="text-[11px] text-red-700 font-semibold">Reset progress?</span>
                            <button
                              onClick={handleResetProgress}
                              className="px-2 py-0.5 rounded bg-red-700 text-white text-[10px] font-bold hover:bg-red-800 transition-colors shadow-xs"
                            >
                              Yes, Reset
                            </button>
                            <button
                              onClick={() => setConfirmReset(false)}
                              className="px-1.5 py-0.5 rounded bg-[#0A3630]/10 text-[#0A3630] text-[10px] hover:bg-[#0A3630]/20 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmReset(true)}
                            className="text-[11px] text-[#0A3630]/60 hover:text-red-700 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-red-50 border border-transparent hover:border-red-200"
                            title="Reset all reading checkmarks"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reset</span>
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-[#0A3630]/10 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#0A876B] to-[#C5A059] h-2.5 rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${Math.max(progressPercent, totalReadCount > 0 ? 2 : 0)}%` }}
                    />
                  </div>

                  <p className="text-xs text-[#0A3630]/70 font-sans">
                    Read philosophers at your own pace. Click into any philosopher's chapter and use the <span className="font-semibold text-[#0A876B]">"Mark as Read"</span> checkmark inside their chapter to track your journey. Progress is automatically saved in your browser.
                  </p>
                </div>

                {/* Interactive Chronological Timeline */}
                <div className="space-y-4">
                  <div className="border-b border-[#0A3630]/15 pb-2">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Chronological Timeline Across Civilizations
                    </h3>
                  </div>

                  <div className="relative pl-6 md:pl-8 border-l-2 border-[#C5A059]/40 space-y-6 py-2">
                    {CHRONOLOGICAL_BOOK_PARTS.map((part, pIdx) => {
                      const narrative = ERA_NARRATIVES[pIdx];
                      const eraReadCount = part.chapters.filter(ch => readPhilosophers.has(ch.id)).length;
                      return (
                        <div key={pIdx} className="relative group">
                          {/* Timeline node */}
                          <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#C5A059] border-4 border-[#FBF9F1] shadow-xs group-hover:scale-125 transition-transform" />

                          <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#0A3630]/15 shadow-xs space-y-3 hover:border-[#0A876B]/40 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <span className="text-xs uppercase font-bold tracking-wider text-[#0A876B]">
                                  {part.part}
                                </span>
                                <h4 className="font-serif font-bold text-base md:text-lg text-[#0A3630] mt-0.5">
                                  {part.title}
                                </h4>
                              </div>
                              <span className="text-xs font-mono px-3 py-1 bg-[#C5A059]/15 text-[#0A3630] rounded-full font-semibold shrink-0">
                                {narrative?.timeframe}
                              </span>
                            </div>

                            <p className="text-xs md:text-sm text-[#0A3630]/85 font-serif leading-relaxed">
                              {part.description}
                            </p>

                            <div className="pt-3 border-t border-[#0A3630]/10 flex flex-wrap items-center justify-between gap-3">
                              <span className="text-xs text-[#0A3630]/60 font-mono">
                                {part.chapters.length} Thinkers • {eraReadCount} Completed
                              </span>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => {
                                    setSelectedPartIndex(pIdx);
                                    setActiveView('era');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className="px-3.5 py-1.5 rounded-lg bg-[#C5A059]/20 hover:bg-[#C5A059]/30 text-[#0A3630] text-xs font-serif font-semibold border border-[#C5A059]/40 flex items-center gap-1 transition-all"
                                >
                                  <span>View Era History</span>
                                  <ChevronRight className="w-3.5 h-3.5 text-[#0A3630]" />
                                </button>
                                <button
                                  onClick={() => {
                                    setSelectedPartIndex(pIdx);
                                    setSelectedChapterId(part.chapters[0].id);
                                    setActiveView('chapter');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className="px-3.5 py-1.5 rounded-lg bg-[#0A876B] hover:bg-[#0A876B]/90 text-white text-xs font-serif font-semibold flex items-center gap-1 transition-all shadow-xs"
                                >
                                  <span>Start Reading</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Major Global Traditions Represented */}
                <div className="space-y-4 pt-4 border-t border-[#0A3630]/15">
                  <div className="border-b border-[#0A3630]/15 pb-2">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Major Traditions Explored
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { name: "Vedic & Upanishadic", region: "Ancient India", desc: "Atman, Brahman, karmic causality, non-dual consciousness." },
                      { name: "Classical Chinese Daoism & Confucianism", region: "Ancient China", desc: "Wuwei, the nameless Dao, ren (humaneness), and ritual propriety." },
                      { name: "Greco-Roman Classical & Hellenistic", region: "Mediterranean", desc: "Socratic inquiry, Platonic forms, Aristotelian eudaimonia, Stoicism." },
                      { name: "Buddhist Process Metaphysics", region: "Pan-Asian", desc: "Dependent origination, anatta (non-self), emptiness (sunyata)." },
                      { name: "Islamic Golden Age & Scholasticism", region: "Near East & Europe", desc: "Faith and reason synthesis, Avicennian necessity, Averroistic logic." },
                      { name: "Enlightenment & Modern Existentialism", region: "Global / Modern", desc: "Empiricism, Kantian critique, existential freedom, language games." }
                    ].map((trad, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-[#0A3630]/15 space-y-1.5 shadow-xs">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#0A876B]">{trad.region}</span>
                        <h4 className="font-serif font-bold text-xs text-[#0A3630]">{trad.name}</h4>
                        <p className="text-[11px] text-[#0A3630]/75 leading-relaxed">{trad.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="p-6 bg-[#0A3630] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                      Begin Your Journey
                    </p>
                    <p className="font-serif text-base text-white mt-0.5">
                      Start at the beginning with Era I: Ancient Foundations & Axial Age Wisdom
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPartIndex(0);
                      setSelectedChapterId('laozi');
                      setActiveView('chapter');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A3630] font-serif font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white shrink-0"
                  >
                    <span>Read First Thinker (Laozi)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : activeView === 'era' ? (

              /* ========================================================= */
              /* VIEW 2: DEDICATED SINGLE ERA INTRODUCTION PAGE            */
              /* ========================================================= */
              <div className="bg-[#FBF9F1] border border-[#0A3630]/15 rounded-3xl p-6 md:p-10 shadow-md relative overflow-hidden space-y-8 animate-slide-down">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Navigation Breadcrumb to Global Site Overview */}
                <div className="flex items-center justify-between text-xs text-[#0A3630]/70 border-b border-[#0A3630]/10 pb-3">
                  <button
                    onClick={() => {
                      setActiveView('site_overview');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 hover:text-[#0A876B] font-serif font-semibold transition-colors focus:outline-none"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Back to All Philosophical Eras</span>
                  </button>

                  <span className="font-mono text-[11px]">
                    Era {selectedPartIndex + 1} of {CHRONOLOGICAL_BOOK_PARTS.length}
                  </span>
                </div>

                {/* Era Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#0A876B] bg-[#0A876B]/10 font-bold px-3 py-1 rounded-full border border-[#0A876B]/30">
                      {currentPart.part}
                    </span>
                    <span className="text-xs font-serif font-semibold text-[#0A3630]/80 bg-[#C5A059]/20 px-3 py-1 rounded-full border border-[#C5A059]/30">
                      {currentEraNarrative.timeframe}
                    </span>
                    <span className="text-xs text-[#0A3630]/60 font-mono ml-auto">
                      {currentPart.chapters.length} Thinkers
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#0A3630] leading-tight">
                    {currentPart.title}
                  </h2>
                  <p className="text-xs md:text-sm text-[#0A3630]/70 mt-2 font-mono">
                    Geographic Scope: {currentEraNarrative.geographicScope}
                  </p>
                </div>

                {/* Foundational Era Description */}
                <div className="p-5 md:p-6 bg-[#C5A059]/10 rounded-2xl border border-[#C5A059]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A3630]">
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>Era Essence & Chronological Scope</span>
                  </div>
                  <p className="text-sm md:text-base text-[#0A3630] font-serif leading-relaxed italic">
                    "{currentPart.description}"
                  </p>
                </div>

                {/* Comprehensive Grand Narrative Essay */}
                <div className="space-y-4">
                  <div className="border-b border-[#0A3630]/15 pb-2">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Historical Setting & Civilizational Context
                    </h3>
                  </div>
                  <div className="space-y-4 bg-white p-6 md:p-8 rounded-2xl border border-[#0A3630]/15 shadow-xs">
                    {currentEraNarrative.grandEssay.split(/\n\s*\n/).map((para, idx) => (
                      <p key={idx} className="text-sm md:text-base text-[#0A3630]/90 leading-relaxed font-serif">
                        {para.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Core Intellectual Themes of the Era */}
                <div className="space-y-4">
                  <div className="border-b border-[#0A3630]/15 pb-2">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      Core Intellectual Pillars of This Era
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentEraNarrative.centralThemes.map((theme, tIdx) => (
                      <div key={tIdx} className="bg-white p-5 rounded-2xl border border-[#0A3630]/15 space-y-2 flex flex-col justify-between shadow-xs">
                        <div>
                          <div className="w-7 h-7 rounded-full bg-[#C5A059]/20 text-[#0A3630] font-bold text-xs flex items-center justify-center border border-[#C5A059]/40 mb-3">
                            {tIdx + 1}
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#0A3630] leading-snug">
                            {theme.title}
                          </h4>
                          <p className="text-xs text-[#0A3630]/80 mt-2 leading-relaxed">
                            {theme.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophers in this Era Directory */}
                <div className="space-y-4 pt-4 border-t border-[#0A3630]/15">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Philosophers in Chronological Order
                    </h3>
                    <span className="text-xs text-[#0A3630]/60 font-mono">
                      Click any thinker to open chapter
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {currentPart.chapters.map((ch, idx) => {
                      const isRead = readPhilosophers.has(ch.id);
                      return (
                        <button
                          key={ch.id}
                          onClick={() => {
                            setSelectedChapterId(ch.id);
                            setActiveView('chapter');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`p-4 bg-white hover:bg-[#0A876B]/5 hover:border-[#0A876B]/40 text-left rounded-xl border transition-all shadow-xs group focus:outline-none focus:ring-2 focus:ring-[#0A876B] ${
                            isRead ? 'border-[#0A876B]/30' : 'border-[#0A3630]/15'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] text-[#0A3630]/60 mb-1">
                            <span className="font-mono">#{idx + 1}</span>
                            <span className="truncate max-w-[120px]">{ch.era}</span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#0A3630] group-hover:text-[#0A876B] transition-colors">
                            {ch.name}
                          </h4>
                          <p className="text-xs text-[#0A876B] font-medium mt-1">
                            {ch.tradition}
                          </p>
                          <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-[#0A3630]/70 group-hover:text-[#0A3630]">
                            <span className="flex items-center gap-1">
                              <span>Read Chapter</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                            {isRead && (
                              <span className="text-[10px] text-[#0A876B] font-mono flex items-center gap-0.5">
                                <Check className="w-3 h-3" /> Read
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Action Button to Start Reading the Era */}
                <div className="p-6 bg-[#0A3630] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                      Ready to Explore?
                    </p>
                    <p className="font-serif text-base text-white mt-0.5">
                      Begin reading with {currentPart.chapters[0].name} ({currentPart.chapters[0].era})
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedChapterId(currentPart.chapters[0].id);
                      setActiveView('chapter');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#C5A059]/90 text-[#0A3630] font-serif font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white shrink-0"
                  >
                    <span>Begin Reading Chapter</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (

              /* ========================================================= */
              /* VIEW 3: DETAILED PHILOSOPHER CHAPTER READER               */
              /* ========================================================= */
              <div className="bg-[#FBF9F1] border border-[#0A3630]/15 rounded-3xl p-6 md:p-10 shadow-md relative overflow-hidden space-y-8 animate-slide-down">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Chapter Navigation Header & Breadcrumb */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#0A3630]/70 border-b border-[#0A3630]/10 pb-3 gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveView('era');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-1 hover:text-[#0A876B] font-serif font-semibold transition-colors focus:outline-none"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>{currentPart.part} Overview</span>
                    </button>
                    <span>•</span>
                    <span className="font-mono text-[11px]">
                      Chapter {currentChapterIndex + 1} of {currentPart.chapters.length}
                    </span>
                  </div>

                  {/* Chapter Reader Checkmark Button */}
                  <button
                    onClick={() => toggleReadPhilosopher(currentChapter.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-bold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#0A876B] self-start sm:self-auto ${
                      isCurrentChapterRead
                        ? 'bg-[#0A876B] text-white shadow-xs hover:bg-[#0A876B]/90'
                        : 'bg-white text-[#0A3630]/80 border border-[#0A3630]/25 hover:border-[#0A876B] hover:text-[#0A876B] shadow-xs'
                    }`}
                    title={isCurrentChapterRead ? "Click to mark as unread" : "Click to mark as read"}
                  >
                    {isCurrentChapterRead ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Completed Reading</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-[#0A3630]/40" />
                        <span>Mark as Read</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Chapter Title & Metadata */}
                <div>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] md:text-xs uppercase tracking-widest text-[#0A876B] bg-[#0A876B]/10 font-bold px-3 py-1 rounded-full border border-[#0A876B]/30">
                      {currentChapter.tradition} • {currentChapter.era}
                    </span>
                    <span className="text-[11px] md:text-xs font-mono text-[#0A3630]/60">
                      Region: {currentChapter.region}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#0A3630]">
                    {currentChapter.name}
                  </h2>

                  {/* Historical Era & Philosophical Catalyst Introduction */}
                  <div className="mt-4 p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 shadow-xs space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A876B]">
                      <Compass className="w-4 h-4 text-[#0A876B]" />
                      <span>Historical Era & Philosophical Catalyst</span>
                    </div>
                    <p className="text-sm md:text-base text-[#0A3630] font-serif leading-relaxed">
                      {getPhilosopherIntroduction(currentChapter)}
                    </p>
                  </div>
                </div>

                {/* Cross-Linked Connected Thinkers / Influences */}
                <div className="p-5 bg-[#0A3630]/5 rounded-2xl border border-[#0A3630]/15 space-y-3">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    <span>Connected Philosophers & Cross-References</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedThinkers.map(thinker => (
                      <button
                        key={thinker.id}
                        onClick={() => jumpToPhilosopher(thinker.id)}
                        className="text-xs bg-white hover:bg-[#0A876B]/10 hover:text-[#0A3630] text-[#0A3630] border border-[#0A3630]/20 px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0A876B]"
                      >
                        <ChevronRight className="w-3 h-3 text-[#0A876B]" />
                        <span>{thinker.name} ({thinker.era})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vocabulary Glossary / Difficult Terminology */}
                {currentChapter.vocabularyGlossary && currentChapter.vocabularyGlossary.length > 0 && (
                  <div className="p-5 bg-[#0A3630]/5 rounded-2xl border border-[#0A3630]/15 space-y-3">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <BookMarked className="w-4 h-4" />
                      <span>Key Terminology & Etymological Meanings</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentChapter.vocabularyGlossary.map((vocab, vIdx) => (
                        <div key={vIdx} className="bg-[#F7F4EB] p-3 rounded-xl border border-[#0A3630]/10">
                          <span className="font-serif font-bold text-xs text-[#0A3630]">{vocab.term}: </span>
                          <span className="text-xs text-[#0A3630]/80">{vocab.definition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Intellectual Influences */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Intellectual Influences & Background</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(currentChapter.influences || []).map((inf, idx) => (
                      <span key={idx} className="text-xs bg-[#0A3630]/5 border border-[#0A3630]/15 px-3 py-1.5 rounded-lg text-[#0A3630] font-medium">
                        {inf}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Historical Setting / Central Philosophical Thinking */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 space-y-2 shadow-xs">
                    <h4 className="font-serif font-bold text-[#0A3630] flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4 text-[#0A3630]/60" />
                      <span>Historical & Cultural Setting (Verified)</span>
                    </h4>
                    <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed font-serif">
                      {currentChapter.historicalContext}
                    </p>
                  </div>

                  <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 space-y-2 shadow-xs">
                    <h4 className="font-serif font-bold text-[#0A3630] flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-[#0A3630]/60" />
                      <span>Central Philosophical Thinking</span>
                    </h4>
                    <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed font-serif">
                      {currentChapter.centralThinking}
                    </p>
                  </div>
                </div>

                {/* Authoritative Primary Source Citation */}
                <div className="p-6 md:p-8 bg-[#0A3630] text-white rounded-2xl border border-[#0A876B]/40 space-y-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/90 font-mono border-b border-white/20 pb-2 gap-1">
                    <span>AUTHORITATIVE PRIMARY SOURCE</span>
                    <span>{currentChapter.quote.source} ({currentChapter.quote.citation})</span>
                  </div>
                  <div className="space-y-3">
                    {currentChapter.quote.translation ? (
                      <>
                        <p className="font-serif italic text-emerald-300 text-xs">
                          Original Text / Transliteration: "{currentChapter.quote.originalText}"
                        </p>
                        <p className="font-serif text-base md:text-lg text-white font-medium leading-relaxed">
                          English Translation: "{currentChapter.quote.translation}"
                        </p>
                      </>
                    ) : (
                      <p className="font-serif text-base md:text-lg text-white font-medium leading-relaxed">
                        "{currentChapter.quote.originalText}"
                      </p>
                    )}
                  </div>
                  {currentChapter.quote.translatorOrEdition && (
                    <p className="text-[11px] text-white/70">
                      Scholarly Edition / Translator: {currentChapter.quote.translatorOrEdition}
                    </p>
                  )}
                </div>

                {/* Scholarly Commentary & Argument Reconstruction */}
                <div className="space-y-4">
                  <div className="border-b border-[#0A3630]/15 pb-2">
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Scholarly Commentary & Argument Reconstruction</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {getCommentarySections(currentChapter).map((sec, idx) => (
                      <div key={idx} className="bg-[#0A3630]/5 p-5 md:p-6 rounded-2xl border border-[#0A3630]/15 space-y-3.5 shadow-xs">
                        <div className="flex items-center gap-2.5 border-b border-[#0A3630]/10 pb-2.5">
                          <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#0A3630] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                            {idx + 1}
                          </span>
                          <h4 className="font-serif font-bold text-sm md:text-base text-[#0A3630]">
                            {sec.title.replace(/^[0-9IVX]+\.\s*/, '')}
                          </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {sec.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#0A3630]/90 leading-relaxed font-serif">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0A876B] mt-2 shrink-0" />
                              <div className="flex-1">{renderFormattedBullet(bullet)}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Logical Structure (Premises & Conclusion) */}
                  <div className="p-6 bg-[#F7F4EB] rounded-2xl border border-[#0A3630]/15 space-y-3 shadow-xs">
                    <div className="flex justify-between items-center text-xs font-bold text-[#0A3630]">
                      <span>Comprehensive Logical Structure ({currentChapter.argument.type})</span>
                    </div>
                    <div className="space-y-2 text-xs md:text-sm text-[#0A3630]/85">
                      <p className="font-semibold text-[#0A876B]">Premises:</p>
                      <ul className="list-disc pl-5 space-y-1.5">
                        {currentChapter.argument.premises.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                      <div className="pt-3 border-t border-[#0A3630]/15 mt-3">
                        <p className="font-semibold text-[#0A876B]">Conclusion:</p>
                        <p className="font-medium text-[#0A3630] mt-1">{currentChapter.argument.conclusion}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Era vs Today Examples with Relevance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 space-y-3.5 shadow-xs">
                    <div className="flex items-center gap-2 border-b border-[#0A3630]/10 pb-2">
                      <Clock className="w-4 h-4 text-[#0A876B]" />
                      <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#0A876B]">
                        Examples from That Era & Relevance
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {getEraExamples(currentChapter).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#0A3630]/90 leading-relaxed font-serif">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A876B] mt-2 shrink-0" />
                          <div className="flex-1">{renderFormattedBullet(bullet)}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 space-y-3.5 shadow-xs">
                    <div className="flex items-center gap-2 border-b border-[#0A3630]/10 pb-2">
                      <Sparkles className="w-4 h-4 text-[#C5A059]" />
                      <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#0A876B]">
                        Today's Era (Contemporary Relevance & Why It Matters)
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {getContemporaryExamples(currentChapter).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#0A3630]/90 leading-relaxed font-serif">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                          <div className="flex-1">{renderFormattedBullet(bullet)}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Counter-Arguments & Reflection Questions */}
                <div className="space-y-6 pt-4 border-t border-[#0A3630]/15">
                  <div className="space-y-4">
                    <div className="border-b border-[#0A3630]/15 pb-2">
                      <h3 className="text-xs uppercase font-bold tracking-widest text-[#0A876B] flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[#0A876B]" />
                        <span>Counter-Arguments (Then and Now)</span>
                      </h3>
                    </div>

                    {(() => {
                      const counters = getCounterArguments(currentChapter);
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 space-y-3.5 shadow-xs">
                            <div className="flex items-center gap-2 border-b border-[#0A3630]/10 pb-2">
                              <Clock className="w-4 h-4 text-[#0A876B]" />
                              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#0A876B]">
                                Historical Objections (Then)
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {counters.historical.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#0A3630]/90 leading-relaxed font-serif">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A876B] mt-2 shrink-0" />
                                  <div className="flex-1">{renderFormattedBullet(bullet)}</div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#0A3630]/15 space-y-3.5 shadow-xs">
                            <div className="flex items-center gap-2 border-b border-[#0A3630]/10 pb-2">
                              <Sparkles className="w-4 h-4 text-[#C5A059]" />
                              <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#0A876B]">
                                Modern Critiques (Now)
                              </h4>
                            </div>
                            <ul className="space-y-3">
                              {counters.modern.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#0A3630]/90 leading-relaxed font-serif">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                                  <div className="flex-1">{renderFormattedBullet(bullet)}</div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  <div className="p-6 bg-[#0A3630]/5 rounded-2xl border border-[#0A3630]/15 space-y-3">
                    <h4 className="font-serif font-bold text-[#0A3630] flex items-center gap-2 text-sm">
                      <Compass className="w-4 h-4 text-[#0A3630]/60" />
                      <span>Reflection Questions</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm text-[#0A3630]/90">
                      {currentChapter.reflectionQuestions.map((q, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="font-bold text-[#0A3630]/60 shrink-0">{i + 1}.</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Chapter Bottom Navigation (Prev / Overview / Next) */}
                <div className="pt-6 border-t border-[#0A3630]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {prevChapter ? (
                    <button
                      onClick={() => {
                        setSelectedChapterId(prevChapter.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#0A3630]/20 bg-white hover:bg-[#0A876B]/10 text-xs font-serif font-semibold text-[#0A3630] flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous: {prevChapter.name}</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    onClick={() => {
                      setActiveView('era');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#C5A059]/20 hover:bg-[#C5A059]/30 text-xs font-serif font-semibold text-[#0A3630] border border-[#C5A059]/40 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Era Overview</span>
                  </button>

                  {nextChapter ? (
                    <button
                      onClick={() => {
                        setSelectedChapterId(nextChapter.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#0A3630]/20 bg-white hover:bg-[#0A876B]/10 text-xs font-serif font-semibold text-[#0A3630] flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <span>Next: {nextChapter.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div />
                  )}
                </div>

              </div>
            )}

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0A3630]/20 py-6 text-center text-xs text-[#0A3630]/70 bg-white">
        <p>
          Created by Heena Chhatlani, 2026 • The World's Philosophies • A Global Journey Through Human Thought ({totalThinkersCount} Philosophers across 4 Eras)
        </p>
      </footer>
    </div>
  );
}
